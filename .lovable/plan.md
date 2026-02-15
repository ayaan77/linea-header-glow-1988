

## Japanese Zen-Inspired Mobile Navigation Drawer Redesign

Transform the mobile hamburger menu into a serene, minimal, Japanese Zen-influenced experience while keeping all functionality intact and staying within the brand's existing color palette (Limestone, Wet Ink, Burnt Saffron).

### Design Philosophy
- **Ma (negative space)**: Generous whitespace between elements creates a sense of calm
- **Wabi-sabi**: Imperfect, asymmetric layouts with delicate separators
- **Transparency**: Use backdrop-blur with semi-transparent backgrounds instead of solid limestone
- **Subtle motion**: Slower, more graceful transitions for the drawer and its elements

### Changes (Mobile drawer only -- lines 338-441 in `Navigation.tsx`)

**1. Drawer Container**
- Replace solid `bg-limestone` with `bg-limestone/85 backdrop-blur-xl` for a frosted-glass effect
- Slow down the slide transition to ~700ms with a softer easing curve
- Make the drawer full-width on mobile for an immersive feel

**2. Overlay**
- Change from `bg-black/40` to `bg-black/20 backdrop-blur-sm` for a lighter, more ethereal overlay

**3. Header**
- Increase height for more breathing room (h-16 to h-20)
- Replace the hard border with a subtle thin line using `border-foreground/5`
- Add more letter-spacing to "SIFAR" logo text for a meditative feel

**4. Search Bar**
- Remove the rounded-full border pill and replace with a minimal bottom-line input (border-bottom only)
- Use lighter placeholder text and thinner styling
- Add more vertical padding for spaciousness

**5. Navigation Links**
- Increase vertical padding (py-4 to py-5) for more breathing room
- Replace `ChevronRight` arrows with a thin decorative dash or small arrow character
- Use lighter font weight and wider letter-spacing
- Replace solid borders with very faint separators (`border-foreground/5`)
- Add staggered fade-in animation when drawer opens

**6. Secondary Section ("About Sifar")**
- Add extra top margin to visually separate from primary nav
- Use slightly smaller, lighter text styling

**7. Footer Utility Links**
- Increase spacing between items
- Use even more subtle text color (`text-foreground/50`)
- Replace icon stroke with thinner weight for delicacy

**8. Overall Polish**
- All borders throughout the drawer use `border-foreground/5` (nearly invisible)
- Consistent use of `tracking-widest` or `tracking-[0.2em]` for the Zen typographic feel
- No part of the drawer will be fully opaque -- the frosted glass transparency ties the entire theme together

### Technical Details

**File: `src/components/header/Navigation.tsx`**

Lines 339-341: Update overlay to lighter blur
Lines 343-344: Update drawer container to frosted glass with backdrop-blur-xl  
Lines 347-374: Redesign header with more space and subtler borders
Lines 377-386: Simplify search to minimal underline style
Lines 388-401: Restyle nav links with more spacing and Zen typography
Lines 403-413: Adjust "About Sifar" section spacing
Lines 419-440: Restyle footer links with more whitespace and subtlety

All changes are scoped to the mobile drawer (`lg:hidden`). Desktop navigation remains untouched. All existing links, buttons, and onClick handlers are preserved.

