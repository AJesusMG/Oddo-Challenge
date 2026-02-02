````md
# Odoo Challenge – Landing Page

Static landing page built with HTML, Bootstrap 5.3, Sass, and GSAP.

## Requirements
- Node.js + npm

## Setup
```bash
npm install
npm run vendor
npm run sync
````

## Development

Compile Sass in watch mode:

```bash
npm run dev
```

Open `index.html` (recommended with VS Code Live Server).

## Build

```bash
npm run build
npm run vendor
npm run sync
```

Output: `dist/css/main.css` and `dist/js/*`.

## Scripts

* `dev`: watch Sass → `dist/css/main.css`
* `build`: minified Sass build → `dist/css/main.css`
* `vendor`: copy `bootstrap.bundle.min.js` → `dist/js`
* `sync`: copy `src/js/main.js` → `dist/js`

## Questions

# What do you find good/bad in this mock-up?

Good:
- Solid color palette and professional tone. The hero blue and minimalist style feel confident and serious.
- Clear message and easy-to-scan structure. The flow makes sense: hero -> feature blocks -> awards -> FAQ -> footer.
- Creative feature presentation. The dotted “path” and alternating image/text sections add a nice visual rhythm.
- Good overall consistency. Most components follow a cohesive visual direction.

Bad:
- CTA confusion in the hero. Two actions compete (main button + secondary “Buy now”/header-style action). It’s not obvious what the priority is, and one element ends up stealing attention from the message.
- Inconsistent content width. The hero uses one side margin/content width and the rest of the page switches to another. It feels a bit “off” and lowers the polished look.
- Uneven vertical spacing between sections. Some sections feel tight while others feel too spaced out, without a consistent pattern.
- Typography system isn’t consistent. Similar section headings use different sizes; the hierarchy doesn’t always match the structure.
- Low-contrast text. Several descriptions use light gray on white, which makes reading harder.
- Too much button variety. Padding, height, icon placement (left/right), spacing… it changes too much and feels less standardized.
- Color hierarchy isn’t clearly defined. The main blue is very strong in the hero but is reused inconsistently for other key actions, so “primary vs secondary vs tertiary” isn’t always clear.
- The “dotted line” in the features section is a nice idea but feels a bit disconnected. It doesn’t clearly connect the two cards or reinforce the flow between them.

# What would you improve?

### Clarify the CTA hierarchy.
- Stick to one primary CTA per section (especially in the hero).
- Style secondary actions in a lighter, consistent way.

### Unify the grid and containers.
- Keep the same content width and side margins across the entire site (including the hero).

### Standardize spacing.
- Define a spacing scale (8/16/24/32/48) and apply it consistently across sections and components.

### Define a typography system.
- Set a clear scale for H1/H2/H3/body with fixed sizes and weights per level.

### Improve text contrast.
- Increase body text contrast, and pay attention to link styling and line-height.

### Reduce button variants.
- Limit to 2–3 button styles (primary/secondary/tertiary) with clear rules: height, padding, icon placement.

### Basic accessibility.
- Visible focus states, comfortable tap/click targets, and solid contrast.

### Responsive plan (no mobile mockup yet).
- Define how the nav collapses, how sections stack, and how cards/carousels behave on mobile.

# What would you change?

### Make the hero feel more “alive” and more product-driven.
- Right now it looks professional but a bit flat/boring. I’d redesign the hero to communicate the value more clearly: a stronger product preview or a more compelling visual narrative (not just decorative elements).

### Rethink the overall CTA strategy.
- Pick one primary conversion goal (for example, “Get started” or “Buy now”) and make everything else support it—no competing actions.

### Re-evaluate whether the dotted path actually helps.
- It looks nice, but if it distracts or doesn’t improve understanding, I’d simplify it or replace it with clearer section separators/layout.

### Rebalance the use of color.
- If blue is the primary color, it should consistently dominate the most important CTAs, while everything else stays mostly neutral. Right now the “system” doesn’t feel clearly defined.

### Replace generic images with intentional visuals.
- If the promise is “development done right,” product screenshots, UI components, or real flows usually communicate better than stock-style imagery.

## Note
- Since no mobile mockup was provided, I assumed a standard responsive behavior—but I’d validate key breakpoints and how components behave on smaller screens.