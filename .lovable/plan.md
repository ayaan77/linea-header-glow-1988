

## Replace Product Showcase Images

### What will change
Replace the 5 existing jewelry product images (Pantheon, Eclipse, Halo, Oblique, Lintel) in the ProductShowcase section with the 5 new scarf/fashion images you uploaded.

### Steps

1. **Copy the 5 uploaded images** into `src/assets/`:
   - `user-uploads://1877b578-99b2-47a0-825b-90459ae30050.png` -> `src/assets/showcase-1.png`
   - `user-uploads://b3450ed2-2526-46ed-b00e-b7d71e280bd0.png` -> `src/assets/showcase-2.png`
   - `user-uploads://82f99880-5802-4398-a065-81c93c460b8b.png` -> `src/assets/showcase-3.png`
   - `user-uploads://future.jpeg` -> `src/assets/showcase-4.jpeg`
   - `user-uploads://Higgsfield_Soul_Fashion_AI_Image_2.jpeg` -> `src/assets/showcase-5.jpeg`

2. **Update `src/components/content/ProductShowcase.tsx`:**
   - Replace the 5 image imports (pantheon, eclipse, halo, oblique, lintel) with the new showcase image imports
   - Update the `products` array to reference the new images

### What stays the same
- Product names, IDs, and link behavior
- Desktop 5-column grid layout and mobile carousel
- All aspect ratios, padding, and progress bar styling

