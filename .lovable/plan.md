

## Replace Voyage Section Product Images (Not Hero)

Replace only the 3 product thumbnail images in the VoyageSection grid with the 3 uploaded images. The large hero image at the top remains unchanged.

### Image Mapping

| Product | Current Image | New Image |
|---------|--------------|-----------|
| Pantheon | pantheon.jpg | Elegance_Scarf_70.webp |
| Eclipse | eclipse.jpg | Equateur_Twilly_worn.webp |
| Halo | halo.jpg | 18.jpg |
| Oblique | oblique.jpg | *(unchanged -- no 4th image provided)* |

### Steps

1. Save the 3 uploaded images to `src/assets/`:
   - `elegance-scarf.webp`
   - `equateur-twilly.webp`
   - `voyage-bracelet.jpg`

2. Update `src/components/content/VoyageSection.tsx`:
   - Replace imports for `pantheonImage`, `eclipseImage`, `haloImage` with the new assets
   - Keep `obliqueImage` import unchanged
   - Update the `thumbnails` array entries accordingly

### Technical Details

**File: `src/components/content/VoyageSection.tsx` (lines 1-13)**

Replace first 3 image imports and update the thumbnails array to reference the new images while keeping the 4th product (Oblique) as-is. The hero image import (`heroImage`) is not touched.

