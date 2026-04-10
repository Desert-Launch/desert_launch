"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Lightbox } from "@/components/ui/Lightbox";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/lib/constants";

export function Work() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { projectsWithIndexes, galleryImages } = useMemo(() => {
    let offset = 0;
    const images: { src: string; alt: string }[] = [];
    const projects = PROJECTS.map((project) => {
      const imageIndexes = project.screenshots.map((src, index) => {
        images.push({
          src,
          alt: `${project.name} screenshot ${index + 1}`,
        });
        return offset + index;
      });
      offset += project.screenshots.length;
      return { ...project, imageIndexes };
    });

    return { projectsWithIndexes: projects, galleryImages: images };
  }, []);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-wide text-[var(--gold)]">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Projects with measurable outcomes
          </h2>
        </div>
        <div className="mt-10 grid gap-8">
          {projectsWithIndexes.map((project) => (
            <Card key={project.name} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">What we delivered</p>
                  <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                    {project.delivered.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-[var(--gold)]">Outcome: {project.outcome}</p>
                {project.links && (
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {project.screenshots.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.screenshots.map((src, index) => (
                    <div
                      key={`${project.name}-${index}`}
                      className="group relative h-24 overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] md:h-28"
                    >
                      <button
                        type="button"
                        onClick={() => openGallery(project.imageIndexes[index])}
                        className="h-full w-full"
                        aria-label={`Open ${project.name} screenshot ${index + 1}`}
                      >
                        <Image
                          src={src}
                          alt={`${project.name} screenshot ${index + 1}`}
                          width={520}
                          height={520}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          suppressHydrationWarning
                        />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
        <Lightbox
          images={galleryImages}
          isOpen={isOpen}
          currentIndex={activeIndex}
          onClose={() => setIsOpen(false)}
          onChange={setActiveIndex}
        />
      </Container>
    </Section>
  );
}
