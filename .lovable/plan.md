

## Redesign Mobile Navigation: Diptyque-Inspired Full-Screen Drawer

Redesign the mobile navigation from a simple dropdown menu into a premium full-screen slide-in drawer, inspired by the Diptyque Paris reference images. The desktop navigation remains unchanged.

### What Changes

**Mobile Header Bar (closed state)**
- Left side: Hamburger icon + Search icon (moved from right side on mobile)
- Center: "SIFAR" serif logo (unchanged)
- Right side: User icon + Shopping Bag icon (Bookmark hidden on mobile to reduce clutter)
- White/limestone background, minimalist black icons

**Mobile Drawer (open state)**
- Full-screen overlay sliding in from the left with a slow, premium cubic-bezier animation (~0.6s)
- Dark overlay on background with body scroll lock
- **Top bar**: Close (X) icon on left, centered "SIFAR" logo, User + Bag icons on right
- **Search bar**: Full-width rounded input field with search icon, placeholder "Search for jewelry..."
- **Primary nav links**: Vertical list with right chevrons (Woman, Man, Looks, Journal) -- each item separated by subtle borders
- **Secondary section**: "About Sifar" link with chevron, separated by a divider
- **Footer links**: Help Center (with question mark icon), Find a Boutique (with map pin icon), Country/Language selector
- Slow fade-in overlay + translateX slide animation using cubic-bezier for premium feel

### Technical Details

**File: `src/components/header/Navigation.tsx`**

1. **Rearrange mobile header icons**: On mobile (`lg:hidden`), move Search icon to the left group next to the hamburger. Keep only User and Bag on the right. Hide Bookmark on mobile.

2. **Replace the mobile menu dropdown** (lines 318-340) with a full-screen fixed drawer:
   - Fixed overlay with `bg-black/40` backdrop, transitioning opacity
   - Drawer panel: `fixed inset-0 z-50 bg-[#F2F0E9]` sliding from left via `transform translateX`
   - Use CSS transition classes toggled by state, not conditional rendering, to enable exit animations
   - Add `overflow-y-auto` for scrollable content

3. **Drawer content structure**:
   - Header row: X button, logo, user/bag icons
   - Search input: rounded border, full-width, with Search icon inside
   - Nav items with `ChevronRight` icons, each as a full-width row with bottom border
   - Divider, then "About Sifar" link
   - Promotional image area (placeholder using existing collection images)
   - Footer utility links with icons (HelpCircle, MapPin, Globe)

4. **Animation**: Add custom CSS transition classes for the drawer:
   - `transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]`
   - Overlay: `transition-opacity duration-500`
   - Body scroll lock via `document.body.style.overflow = 'hidden'` in a useEffect

5. **Keep desktop navigation completely unchanged** -- all changes scoped to `lg:hidden` / mobile breakpoints.

**File: `src/index.css`** (optional)
- Add any needed keyframe or utility classes for the premium slide animation if Tailwind inline isn't sufficient.

### Summary of Layout

```text
CLOSED HEADER (mobile):
[ Hamburger | Search ]  [ SIFAR ]  [ User | Bag ]

OPEN DRAWER (full screen):
+----------------------------------+
| [X]          SIFAR      [U] [B]  |
+----------------------------------+
| [ Search for jewelry...       ]  |
+----------------------------------+
| Woman                        >   |
| Man                          >   |
| Looks                        >   |
| Journal                      >   |
+----------------------------------+
| About Sifar                  >   |
+----------------------------------+
| [Promo image carousel area]     |
+----------------------------------+
| ? Help Center                    |
| @ Find a Boutique                |
| ~ GB / English                   |
+----------------------------------+
```

