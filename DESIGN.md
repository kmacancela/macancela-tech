# Design

A locked design direction for the Macancela portfolio. Every page should use this system before adding new visual ideas.

## Genre

Polished product-profile portfolio.

## Macrostructure

- Home: candidate summary plus workbench snapshot.
- Projects: case-study index with proof-first rows.
- Experience: timeline with readable role summaries.
- About: personal context and technical values.
- Contact: direct action surface.

## Theme

- Background: dark charcoal only.
- Ink: high-contrast near-black or warm white.
- Stable dark surfaces: use `night` tokens for intentional dark bands so surfaces stay consistent.
- Accent: deep teal used for actions, focus, and selective highlights.
- Support: clay and leaf used sparingly for status or secondary emphasis.
- Rules: subtle borders only where they help separate dense information.

## Imagery

- `ladybug-nature.jpg` may be used as hero atmosphere only, never as a standalone decorative image card.
- Hero image treatment: full-bleed background, visible through the left copy area, text-first contrast.
- The image should add personal texture while the foreground remains focused on SWE role fit, proof, current project, and contact paths.

## Typography

### Problem With The Previous Stack

- Archivo worked, but it made the type system larger than the portfolio needs.
- Ogg made the site feel too fashion/editorial when it owned every major heading.
- DM Sans felt soft and generic next to the dark product-profile interface.
- IBM Plex Mono pushed the site toward familiar developer-portfolio styling.
- The type system leaned on big display-serif moments instead of crisp hiring readability.

### Chosen Stack

- Display/UI/body: `Source Sans 3`, weights 400-700.
- Editorial accent: `Ogg`, weights 400-500, used only for signature moments.
- Technical labels: `JetBrains Mono`, weights 400-600, used sparingly.

### Why This Stack

- `Source Sans 3` keeps resumes, project summaries, UI labels, and section headings easy to scan.
- `Ogg` gives the portfolio a personal, editorial voice when used in very small doses, starting with the hero name.
- `JetBrains Mono` is reserved for compact evidence labels, stack tags, and machine-like metadata only when the label genuinely benefits from alignment.

### Typography Rules

- Sans display text should stay below `6rem` and use tracking no tighter than `-0.02em`.
- Ogg should be reserved for the hero name, one about-page pull quote, and future blog titles.
- Body text should stay at `1rem` or larger with line-height around `1.55`.
- Long prose should max out around `65ch`.
- Use 3 useful levels most of the time: label, body, section heading.
- Avoid decorative serif typography in project titles, experience titles, nav, buttons, badges, metrics, and contact UI.

## Components

- Buttons use clear labels, strong focus states, and restrained borders.
- Badges are small status indicators, not decorative pills.
- Panels should hold real evidence, links, or workflow context.
- Avoid cards inside cards and avoid ornamental image containers.

## Motion

Use restrained reveal and hover motion. Respect reduced-motion preferences.

## What To Avoid

Random hero photography, giant split-name typography, fake technical chrome, heavy grids, repeated numbered nav/section markers, and invented metrics.
