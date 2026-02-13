

## Replace Gift Ideas Section Images

### What will change
The four category images in the "Gift Ideas" section will be replaced with the four uploaded Kashmir Bloom gift box photos.

### Files to create
- `src/assets/gift-idea-1.jpg` -- from `4.jpg` (yellow plaid scarf box)
- `src/assets/gift-idea-2.jpg` -- from `5.jpg` (pink scarf box)
- `src/assets/gift-idea-3.jpg` -- from `6.jpg` (coral plaid scarf box)
- `src/assets/gift-idea-4.jpg` -- from `Instagram_Post_Design_1.jpg` (pink rolled scarf box)

### Files to edit
- **`src/components/content/GiftIdeasSection.tsx`** -- Update imports to use the new gift box images instead of the old jewelry collection images. The existing responsive grid layout and `object-cover` styling will handle mobile, tablet, and desktop compatibility. Category names (Rings, Earrings, Bracelets, Necklaces) and links will remain unchanged.

### Technical details
- Images will be placed in `src/assets/` and imported as ES6 modules for proper bundling
- The existing `aspect-square` container with `object-cover` ensures consistent display across all viewports
- No layout or structural changes needed -- only the image sources change

