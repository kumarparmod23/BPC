# Design System Document

## 1. Overview & Creative North Star: "The Clinical Sanctuary"

This design system is engineered to transform a sensitive medical topic into a premium, authoritative, and calming digital experience. Moving away from the cluttered, "flyer-like" aesthetics of traditional medical landing pages, we adopt a **Clinical Sanctuary** approach. 

The "Clinical Sanctuary" North Star focuses on **intentional white space, tonal depth, and editorial precision.** It prioritizes patient comfort through a "Soft Medical" aesthetic—utilizing the deep teals of the brand to anchor trust, while employing sophisticated layering and "Glassmorphism" to ensure the interface feels breathable, modern, and high-end. We break the rigid grid through asymmetric typography placements and overlapping "floating" containers that guide the eye naturally through complex medical information.

---

## 2. Colors: Tonal Architecture

Our palette is not merely decorative; it is functional. We use tonal shifts to define boundaries rather than harsh lines.

### The Palette (Core Tokens)
- **Primary (`#00685e`):** Used for authoritative elements and primary CTAs.
- **Primary Container (`#008376`):** Used for large header backgrounds and signature accents.
- **Secondary (`#7d5700` / `#feb720`):** Reserved strictly for urgency and reassurance—Appointment CTAs and "Success" indicators.
- **Surface Scale:** From `surface-container-lowest` (`#ffffff`) to `surface-dim` (`#dadada`).

### Visual Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Contrast must be achieved through background shifts. For example, a "Patient Testimonials" section should use `surface-container-low` to sit behind `surface-container-lowest` cards.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. A medical detail card (`lowest`) should "float" over a general info section (`low`).
*   **The "Glass & Gradient" Rule:** Use backdrop-blur (12px–20px) on navigation bars and floating appointment buttons. Apply a subtle linear gradient (from `primary` to `primary_container` at 135°) on the Hero background to provide a premium, deep-sea professional polish.

---

## 3. Typography: Editorial Authority

We use a high-contrast scale to distinguish between "Institutional Knowledge" (Headlines) and "Patient Accessibility" (Body).

*   **Display & Headlines (`plusJakartaSans`):** These are our "Voice of Authority." Bold, wide, and spaced with a slight negative letter-spacing (-0.02em) to feel compact and premium.
*   **Titles & Body (`inter`):** Selected for maximum legibility in dense medical contexts. `inter` provides a clean, neutral canvas for patient testimonials and surgical procedure details.
*   **Hierarchy Intent:** 
    *   **Display-LG:** Used for the Hero value proposition ("Expert Care for Piles").
    *   **Headline-MD:** Used for section titles (e.g., "Our Specialists").
    *   **Body-LG:** Reserved for introductory paragraphs to reduce cognitive load.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and borders create visual "noise." In a clinical context, we want visual "silence."

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` (White) card on a `surface-container-low` (Light Grey) background to create a soft, natural lift.
*   **Ambient Shadows:** For floating elements like the "Quick Appointment" FAB, use a shadow: `0px 12px 32px rgba(0, 104, 94, 0.06)`. This uses a tinted version of our Primary color to mimic natural light passing through a clinical environment.
*   **The "Ghost Border" Fallback:** If a border is required (e.g., input fields), use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** Use `surface-container-lowest` at 80% opacity with a `blur(16px)` for floating navigation or informational overlays.

---

## 5. Components

### Buttons
*   **Primary:** High-saturation `primary` background, white text, `md` (0.75rem) roundedness. 
*   **Secondary (Urgency):** `secondary_container` background with `on_secondary_container` text. Used for "Book Appointment Now."
*   **Tertiary:** No background. `primary` text with a subtle underline appearing only on hover.

### Cards (Specialists & Testimonials)
*   **Rules:** No borders. No dividers. Use `spacing.8` (2rem) of internal padding.
*   **Style:** Use `surface-container-lowest` with a subtle `primary_fixed` glow (4% opacity) on hover to indicate interactivity.

### Medical Information Lists
*   **Rules:** Forbid the use of divider lines. 
*   **Pattern:** Use "Iconic Bullet Points" where the icon is a `primary_container` circle with a `surface-container-lowest` checkmark. Separate items using `spacing.4` (1rem) vertical white space.

### Input Fields
*   **Style:** "Soft Fields." Use `surface-container-high` as the background with no border. On focus, transition the background to `surface-container-lowest` and add a `2px` ghost border using `primary`.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts in the Hero section—image on the right, text floating on the left with a subtle overlap.
*   **Do** use `primary_fixed` as a background for high-importance medical alerts or "New Technology" highlights.
*   **Do** ensure all medical iconography is "Line-Art" style with a consistent 2px stroke weight.

### Don't
*   **Don't** use pure black (`#000000`) for body text. Use `on_surface_variant` to keep the reading experience soft and approachable.
*   **Don't** use standard "Drop Shadows." If an element doesn't feel elevated through tonal shifts, rethink the layout instead of adding a shadow.
*   **Don't** use sharp corners. Stick strictly to the `md` (12px) and `lg` (16px) roundedness scale to maintain a "friendly-clinical" persona.