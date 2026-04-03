# Design System Strategy: The Ethereal Professional

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

This system rejects the "box-within-a-box" monotony of standard web dashboards. Instead, it treats the screen as a high-end editorial canvas where institutional authority (Ministry of Education, Applied Technology) meets modern technical innovation. We achieve a "premium" feel by prioritizing negative space and replacing rigid structural lines with tonal depth. 

The layout should feel intentional and asymmetric—using the `surface-container` tokens to create overlapping layers that feel like fine stationery resting on a glass desk. The goal is a UI that doesn't just function, but breathes.

---

## 2. Colors
Our palette is anchored in absolute purity (#FFFFFF) and activated by a sophisticated interplay of Light Purple and Sky Blue.

*   **Primary (`#601273`):** Reserved for high-impact brand moments and active states.
*   **Primary-Container (`#7A2F8C`):** Our signature "Light Purple." Used for hero CTAs and primary action surfaces.
*   **Secondary-Container (`#2dbcfe`):** Our "Sky Blue." Used to denote technical progress, digital accents, and secondary highlights.
*   **The "No-Line" Rule:** Standard 1px borders are strictly prohibited for sectioning. Use background shifts (e.g., a `surface-container-low` section sitting on a `surface` background) to define boundaries.
*   **The Glass & Gradient Rule:** For primary CTAs, use a subtle linear gradient from `primary` to `primary-container`. For floating panels, utilize `surface-container-lowest` with a 20px backdrop-blur and 80% opacity to create a "frosted glass" effect.

---

## 3. Typography
The system uses a dual-font strategy to balance character with readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech" feel. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to command attention.
*   **Body & Titles (Inter):** The industry standard for legibility. Use `body-lg` (1rem) for general content. 
*   **Hierarchy as Identity:** Create a high-contrast scale. A `headline-lg` should feel significantly more authoritative than the `body-lg` text below it. This "Editorial Gap" creates the high-end feel found in premium magazines.

---

## 4. Elevation & Depth
In this design system, depth is a feeling, not a structure.

*   **The Layering Principle:** Stack `surface-container` tiers to create natural lift. 
    *   *Base:* `surface` (#f8f9fa)
    *   *Section:* `surface-container-low` (#f3f4f5)
    *   *Interactive Card:* `surface-container-lowest` (#ffffff)
*   **Ambient Shadows:** Use shadows sparingly. When required, use a tinted shadow: `box-shadow: 0 12px 40px rgba(96, 18, 115, 0.06);`. This purple-tinted shadow mimics natural light passing through a prism, feeling more "organic" than grey shadows.
*   **The "Ghost Border":** If accessibility requires a stroke, use `outline-variant` at 15% opacity. It should be felt, not seen.
*   **Motion Signature:** All interactive elements must utilize a `0.5s ease-in-out` transition. On hover, components must scale to `1.05x`. This deliberate, slow expansion conveys a sense of luxury and calm.

---

## 5. Components

### Fixed Header
The header is the "Institutional Anchor." Use a `surface-container-lowest` background with a glassmorphism backdrop-blur. 
*   **Logos:** Space the Ministry of Education, Applied Technology, WE, and Galaxy for Development logos evenly using a generous horizontal gap. 
*   **Alignment:** Icons and logos must be optically aligned, not just mathematically centered.

### Buttons
*   **Primary:** Linear gradient (`primary` to `primary-container`), white text, `lg` (0.5rem) roundedness.
*   **Tertiary:** No background, `primary` text. On hover, a subtle `surface-container-highest` background appears with the 1.05x scale.

### Cards & Lists
*   **Forbid Dividers:** Use vertical white space or a subtle switch to `surface-container-low` to separate items.
*   **Icons:** Use thin-line icons (1px or 1.5px stroke) in `secondary` (Sky Blue) or a muted `outline` color.

### Input Fields
*   **Style:** Minimalist. No bottom border. Use a `surface-container-highest` background with a `sm` (0.125rem) corner radius.
*   **Active State:** Transitions to a `primary` (Light Purple) ghost border on focus.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** If a section feels "empty," leave it. High-end design thrives on the "luxury of space."
*   **Use Intentional Asymmetry:** Offset text blocks from images to create an editorial, non-template look.
*   **Thin Lines Only:** Ensure all icons and decorative elements maintain a consistent, light stroke weight.

### Don't:
*   **Don't use pure black text:** Always use `on-surface` (#191c1d) for text to maintain softness.
*   **Don't use hard corners:** Every interactive element should have at least the `sm` (0.125rem) roundedness to feel approachable.
*   **Don't rush the transition:** Stick to the `0.5s` timing. Anything faster feels "standard"; `0.5s` feels "curated."