

## Elevate Product from Progress Bars on Mobile

### What will change
The mobile ProductShowcase carousel will be updated so the product image has breathing room and the progress bars sit **below** the image instead of overlapping it -- matching the reference screenshot style.

### Changes

**File: `src/components/content/ProductShowcase.tsx`**

1. **Add padding inside each carousel slide** -- wrap the image in a container with horizontal and vertical padding so the product floats with space around it (like the reference)
2. **Use `object-contain`** instead of `object-cover` so the full product is visible without cropping
3. **Move progress bar outside the image** -- change from `absolute bottom-3` (overlaid) to a normal-flow `div` with top margin, sitting below the carousel
4. **Add bottom padding to the section** to give the progress bars room beneath the images
5. Desktop view remains unchanged

### Result
- Product images will be centered with padding, elevated away from edges
- Progress bars will appear below the image with clear spacing, not overlapping the product

