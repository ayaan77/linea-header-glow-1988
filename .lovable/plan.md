

## Fix the Black Line Between Text and Image Columns

### Root Cause

The page wrapper is `<div className="min-h-screen bg-ink">` -- a dark background. The image column uses `key={img-${currentIndex}}` which causes React to **unmount** the old div and **mount** a new one. During that brief unmount moment (and the start of `animate-fade-in` at `opacity: 0`), the dark `bg-ink` page background shows through as a black vertical line/flash.

Adding `bg-limestone` to the container helps but doesn't fully solve it because the unmount creates a frame where no child element exists in that grid cell at all.

### Solution

Remove the `key` and `animate-fade-in` from the image wrapper div entirely. The image will swap instantly (which actually looks cleaner for a side panel). Only the text content keeps its fade animation.

### Changes in `src/pages/about/Timeline.tsx`

**Line 126 -- Remove key and animate-fade-in from image wrapper:**

Change:
```
<div key={`img-${currentIndex}`} className="animate-fade-in h-[400px] lg:h-full overflow-hidden bg-limestone">
```

To:
```
<div className="h-[400px] lg:h-full overflow-hidden bg-limestone">
```

This eliminates the unmount/remount cycle that causes the black flash. The image swaps instantly while the text side still fades in smoothly. No structural or layout changes needed.

### What stays the same
- Text column fade animation preserved (line 93 keeps `key={currentIndex}` and `animate-fade-in`)
- All layout, content, images unchanged
- Mobile layout unchanged

