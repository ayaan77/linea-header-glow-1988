

## Replace Voyage Section Hero Image

Replace the hero image in the Voyage section with the new uploaded image and ensure responsive compatibility.

### Steps

1. Copy `user-uploads://Instagram_Post_Design_7.jpg` to `src/assets/hero-image.webp`, overwriting the existing file.
2. No code changes needed -- the `VoyageSection.tsx` component already imports from `@/assets/hero-image.webp` and uses responsive aspect ratios (`aspect-[3/4]` on mobile, `aspect-[16/9]` on desktop) with `object-cover`, ensuring proper display across all devices.

### Technical Details

- The image at line 49 in `VoyageSection.tsx` is sourced from `import heroImage from "@/assets/hero-image.webp"` (line 1).
- The container already has responsive classes: `aspect-[3/4] md:aspect-[16/9]` with `object-cover`, which will crop/fit the new image appropriately on mobile, tablet, and desktop.

