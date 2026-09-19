## Building with Desert Launch — conventions

This is the design system of desertlaunch.dev: a **dark** site (navy page, light ink, one gold accent), Tailwind v4 utilities for layout, a fixed set of component classes for the pieces, and Inter (Tajawal for Arabic). Every design you build should look like a page of that site.

### Setup: the page surface is part of the system

`styles.css` styles `body` itself — navy background, light text, Inter. There is no provider or theme wrapper to mount. Do not set your own page background or body font; if you need a dark surface on an element, use `bg-bg` (page navy) or `bg-bg-soft` (a shade lighter).

Two things the site's own layout provides that you must provide too, at the root of what you build:

- Put `className="js"` on your root element. Progressive-enhancement parts hide behind it: without it the brief form inside `SiteContact` does not render and nothing reveals on scroll.
- For an Arabic page wrap everything in `<div lang="ar" dir="rtl" className="js font-arabic">`. The `Site*` sections do this themselves when given `lang="ar"`; for your own layout glue you do it once at the root. Every component class is already mirrored for `[dir="rtl"]`.

### The styling idiom: component classes + a small utility vocabulary

Prefer a component from the library over re-drawing its class. When you lay things out yourself, use only these families — they are the ones compiled into `styles.css`; other Tailwind class names will not exist:

| Family | Names |
|---|---|
| Layout | `flex flex-col flex-row flex-wrap grid hidden block inline-flex`, `items-{start,center,end,stretch}`, `justify-{start,center,end,between}`, `grid-cols-{1..6}`, `gap-{0..16}` / `gap-x-* gap-y-*`, `shrink-0 grow flex-1 min-w-0 w-full max-w-{xs..6xl}`, `mt-auto ms-auto` |
| Responsive | prefix any of the above with `sm:` `md:` `lg:` (e.g. `sm:grid-cols-2 lg:grid-cols-3`, `flex-col sm:flex-row`) |
| Spacing | `p-{0..16}`, `px- py- pt- pb- ps- pe-`, `m- mx- my- mt- mb- ms- me-` (0–16, `auto`). Logical sides (`ps`/`pe`/`ms`/`me`) so RTL flips correctly |
| Type scale | `text-micro` (12px labels) · `text-meta` (13px captions) · `text-body` (15px copy) · `text-lead` (17px intros); headings use the classes `h-display h-page h-section h-card` |
| Colour | text: `text-ink text-ink-soft text-muted text-gold text-gold-strong text-live` · background: `bg-bg bg-bg-soft bg-gold` · border: `border border-line border-line-strong border-gold` |
| Shape & depth | `rounded-xs rounded-sm rounded-md rounded-lg rounded-full`, `shadow-e1 shadow-e2 shadow-e3` |
| Site classes | `section section--alt shell` (page bands and the centred container), `panel`, `card card--link card__link`, `btn btn-primary btn-secondary`, `chip`, `kicker`, `icon-box`, `stat stat__label stat__value stat__note`, `attribution`, `pf-link pf-link--strong pf-link--external`, `step-number`, `form-label form-control form-help form-error form-required form-optional`, `bullet-dot`, `prose`, `reveal` |

Rules that keep it on-brand: one gold `btn-primary` per view, the alternative is `btn-secondary`; hover lift belongs only to `card--link` (a card that is really a link); body copy is `text-body text-muted`, headings are `text-ink`; alternate `section` and `section--alt` down a page; content lives inside `shell`. Never hardcode a hex colour or a pixel radius — the tokens are `var(--color-bg|bg-soft|ink|ink-soft|muted|line|line-strong|gold|gold-strong|gold-deep|whatsapp|live)`, `var(--radius-xs|sm|md|lg)`, `var(--shadow-e1|e2|e3)`, `var(--text-micro|meta|body|lead)`.

### Where the truth lives

- `styles.css` → `_ds_bundle.css` is the compiled site stylesheet: `:root` tokens, `body`, every class above. Read it before inventing a style.
- `fonts/fonts.css` ships Inter (variable) and Tajawal; `--font-sans` / `--font-arabic` are already wired.
- `components/<group>/<Name>/<Name>.prompt.md` has each component's props and real examples; the `Site*` sections take only `lang` and render the site's own copy.

### One idiomatic block

```jsx
const { SectionBand, SectionHead, Card, Button } = window.DesertLaunch;

<div className="js">
  <SectionBand id="services" labelledBy="services-heading">
    <SectionHead id="services-heading" kicker="Services" title="What we build" intro="Fixed quote, milestone payments, a year of support." />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card icon="mobile" title="Mobile app development">One Flutter codebase, both stores.</Card>
      <Card icon="web" title="Web development">Sites, portals and dashboards built for one action.</Card>
      <Card icon="mvp" title="MVP development" href="/services/mvp-development/">The smallest version that proves the idea.</Card>
    </div>
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href="https://wa.me/201022838534" external>Get a Free Quote on WhatsApp</Button>
      <Button variant="secondary" href="#contact">Email us</Button>
    </div>
  </SectionBand>
</div>
```
