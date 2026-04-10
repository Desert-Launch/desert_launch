"use client";

import Image from "next/image";
import { useEffect } from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onChange,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onChange((currentIndex + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        onChange((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, isOpen, onChange, onClose]);

  if (!isOpen || images.length === 0) return null;

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(6,8,12,0.85)] px-4 py-8">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.1)] px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.2)]"
      >
        Close
      </button>
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 text-xs uppercase tracking-widest text-[var(--muted)]">
          <span>Project Gallery</span>
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <div className="relative flex items-center justify-center p-4 md:p-6">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={900}
            className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain"
            suppressHydrationWarning
            priority
          />
        </div>
        {images.length > 1 && (
          <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] px-5 py-4 text-sm">
            <button
              type="button"
              onClick={() =>
                onChange((currentIndex - 1 + images.length) % images.length)
              }
              className="rounded-full border border-[var(--border)] px-4 py-2 text-[var(--muted)] hover:text-white"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => onChange((currentIndex + 1) % images.length)}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-[var(--muted)] hover:text-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
