

## Update Product Detail Mobile Layout to Match Reference

### Overview
Adjust the mobile-only layout of the Product Detail page to match the reference screenshot. All changes are scoped to mobile breakpoint only (below `lg:`). Tablet and desktop layouts remain untouched.

### Changes

**File: `src/pages/ProductDetail.tsx`**

#### 1. Section 4 (Editorial Story Block) - Mobile Layout Update (lines 163-192)

The reference shows a different mobile layout for this section:

- **Large portrait image** at top (full width, no padding) -- already correct
- **Two smaller images side by side** in a 2-column grid below the portrait -- currently only one image (`editorialSide`) is shown. Need to add a second image (e.g., `editorialFace` or another editorial asset) and display them in a `grid grid-cols-2` on mobile
- **Text block** below images with quote and CTA button -- already correct, just needs spacing adjustments

Specific changes:
- Replace the single `editorialSide` image container with a 2-column grid on mobile containing two images side by side
- On desktop (`lg:`), revert to the current single image at 75% width layout
- Adjust spacing/padding to match the reference's tighter layout

#### 2. Section 2 (Details + Editorial Carousel) - Order Verification

The current order (carousel first on mobile, description below) matches the reference. No changes needed here.

#### 3. Section 3 (Related Products Grid) - No Changes

The 2x2 grid layout on mobile already matches the reference.

#### 4. Section 5 (Other Items) - No Changes

The 2-column grid on mobile already matches the reference.

### Technical Details

- All changes use Tailwind responsive prefixes (`lg:`) to ensure only mobile is affected
- The second editorial image will use an existing asset already imported (e.g., `editorialFace`)
- The 2-column grid for the two smaller images will use `grid grid-cols-2 lg:grid-cols-1` with the second image hidden on desktop (`lg:hidden`) to preserve the current desktop layout

