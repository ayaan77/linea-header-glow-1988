

## Refine Timeline Entry Sections for Desktop

The two sections (year/date selector bar at line 90, and content area at line 123) have layout instability on desktop because:
- The massive year text (up to 150px) causes the container height to shift when switching between entries
- The flex layout reflows as content length varies between entries
- There are no transitions, so changes feel jarring

### Design Approach

Replace the current freeform flex layout with a structured, fixed-height grid that stays rock-solid when switching dates. Add smooth crossfade transitions for a polished feel.

### Changes in `src/pages/about/Timeline.tsx`

**1. Stable two-column grid layout (lines 88-147)**

Replace the entire timeline entry section with a fixed-height desktop layout:

- Use a CSS Grid with two columns on desktop (text left, image right) instead of stacked flex containers
- The year display + selector + heading + paragraphs all go in the left column
- The image fills the right column at a fixed aspect ratio
- Set a fixed `min-h-[80vh]` on desktop so switching entries never changes the section height

**2. Year display and selector redesign (lines 90-120)**

- Replace the dropdown selector with a horizontal pill/tab bar showing all 4 years side by side (1799 / 1867 / 1923 / 1987)
- Active year gets an underline indicator
- This eliminates the dropdown interaction entirely -- one click to jump to any era
- The giant year number stays but is positioned as a subtle watermark/background element behind the text content, preventing layout shifts

**3. Smooth transitions between entries (lines 123-147)**

- Add a CSS transition using `key={currentIndex}` and a fade-in animation (already defined in tailwind config as `animate-fade-in`)
- The text content and image both crossfade when switching entries
- This makes date changes feel smooth instead of jarring

**4. Content area structure**

- Left column: chapter label, heading, paragraphs, and the year tab bar at the bottom
- Right column: full-height image with `object-cover`
- Both columns are vertically centered
- Fixed grid proportions (roughly 45% text / 55% image) so nothing shifts

### Technical Details

- The year tab bar replaces `Select` component -- uses simple buttons with `border-b-2` for the active state
- The large year number becomes an absolutely positioned watermark (opacity ~8%) behind the left column, so it adds visual drama without affecting layout flow
- `key={currentIndex}` on the content wrapper triggers React re-mount with `animate-fade-in` class
- Desktop uses `grid grid-cols-2` with `min-h-[80vh]`; mobile stays stacked as a single column
- The `min-h` values on the current containers are removed since the grid handles sizing

### What stays the same

- Mobile/tablet layout remains a single stacked column
- Hero section untouched
- Landscape divider section untouched
- Alternating image-text blocks at the bottom untouched
- All images, text content, and data unchanged

