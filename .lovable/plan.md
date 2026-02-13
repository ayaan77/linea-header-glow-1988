

## Further Reduce Mobile Image Size in Product Showcase

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Change the mobile card aspect ratio from `aspect-[2/1]` to `aspect-[3/1]` -- this makes the image three times as wide as it is tall, cutting the height by another third.

```
// From:
<div className="bg-limestone aspect-[2/1] overflow-hidden ...">

// To:
<div className="bg-limestone aspect-[3/1] overflow-hidden ...">
```

### What stays the same
- Desktop/tablet layout completely unchanged
- Carousel behavior, padding, and progress bar unchanged

