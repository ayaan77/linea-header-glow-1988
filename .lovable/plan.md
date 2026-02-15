

## Replace Oblique Product Image

Replace the 4th product thumbnail (Oblique) in the Voyage section with the uploaded image.

### Steps

1. Copy `user-uploads://Screenshot_2026-02-15_at_11.01.31 PM.png` to `src/assets/oblique.jpg` (overwriting the existing file)
2. No code changes needed since the import already references `@/assets/oblique.jpg` -- but since the new file is a `.png`, save it as `src/assets/oblique-new.png` and update the import in `VoyageSection.tsx` line 4.

### Technical Details

**File: `src/components/content/VoyageSection.tsx` (line 4)**

Change:
```tsx
import obliqueImage from "@/assets/oblique.jpg";
```
To:
```tsx
import obliqueImage from "@/assets/oblique-new.png";
```

