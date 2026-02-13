

## Change Store Section Image

### What Changes
Replace the current image (`organic-earring.png`) in the Store Section with the uploaded Kashmir Bloom store photo, across all breakpoints (mobile, tablet, desktop). No padding or layout changes.

### Steps
1. Copy `user-uploads://Kashmir_Bloom_Store_Birmingham.png.webp` to `src/assets/kashmir-bloom-store.webp`
2. In `src/components/content/StoreSection.tsx`, update the import from `organic-earring.png` to `kashmir-bloom-store.webp` and update the `alt` text to "Kashmir Bloom Store Birmingham"
3. No changes to padding, layout, or any other styling

