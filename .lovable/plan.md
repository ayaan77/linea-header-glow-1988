

## Replace ArtisticSignatureSection Image

### Changes
1. Copy the uploaded image to `src/assets/kashmir-bloom-fashion.webp`
2. Update `src/components/content/ArtisticSignatureSection.tsx` to import and use the new image instead of `organic-earring.png`
3. The existing responsive aspect ratio (`aspect-[3/4]`) already works well for this portrait-oriented photo across mobile, tablet, and desktop -- no layout changes needed

### Files
- **New asset**: `src/assets/kashmir-bloom-fashion.webp`
- **Edit**: `src/components/content/ArtisticSignatureSection.tsx` -- swap import from `organic-earring.png` to new image, update alt text

