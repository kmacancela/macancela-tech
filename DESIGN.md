# Design

A locked design direction for the Macancela portfolio. Every page should use this system before adding new visual ideas.

## Genre

Warm editorial software portfolio.

## Macrostructure

- Home: Binjan-inspired personal hero, Serene-inspired work strip, proof, experience, and stack range.
- Projects: case-study index with proof-first rows.
- Experience: timeline with readable role summaries.
- About: personal context and technical values.
- Contact: direct action surface.

## Theme

- Background: warm cream and pale sage, not stark white.
- Ink: deep-water teal for primary identity moments, warm ink for body.
- Accent: teal brush marks and actions, with warm gold used as a soft supporting field.
- Support: clay and leaf used sparingly for status or secondary emphasis.
- Rules: pale sage borders and bracketed labels should create the Serene Fit Illustrator restraint.
- Avoid returning to dark-mode-first sections unless a page has a strong reason.

## Imagery

- `karina-portrait.jpg` is the main personal portrait for the Binjan-style hero.
- `ladybug-nature.jpg` can return as subtle texture later, but it should not compete with the portrait-led homepage.
- Imagery should feel personal and calm, not random stock atmosphere.

## Typography

### Problem With The Previous Stack

- Archivo worked, but it made the type system larger than the portfolio needs.
- Ogg made the site feel too fashion/editorial when it owned every major heading.
- DM Sans felt soft and generic next to the dark product-profile interface.
- IBM Plex Mono pushed the site toward familiar developer-portfolio styling.
- The type system leaned on big display-serif moments instead of crisp hiring readability.

### Chosen Stack

- Display/UI/body: `Source Sans 3`, weights 400-700.
- Editorial accent: `Ogg`, weights 400-500, used only for signature/brand moments.
- Technical labels: `JetBrains Mono`, weights 400-600, used sparingly.

### Why This Stack

- `Source Sans 3` keeps resumes, project summaries, UI labels, and section headings easy to scan.
- `Ogg` gives the portfolio a personal, editorial voice when used in very small doses, starting with the macancela.tech wordmark.
- `JetBrains Mono` is reserved for compact evidence labels, stack tags, and machine-like metadata only when the label genuinely benefits from alignment.

### Typography Rules

- Sans display text should stay below `6rem` and use tracking no tighter than `-0.02em`.
- Ogg should be reserved for the macancela.tech wordmark, one about-page pull quote, and future blog titles.
- Body text should stay at `1rem` or larger with line-height around `1.55`.
- Long prose should max out around `65ch`.
- Use 3 useful levels most of the time: label, body, section heading.
- Avoid decorative serif typography in project titles, experience titles, nav, buttons, badges, metrics, and contact UI.

## Components

- Buttons use rounded Binjan-style capsules with strong focus states.
- Badges are bracket-like status indicators, not decorative pills.
- Panels should hold real evidence, links, or workflow context.
- Avoid cards inside cards and avoid ornamental image containers.

## Motion

- Use restrained reveal and hover motion. Respect reduced-motion preferences.
- Homepage can use a once-per-session opening: Ogg wordmark, pulsing teal dot, teal brush sweep, then hero reveal.
- The opening should stay under two seconds and never be required for reading or navigation.

## What To Avoid

Random hero photography, dark generic developer chrome, giant split-name typography, heavy grids, invented metrics, and portfolio-copy phrases that sound like placeholder agency templates.
