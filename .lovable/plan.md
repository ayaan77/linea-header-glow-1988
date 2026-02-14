

## Fix Video Flash on Reload in LargeHero

**Problem:** When the page reloads, the old poster image briefly flashes before the video starts playing.

**Root Cause:** The `<video>` element has a `poster={heroImage}` attribute pointing to a static image. Before the video loads and plays, the browser displays this poster image, causing a visible flash.

**Fix:**

1. **Remove the poster image** from the `<video>` element in `src/components/content/LargeHero.tsx` so no old image is shown during load.
2. **Set a matching background color** on the video container (e.g., black) so the area appears as a solid color while the video loads, instead of flashing an outdated image.
3. **Remove the unused `heroImage` import** to keep the code clean.

### Technical Details

In `src/components/content/LargeHero.tsx`:
- Remove `import heroImage from "@/assets/hero-image.png"`
- Remove `poster={heroImage}` from the `<video>` tag
- Add `bg-black` class to the section container so the background is neutral while the video loads

