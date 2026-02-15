

## Redesign Mobile Header and Navigation Drawer (Diptyque-Inspired)

Redesign the mobile navigation in `src/components/header/Navigation.tsx` to match the Diptyque Paris reference. Desktop navigation stays unchanged.

### Changes

**1. Mobile Header Bar (closed state)**

Rearrange the mobile-only header icons to match the reference:
- Left side: Hamburger menu + Search icon (search moves from right to left on mobile)
- Center: "SIFAR" serif logo (unchanged)
- Right side: User icon + Shopping Bag icon (hide Bookmark on mobile to reduce clutter)

**2. Full-Screen Slide-In Drawer (replaces current dropdown menu)**

Replace the current simple dropdown mobile menu (lines 318-340) with a full-screen drawer that slides in from the left:

- **Top bar**: Close (X) icon on left, centered "SIFAR" logo, User + Bag icons on right
- **Search bar**: Full-width input with search icon, rounded border, placeholder "Search for jewelry..."
- **Primary nav links**: Vertical list -- Woman, Man, Looks, Journal -- each as a full-width row with a right ChevronRight icon and bottom border separator
- **Secondary section**: Divider, then "About Sifar" link with chevron
- **Footer utility links**: Help Center (HelpCircle icon), Find a Boutique (MapPin icon), GB / English (Globe icon) -- at bottom of drawer

**3. Premium Animation**

- Drawer slides from `translateX(-100%)` to `translateX(0)` with a 600ms cubic-bezier transition for a slow, elegant feel
- Dark overlay (`bg-black/40`) fades in behind the drawer over 500ms
- Body scroll is locked when drawer is open via `useEffect` toggling `document.body.style.overflow`
- Use always-rendered markup with CSS transitions (not conditional rendering) so exit animations work

**4. Tailwind Keyframes**

Add a `slide-in-left` keyframe in `tailwind.config.ts` for the drawer entrance animation.

### Technical Details

**File: `src/components/header/Navigation.tsx`**

- Add imports: `ChevronRight`, `HelpCircle`, `MapPin`, `Globe` from lucide-react
- Wrap mobile hamburger + search in a left-side `div` visible only on `lg:hidden`
- Hide Bookmark button on mobile (`hidden lg:block`)
- Replace lines 318-340 (mobile menu dropdown) with a fixed full-screen drawer panel:
  - Overlay div: `fixed inset-0 z-[60] bg-black/40 transition-opacity duration-500`
  - Drawer div: `fixed inset-y-0 left-0 z-[60] w-full max-w-md bg-[#F2F0E9] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]`
  - Both rendered always, visibility toggled via state classes (`opacity-0 pointer-events-none` when closed, `opacity-100` when open; `translate-x-[-100%]` when closed, `translate-x-0` when open)
- Add `useEffect` to toggle `document.body.style.overflow` based on `isMobileMenuOpen`

**File: `tailwind.config.ts`**
- Add `slide-in-left` keyframe (`translateX(-100%)` to `translateX(0)`) -- optional, since inline Tailwind transition classes handle the animation directly.

### Layout Reference

```text
CLOSED HEADER (mobile):
[ = | Q ]          SIFAR          [ U | B ]

OPEN DRAWER (full screen from left):
+----------------------------------+
| [X]          SIFAR      [U] [B]  |
+----------------------------------+
| [Q  Search for jewelry...     ]  |
+----------------------------------+
| Woman                        >   |
| Man                          >   |
| Looks                        >   |
| Journal                      >   |
+----------------------------------+
| About Sifar                  >   |
+----------------------------------+
|                                  |
| (spacer)                         |
|                                  |
+----------------------------------+
| ? Help Center                    |
| @ Find a Boutique                |
| ~ GB / English                   |
+----------------------------------+
```

