

## Fix Editorial Story Section Layout to Match Reference (Mobile)

### What Changes

Based on the reference screenshot, the mobile layout for Section 4 (Editorial Story Block) needs to be restructured so that:

1. **Images come first on mobile** -- the large portrait image appears at the top, followed by the smaller image, then the text content below
2. **Both images are full-width on mobile** -- currently the smaller image is only 75% width
3. **Text section sits below the images on mobile** -- currently text appears first due to source order
4. **Right (large) image has no right padding on mobile** -- the `pr-8` padding should only apply on desktop

### Technical Changes

**File: `src/pages/ProductDetail.tsx`**

**1. Reorder Section 4 for mobile (lines 164-191)**
- Move the right portrait image (`editorialThreeQuarter`) to appear first in source order, using CSS `order` classes to maintain the desktop layout
- Move the text + small image block to appear second on mobile
- Use `order-1`/`order-2` classes with `lg:order-` overrides

**2. Fix image container padding (line 186)**
- Change `pr-8 lg:pr-14` to `px-0 lg:pr-14` so mobile has no side padding on the large image

**3. Fix smaller image width on mobile (line 180)**
- Change `w-[75%]` to `w-full lg:w-[75%]` so the smaller image is full-width on mobile

**4. Remove top padding on mobile for text block (line 168)**
- Adjust padding so the text section has appropriate spacing when it follows images on mobile

### What Stays the Same
- Desktop two-column layout unchanged
- All text content, button, and links unchanged
- Section 3 (product grid) and Section 5 (Other Items) unchanged
- All image sources unchanged

