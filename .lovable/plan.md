

## Redesign the Sustainability Page

The current Sustainability page uses a sidebar layout with card-like sections. The reference image shows a dramatically different, editorial-style page — immersive, image-driven, and clean — similar to the Heritage page pattern already in the project.

### Layout Structure (Top to Bottom)

1. **Full-bleed Hero** — A landscape nature image covering ~70vh with a dark overlay. "SUSTAINABILITY" title centered in uppercase serif, matching the Heritage page hero style.

2. **Centered Introduction Text** — A short paragraph on the limestone background, centered, with two small uppercase links below (e.g., "Read Our Commitments" and "Our Certified Partners"). Clean breathing space (py-20 md:py-28).

3. **B Corp Certification Section** — Dark background (bg-ink/foreground) full-width section with the B Corp logo rendered as a large centered text/SVG element. Below it, a short line of text about being a certified B Corp member with a count of ethical standards met.

4. **Full-bleed Nature Image** — Another full-width landscape image (reusing existing editorial assets like `editorial-shoulder.png` or similar).

5. **Alternating Image-Text Blocks** — Two rows following the Heritage page pattern:
   - Row 1: Image left + "Ethical Sourcing" text right
   - Row 2: Text left + "Circular Economy" image right (using `founders.png` or similar existing assets)

6. **Impact Goals Section** — Clean centered layout on limestone background showing the three stats (100%, 90%, Zero) with minimal typography.

7. **Bottom CTA** — A closing section with a link to explore collections, matching Heritage page style.

### Design Principles
- No sidebar — full-width editorial layout like Heritage and Our Story pages
- No rounded corners, no card-like containers
- Generous vertical padding (py-20 md:py-28) for breathing space
- Font usage: serif for headings, sans for labels/small text, matching existing pages
- Color palette: limestone background, ink foreground, saffron for accent links
- All existing project images reused — no new image uploads needed

### Technical Details

**File changed:** `src/pages/about/Sustainability.tsx` — Complete rewrite of the page content

- Remove `AboutSidebar`, `PageHeader`, and `ContentSection` imports (no longer needed for this layout)
- Import existing assets from `src/assets/` for the editorial imagery
- Follow the exact component structure pattern from `Heritage.tsx`: Header at top, sections in sequence, Footer at bottom
- Use the same Tailwind class patterns for typography, spacing, and overlays as Heritage page
- The B Corp section uses `bg-foreground text-background` for the dark inverted section

