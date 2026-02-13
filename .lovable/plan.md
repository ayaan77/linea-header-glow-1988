

## Add Size Chart Section After Editorial Story Block

### Overview
Add a new section between the Editorial Story Block (Section 4) and Other Items (Section 5) containing two tables: **Size Conversion** and **Garment Measurements**, matching the reference image's clean, minimal table design.

### What It Looks Like
Based on the reference, the section will have:
- A "Size Conversion" table with brand sizes (XS-XL) mapped to EU sizes
- A "Garment Measurements" table with body measurements (Chest, Waist, Back Length, Sleeve Length) per size
- A footnote: "All measurements are taken with the garment laying flat"
- Clean, minimal styling with light borders and uppercase headers

Since this is a jewelry brand (not garments), the data will be adapted for jewelry sizing (e.g., ring circumference, bracelet length, chain length) while keeping the same table structure and visual style.

### Technical Details

**File: `src/pages/ProductDetail.tsx`**

Insert a new section at line 198 (after Section 4, before Section 5):

- Add a `<section>` with horizontal padding matching the page (`px-6 lg:px-16 xl:px-20`) and vertical padding (`py-10 lg:py-16`)
- **Size Conversion Table**: A simple HTML table with columns for sizes XS through XL, mapping to EU numeric sizes. Styled with `text-[11px]` mono font, light border separators, matching the site's design language
- **Garment Measurements Table**: A second table below with rows for key measurements (in CM), with the same minimal styling
- **Footnote**: Small muted text below the tables
- Uses existing Tailwind classes and design tokens (e.g., `text-concrete`, `font-mono`, `border-border`) to stay consistent with the site

**No new components or files needed** -- the tables will be inline JSX using standard HTML table elements styled with Tailwind, keeping it simple and consistent with the rest of the page.

### What Stays the Same
- All existing sections unchanged
- Desktop and tablet layouts unaffected
- No new dependencies

