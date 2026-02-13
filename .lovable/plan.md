

## Add Horizontal Padding to Full-Width Feature Image

### Change

**File: `src/pages/about/OurStory.tsx` (line 88)**

Add horizontal padding to the full-width founder image section, mobile only, so it has breathing room on the sides.

```
// From:
<section className="w-full overflow-hidden">

// To:
<section className="w-full overflow-hidden px-4 md:px-8">
```

### What stays the same
- Image aspect ratio and object-cover behavior unchanged
- Desktop gets a slightly smaller padding (`md:px-8`) for proportional breathing room
- Everything else on the page untouched

