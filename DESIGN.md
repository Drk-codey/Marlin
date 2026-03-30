# Design System Document: High-End Editorial Booking Experience

## 1. Overview & Creative North Star

### The Creative North Star: "The Curated Precision"
This design system moves beyond the "standard booking engine" to create an editorial-grade digital experience. We are not just building a utility; we are building a destination. Our North Star is **Curated Precision**—a philosophy where every pixel feels intentional, and luxury is communicated through vast breathing room, authoritative typography, and a "Flat-Plus" depth model.

While the brief calls for a flat, clean aesthetic, we achieve premium status by breaking the rigid, boxed-in "template" look. We use **intentional asymmetry**, high-contrast typographic scales, and tonal layering to guide the user's eye. This isn't just about white space; it's about *active* space that allows our high-end imagery and bold red accents to breathe.

---

## 2. Colors & Surface Logic

Our palette is anchored by the high-energy `primary` (#E63027) and the authoritative `on-surface` (#1A1F36). The goal is to use these with surgical precision.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate ideas. This design system forbids it. Boundaries must be defined solely through background color shifts or the **Spacing Scale**. 
- **Transitioning Sections:** Move from `surface` (#FFFFFF) to `section-gray` (#F5F5F5) to define content blocks.
- **The Red Blush:** Use `surface-container-low` (#FFF5F5) for interactive FAQ zones to create a soft, brand-immersive environment without using heavy strokes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Depth is achieved by "stacking" tones rather than adding drop shadows.
- **Base Level:** `surface` (#FFFFFF) for the main page body.
- **Inset Level:** `section-gray` (#F5F5F5) for "Top Picks" or "Testimonials" to create a sense of containment.
- **Elevated Level:** Place `surface-container-lowest` (#FFFFFF) cards on top of a `section-gray` background. This creates a "soft lift" that feels architectural and premium.

### Signature Textures
While the system is "flat," we introduce "soul" through:
- **Tonal Depth:** Use `primary-container` (#DF2B23) for hover states on `primary` buttons to provide a sophisticated, weighted feel.
- **The Star Gold:** Reserved strictly for `star-gold` (#FFC107) ratings, providing a singular, high-contrast point of trust against the Dark Navy text.

---

## 3. Typography: The Editorial Voice

We utilize a high-contrast scale to create an "Editorial" hierarchy. By pairing the geometric authority of **Plus Jakarta Sans** with the functional clarity of **Manrope**, we balance character with readability.

*   **Display & Headlines (Plus Jakarta Sans, 700-800):** These are your "shout" moments. Use `display-lg` (3.5rem) for Hero statements. The tight tracking and bold weight should feel like a premium travel magazine header.
*   **Titles & Body (Manrope, 400-500):** This is the "workhorse." `title-md` (1.125rem) is used for card headings to ensure clarity at smaller sizes. `body-lg` (1rem) is the standard for descriptive text to maintain an airy, readable feel.
*   **Labels (Manrope, 500):** Used for micro-copy and badges. Always set in `label-md` or `label-sm` to keep the UI from feeling cluttered.

---

## 4. Elevation & Depth: Tonal Layering

We eschew traditional skeuomorphism. Instead, we use **Tonal Layering** to convey importance.

### The Layering Principle
Do not use shadows to lift cards. Instead, use the contrast between `surface` (#FFFFFF) and `section-gray` (#F5F5F5). A card with a 16px radius sitting on a slightly darker section creates a natural focal point.

### The "Ghost Border" Fallback
In rare instances where a card sits on a white background (e.g., search results), use a **Ghost Border**.
- **Token:** `outline-variant` (#EEEEEE). 
- **Execution:** 1px solid, but never high contrast. It should feel like a "hint" of a container rather than a box.

### Visual Breathing Room
- **Section Padding:** A mandatory **80px vertical** (`spacing-16`) between major sections. This prevents the "wall of content" feel common in budget booking sites.
- **Card Gaps:** Always use **24px** (`spacing-6`) to ensure the eye can distinguish between separate offerings easily.

---

## 5. Components

### Buttons (The "Pill" Standard)
All buttons use `rounded-full` (50px).
- **Primary:** `primary` (#E63027) background with `on-primary` (#FFFFFF) text.
- **Secondary:** `on-secondary-fixed` (#1A1F36) background. Used for high-contrast actions like "Newsletter Signup."
- **Ghost:** No background, `primary` text. Used for "View All" or secondary navigation.

### Cards & Lists
- **The "No Divider" Rule:** Forbid 1px horizontal lines in lists. Use `spacing-4` (1.4rem) of vertical white space to separate list items.
- **Radius:** Images and Cards must use `rounded-lg` (16px) to soften the "flat" aesthetic.

### Inputs & Forms
- **Radius:** `rounded-sm` (8px). Forms should feel more functional and structured than the "pill" buttons.
- **States:** Use `primary` (#E63027) for the 2px focus ring to ensure the user always knows where they are.

### Selection Chips
- Use `section-gray` (#F5F5F5) for unselected states and `primary` (#E63027) for selected states. This provides immediate visual feedback without complex shading.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `display-lg` typography for impactful hero sections.
- **Do** use the `spacing-20` (7rem) scale for massive margins when ending a major content journey.
- **Do** lean on the Red Blush (`#FFF5F5`) for large background areas that need to feel "warm" rather than "cold gray."

### Don’t:
- **Don't** use 1px solid borders to separate sections. Use color blocks.
- **Don't** use "Standard Blue" for links. Use `primary` red or `on-surface` navy with an underline.
- **Don't** crowd the Max-width (1280px). If the content feels tight, increase the white space, don't shrink the text.
- **Don't** use gradients on UI components. Keep buttons and cards strictly flat to maintain the "Editorial" sophistication.