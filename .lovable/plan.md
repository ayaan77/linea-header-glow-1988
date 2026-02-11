

## Fix Timeline Entry Section - Layout Stability on Desktop

### Problems Identified

1. **Grid column syntax**: `lg:grid-cols-[45fr_55fr]` may not render correctly in all browsers -- needs proper fractional units
2. **No fixed height on desktop**: `lg:min-h-[80vh]` only sets a minimum, so the section still grows/shrinks as content changes between entries, causing the page to jump
3. **Image overflow**: The right-column image has no height constraint on desktop -- `h-full` with no bounded parent means the image dictates height, and different images have different natural sizes
4. **Year watermark too large**: At `lg:text-[320px]`, even with `overflow-hidden`, this massive element can cause reflow during transitions
5. **No overflow containment on grid container**: The grid wrapper itself doesn't clip overflow

### Changes in `src/pages/about/Timeline.tsx`

**1. Fix the grid container (line 84)**
- Change `lg:min-h-[80vh]` to `lg:h-[80vh]` so height is locked on desktop
- Add `overflow-hidden` to the grid wrapper to prevent any child from pushing the layout

**2. Fix grid column definition (line 84)**
- Replace `lg:grid-cols-[45fr_55fr]` with `lg:grid-cols-[45%_55%]` for reliable cross-browser behavior

**3. Constrain the left column (line 86)**
- Add `lg:h-full lg:overflow-y-auto` so text scrolls within the column if it ever exceeds the fixed height, rather than pushing the grid taller

**4. Reduce watermark size (line 88)**
- Reduce from `lg:text-[320px]` to `lg:text-[240px]` to prevent it from overflowing the column even with clipping

**5. Fix the image column (lines 126-132)**
- Wrap the image in a container with `lg:h-full overflow-hidden` so it fills exactly the grid cell height
- Remove `min-h-[350px] lg:min-h-0` and replace with a fixed `h-[400px] lg:h-full`
- Change img to use `w-full h-full object-cover` without the conditional `lg:aspect-auto` which fights with the fixed container

**6. Fix year tab bar overflow (line 108)**
- Add `flex-wrap` or `flex-shrink-0` to prevent the tab buttons from wrapping awkwardly on narrower desktop screens

### What stays the same
- All content, images, and data unchanged
- Hero section, landscape divider, and alternating blocks untouched
- Mobile layout remains stacked
- Fade-in animations preserved

