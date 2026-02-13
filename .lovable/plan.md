

## Fit Mobile Images Inside Container

### Problem
The mobile carousel images use `object-cover` which crops/zooms the image to fill the `aspect-[3/1]` container. Since the source images are portrait-oriented, most of the image gets cropped, making it look oversized.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 75)**

Change the mobile image styling from `object-cover` to `object-contain`, and remove the `scale-[1.02]` which makes it slightly larger than needed. This will fit the entire image within the container without cropping.

```
// From:
className="w-full h-full object-cover scale-[1.02]"

// To:
className="w-full h-full object-contain"
```

This ensures the full image is visible inside the container, scaled down to fit, rather than being cropped to fill.

### What stays the same
- Desktop/tablet layout and styling -- completely unchanged
- Container aspect ratio (`aspect-[3/1]`) -- unchanged
- Carousel behavior, progress bar -- unchanged

