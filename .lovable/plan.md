

## Restructure Editorial Story Block for Mobile

### Overview
Rearrange Section 4 (Editorial Story Block) on mobile to match the reference: text content appears first, followed by two full-width stacked images. Desktop layout remains completely unchanged.

### Reference Layout (Mobile Only)
1. Title ("Women's Spring '26") + paragraph text + "Discover the Collection" button
2. First full-width image (editorial lifestyle)
3. Second full-width image (editorial portrait)

### Technical Changes

**File: `src/pages/ProductDetail.tsx` (Section 4, lines 164-198)**

- **Reorder mobile**: Move the text block to `order-1` on mobile (currently it's `order-2`), and push images to `order-2` and `order-3` on mobile
- **Remove the 2-column image grid on mobile**: Currently the two smaller images sit side-by-side in a `grid-cols-2` on mobile. Change to `grid-cols-1` on mobile so they stack full-width vertically
- **Make the large portrait image appear after the text on mobile**: Change from `order-1` to `order-2 lg:order-2` on mobile
- **Make the smaller images section `order-3` on mobile**: So it appears last
- **Show both smaller images full-width on mobile**: Change the grid from `grid-cols-2 lg:grid-cols-1` to `grid-cols-1` on mobile, remove the `lg:hidden` from the second image (it's already visible on mobile), and make both images full-width
- **Keep all `lg:` classes unchanged** so desktop is unaffected

### What Stays the Same
- All desktop and tablet layouts
- Text content, images, and styling
- All other sections

