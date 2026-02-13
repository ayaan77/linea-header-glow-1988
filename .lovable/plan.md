

## Update Typography for Tablet and Mobile Responsiveness

### Problem
Many components use hardcoded font sizes (e.g., `text-2xl`, `text-sm`, `text-[17px]`) instead of the brand typography utility classes (`type-hero`, `type-section`, `type-product-name`, etc.). The utility classes already use `clamp()` for fluid scaling, but they need media-query refinements for tablet (768px) and mobile (< 768px) breakpoints. Additionally, several components have inconsistent mobile typography that doesn't follow the brand guide's size ranges.

### What Changes

#### 1. CSS Utility Classes -- Add Responsive Breakpoints (src/index.css)

Update the brand typography utilities with explicit mobile/tablet overrides:

| Class | Mobile (< 768px) | Tablet (768-1024px) | Desktop (1024px+) |
|-------|-------------------|---------------------|---------------------|
| `.type-hero` | 28px, weight 600 | 36px | 48px |
| `.type-section` | 20px, weight 600 | 26px | 32px |
| `.type-quote` | 13px | 15px | 18px |
| `.type-product-name` | 12px | 13px | 14px |
| `.type-nav` | 10px | 11px | 11px |
| `.type-body` | 12px | 11px | 11px |
| `.type-button` | 11px | 11px | 11px |
| `.type-label` | 8px | 9px | 9px |
| `.type-price` | 12px | 13px | 13px |
| `.type-spec` | 9px | 10px | 10px |

Body text gets slightly larger on mobile (12px) for touch readability per accessibility best practices, while decorative elements (labels, nav) stay small.

#### 2. Component Updates -- Replace Hardcoded Sizes with Brand Utilities

**VoyageSection.tsx**
- Heading: Replace `text-lg md:text-base font-serif` with `type-section`
- Body text: Replace `text-sm font-light` with proper body sizing
- Product names: Use `type-product-name`
- Prices: Use `type-price`

**GiftIdeasSection.tsx**
- Heading: Replace `text-2xl md:text-3xl font-serif` with `type-section`
- Category names: Use `type-product-name`

**ArtisticSignatureSection.tsx**
- Label: Replace `text-xs tracking-[0.2em] uppercase` with `type-label`
- Heading: Replace `text-2xl font-serif` with `type-section`
- Body: Replace `text-[17px] md:text-sm` with consistent responsive body text
- Button text: Use `type-button`

**StoreSection.tsx**
- Heading link: Replace `text-[12px] tracking-[0.2em] uppercase` with `type-nav`
- Body: Replace `text-[17px] md:text-[15px]` with consistent body sizing
- Caption: Replace `text-[13px]` with `type-spec`

**FiftyFiftySection.tsx**
- Labels: Replace `text-[10px] md:text-xs` with `type-label`

**EditorialSection.tsx**
- Heading: Replace `text-2xl md:text-xl font-serif` with `type-section`
- Body/link: Align to brand body text sizing

**Login.tsx**
- Title: Replace `font-serif text-2xl` with `type-section`
- Labels: Replace `text-[11px] uppercase tracking-wider` with `type-label`
- Button text: Align with `type-button` specs

**People.tsx**
- Hero heading: Replace `text-5xl md:text-7xl` with `type-hero`
- Section headings: Replace `text-2xl md:text-4xl` with `type-section`
- Labels: Replace `text-[10px] tracking-[0.3em]` with `type-label`
- Body text: Standardize to brand body sizing

**Navigation.tsx (Mobile menu)**
- Mobile nav links: Replace `text-lg font-light` with `type-nav` at a slightly larger mobile size
- Sub-items: Replace `text-sm font-light` with `type-body`

### Technical Details

The `clamp()` approach in CSS utilities will be replaced with explicit `@media` breakpoints for more precise control:

```css
.type-hero {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .type-hero { font-size: 36px; }
}
@media (min-width: 1024px) {
  .type-hero { font-size: 48px; }
}
```

### Files to Edit
- `src/index.css` -- Responsive breakpoints for all type utilities
- `src/components/content/VoyageSection.tsx`
- `src/components/content/GiftIdeasSection.tsx`
- `src/components/content/ArtisticSignatureSection.tsx`
- `src/components/content/StoreSection.tsx`
- `src/components/content/FiftyFiftySection.tsx`
- `src/components/content/EditorialSection.tsx`
- `src/pages/Login.tsx`
- `src/pages/about/People.tsx`
- `src/components/header/Navigation.tsx` (mobile menu only)

### What Stays the Same
- Color palette, font families, Tailwind config
- Components already using brand utilities correctly (ProductCard, ProductInfo, Footer, PageHeader, ContentSection)
- Layout, spacing, and image handling
- Desktop appearance remains identical
