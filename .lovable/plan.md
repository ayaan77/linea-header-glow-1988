

## Fix Mobile Swipe in ProductShowcase

### Problem
The mobile carousel uses CSS `snap-x snap-mandatory` with `overflow-x-auto`, but the `Link` wrapper intercepts touch events, causing swipe gestures to trigger navigation instead of scrolling. The `aspect-[3/1]` ratio also makes cards too short, making vertical touch movement easily override horizontal scrolling.

### Solution
Replace the native CSS scroll-snap carousel with **Embla Carousel** (already installed) for reliable, smooth touch swiping. Show only 4 products on mobile (matching desktop intent). Use a taller aspect ratio for better touch targets.

### Changes

**File: `src/components/content/ProductShowcase.tsx`**

1. Import and use Embla Carousel (`useEmblaCarousel`) for the mobile view -- this gives proper touch handling that doesn't conflict with `Link` elements
2. Limit mobile to first 4 products: `products.slice(0, 4)`
3. Change aspect ratio from `aspect-[3/1]` to `aspect-[3/4]` for taller, more tappable cards
4. Use `object-cover` instead of `object-contain` for consistent image fills
5. Update the progress bar to sync with Embla's `onSelect` callback instead of manual scroll math
6. Remove the manual `scrollRef`, `handleScroll`, and `useEffect` scroll listener -- Embla handles all of it
7. Keep desktop view unchanged (5-column grid)

### Technical details
- Embla Carousel (`embla-carousel-react`) is already a project dependency
- Embla properly separates swipe gestures from link taps, so navigation only happens on deliberate taps
- The `onSelect` event from Embla API updates the active dot indicator smoothly
- No additional dependencies needed

