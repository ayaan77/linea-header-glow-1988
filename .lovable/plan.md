

## Apply Editorial Girl Images to Product Detail Sections

Replace the product thumbnail images in both the "You Might Also Like" and "Other Items" sections with the editorial/scarf portrait images already in `src/assets/`.

### Image Mapping

**"You Might Also Like" section (relatedProducts):**

| Product | Current Image | New Image |
|---------|--------------|-----------|
| Eclipse Earrings | eclipse.jpg | editorial-closeup.png |
| Halo Ring | halo.jpg | editorial-face.png |
| Organic Earring | organic-earring.png | editorial-shoulder.png |
| Link Bracelet | link-bracelet.png | editorial-front.png |

**"Other Items" section (otherItems):**

| Product | Current Image | New Image |
|---------|--------------|-----------|
| Lintel Necklace | lintel.jpg | scarf-portrait.png |
| Oblique Ring | oblique.jpg | scarf-front.png |
| Shadowline Bracelet | shadowline.jpg | editorial-side.png |
| Pantheon Pendant | pantheon.jpg | editorial-three-quarter.png |

### Technical Details

**File: `src/pages/ProductDetail.tsx`**

1. Replace imports (lines 11-18): swap the 8 product image imports for the editorial/scarf assets
2. Update `relatedProducts` array (lines 25-41) and `otherItems` array (lines 42-58) to reference the new imports
3. No structural or layout changes needed

