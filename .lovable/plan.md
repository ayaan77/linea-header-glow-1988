

## Replace Oblique Product Image

Replace the 4th product thumbnail (Oblique) in the Voyage section with the uploaded image.

### Steps

1. Copy `user-uploads://Instagram_Post_Design_8.jpg` to `src/assets/oblique-new.jpg`
2. Update the import in `src/components/content/VoyageSection.tsx` (line 5) from `oblique.jpg` to `oblique-new.jpg`

### Technical Details

**File: `src/components/content/VoyageSection.tsx` (line 5)**

Change:
```tsx
import obliqueImage from "@/assets/oblique.jpg";
```
To:
```tsx
import obliqueImage from "@/assets/oblique-new.jpg";
```

