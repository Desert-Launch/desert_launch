# AI Image Prompts

Use these prompts to generate images for the new placeholders in `index.html`.

## Image Slot 01: Hero visual

- Recommended size: `1600x1000`
- Suggested file: `assets/hero-ai.jpg`
- Prompt:

```text
Create a premium website hero image for a software house called Desert Launch. Show a high-end product strategy and software delivery scene with a founder-led, business-first feeling. Include a modern laptop and large display with elegant dashboard and mobile app UI mockups, warm gold highlights, dark navy environment, subtle desert-inspired lighting, and a sense of precision, speed, and trust. The style should feel cinematic, polished, minimal, and expensive. No visible brand names, no readable UI text, no crowded office, no cheesy stock-photo smiles. Composition should leave clean negative space and work well on a dark landing page.
```

## Image Slot 02: Why-us / trust visual

- Recommended size: `1200x1400`
- Suggested file: `assets/trust-ai.jpg`
- Prompt:

```text
Create a sophisticated vertical image for a software agency landing page section about reliability, scalability, and clear execution. Show abstract but believable visual storytelling around digital systems: layered workflow screens, architecture diagrams, product interface panels, soft reflections, structured grid lines, and warm gold accents over a dark charcoal and midnight blue palette. The image should communicate trust, technical depth, smooth delivery, and organized business operations. Keep it modern, premium, and understated. No people required, no text overlays, no logos, no clutter.
```

## Image Slot 03: Final CTA visual

- Recommended size: `1600x900`
- Suggested file: `assets/contact-ai.jpg`
- Prompt:

```text
Create a warm but premium call-to-action image for a software house landing page. Show a focused founder or product consultant in a refined workspace reviewing a web platform and mobile app on screen, with soft cinematic lighting, dark elegant tones, and subtle gold highlights that match a luxury tech brand. The mood should feel direct, trustworthy, calm, and ready to start a serious project conversation. Avoid generic handshake scenes, avoid cheesy stock-photo energy, avoid visible text or logos, and keep the composition clean enough for a modern website card.
```

## Replace paths

After generating the images, replace these `src` values in `index.html`:

- `./assets/ai-image-placeholder.svg` in the hero slot
- `./assets/ai-image-placeholder.svg` in the why-us slot
- `./assets/ai-image-placeholder.svg` in the contact slot

You can reuse one generated image if you want, but the page will look better with three distinct images.
