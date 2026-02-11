

## Fix Black Line and Image Fitting in Timeline Section

### Problem
When switching dates, a black line/flash appears between the text column and image column. This happens because:
1. The `animate-fade-in` on the image div starts at `opacity: 0`, briefly revealing the dark background behind it
2. The grid container or section may have a default dark background showing through during the transition

### Changes in `src/pages/about/Timeline.tsx`

**1. Add background color to the image container (line 126)**
- Add `bg-limestone` to the image wrapper div so that when the fade-in animation starts (opacity 0), the limestone background shows instead of a black gap

**2. Add background to the grid container (line 84)**
- Add `bg-limestone` to the grid div itself as a safety net, ensuring no dark color bleeds through between columns

**3. Ensure image fills container properly on desktop**
- The current `w-full h-full object-cover` on the img tag is correct
- The container with `lg:h-full overflow-hidden` is correct
- No structural changes needed for image fitting -- the background color fix eliminates the visual gap

### What stays the same
- All layout, structure, content, and animations unchanged
- Mobile layout unchanged
- Only adding background colors to prevent the black flash during transitions

