

## Align Theme with "Modern Archive" Brand Style Guide

### Current State
The project already uses the correct color palette (Limestone #F2F0E9, Ink #181818, Saffron #B64522, Concrete #888888) and font families (Playfair Display, Inter, Space Mono). What needs updating is the precise **typography sizing, weights, and font-role assignments** specified in the guide.

### What Changes

#### 1. Global CSS Typography Utilities (src/index.css)
Add reusable utility classes that encode the brand guide's typography rules, making it easier to apply consistently:

| Class | Font | Size | Weight | Purpose |
|-------|------|------|--------|---------|
| `.type-hero` | Playfair Display | 36-48px | 600-700 | Hero headlines |
| `.type-section` | Playfair Display | 24-32px | 600 | Section headings |
| `.type-quote` | Playfair Display | 14-18px | 400 italic | Pull quotes |
| `.type-product-name` | Playfair Display | 18-24px | 500-600 | Product titles |
| `.type-nav` | Inter | 11-12px | 500-600 | Navigation items |
| `.type-body` | Inter | 10-11px | 400 | Body text |
| `.type-button` | Inter | 10-11px | 500-600 | CTAs |
| `.type-label` | Inter | 8-9px | 500 | Tags, metadata |
| `.type-price` | Space Mono | 12-14px | 400-700 | Prices (Burnt Saffron) |
| `.type-spec` | Space Mono | 9-10px | 400 | Specs (Concrete) |

#### 2. Component Typography Updates

**ProductCard.tsx** -- Align product name and price typography:
- Product name: Use `font-serif` (Playfair), bump to ~13-14px, weight 500-600
- Price: Ensure `font-mono` + `text-accent` (Saffron) at 12-14px

**ProductInfo.tsx** -- Product detail page:
- Product title: Already serif, ensure weight 600 and size 28-32px (currently correct)
- Price: Ensure `font-mono text-accent` (already correct)
- Labels ("New In", "Size & Fit"): Ensure Inter at 8-9px, weight 500

**Navigation.tsx** -- Nav items:
- Already using `text-xs font-medium tracking-wider` -- adjust to 11px, weight 500-600 (close to current)

**StatusBar.tsx** -- Already correct pattern

**Footer.tsx** -- Update footer text to match label specs (8-9px Inter, weight 500)

**People.tsx, Heritage.tsx, and other about pages** -- Hero headings:
- Ensure `font-serif text-5xl md:text-7xl font-semibold` (already close, verify weight 600-700)
- Section headings: `font-serif text-2xl md:text-4xl font-semibold` (already correct)
- Body text: Ensure `text-sm font-normal` maps to ~14px/400 (already close)

**ProductShowcase.tsx** -- No text changes needed

#### 3. Tailwind Config (tailwind.config.ts)
- Add `fontSize` entries for brand-specific sizes if needed for reuse
- Verify font weight mappings are complete (300=light, 400=regular, 500=medium, 600=semibold, 700=bold)

#### 4. Button Component (button.tsx)
- Default/primary CTA: Ensure uses Burnt Saffron bg where appropriate (currently handled per-instance)
- Text: 10-11px, Inter, weight 500-600, uppercase tracking

### Files to Edit
- `src/index.css` -- Add typography utility classes
- `src/components/category/ProductCard.tsx` -- Product name serif + price mono/saffron
- `src/components/product/ProductInfo.tsx` -- Fine-tune label sizes
- `src/components/footer/Footer.tsx` -- Align label/heading sizes
- `src/pages/about/People.tsx` -- Verify hero/section heading weights
- `src/components/header/Navigation.tsx` -- Minor nav size tweaks
- `tailwind.config.ts` -- Optional fontSize additions

### What Stays the Same
- All colors (already matching the guide exactly)
- Font family definitions (already correct)
- Google Fonts import in index.html (already loads correct weights)
- Border styling (already `border-foreground/15` per the guide's "1px Wet Ink at 15% opacity")
- Overall layout and spacing patterns

