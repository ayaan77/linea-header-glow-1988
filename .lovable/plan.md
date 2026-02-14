

## Change Brand Name from LINEA to SIFAR

Update the logo and all brand references throughout the application from "LINEA" to "SIFAR".

### Steps

1. **Replace the logo in the Navigation header** (`src/components/header/Navigation.tsx`, line 140) -- swap the `<img>` tag for a styled text element displaying "SIFAR", maintaining the same sizing, color inversion logic for transparent nav, and responsive behavior.

2. **Replace the logo in the Checkout header** (`src/components/header/CheckoutHeader.tsx`, line 20-24) -- same approach, swap `<img>` for styled "SIFAR" text.

3. **Update brand references in content pages** -- replace "LINEA" / "Linea" text mentions in:
   - `src/pages/about/Sustainability.tsx` (lines 133, 191)
   - `src/pages/ProductDetail.tsx` (line 179)
   - `src/components/content/EditorialSection.tsx` (lines 11, 22)
   - `src/components/content/ArtisticSignatureSection.tsx` (line 9)
   - `src/pages/about/Timeline.tsx`
   - Other about pages and content referencing the brand

4. **Update HTML title and meta** in `index.html` if it references LINEA.

### Technical Details

- The logo currently uses an SVG image (`/LINEA-1.svg`). Instead of creating a new SVG, the logo will be rendered as a styled `<span>` with appropriate font styling (tracking, weight) to match the luxury brand aesthetic.
- The transparent nav color inversion logic (`brightness-0 invert`) will be replaced with conditional `text-white` / `text-foreground` classes already available via the `textColor` variable.
- The alt text and aria-labels will be updated to "SIFAR".

