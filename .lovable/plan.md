

## Fix Shopping Bag Icon Badge Overflow

The item count number inside the shopping bag icon is overflowing/not displaying correctly. There are two instances to fix:

### Problem
The badge text is positioned at the center of the button but needs to sit inside the bag icon's "opening". The current absolute positioning with `top-1/2 left-1/2` combined with tiny font sizes makes the number either invisible or misaligned, especially at the mobile `w-4 h-4` icon size.

### Fix

**File: `src/components/header/Navigation.tsx`**

1. **Main header bag icon (line 201)**: Adjust the badge to be smaller and better centered within the icon. Use `text-[0.5rem]` on mobile and `text-[0.55rem]` on desktop, with a slightly higher vertical offset (`-translate-y-[45%]`) to sit inside the bag opening.

2. **Mobile drawer bag icon (line 367)**: Apply the same fix as the main header badge -- update from the old `text-[0.4rem] -translate-y-[30%]` to match the corrected styling with `text-[0.45rem] -translate-y-[40%] font-medium leading-none`.

### Technical Details

Both badge `<span>` elements will use consistent styling:
- `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%]`
- `text-[0.5rem]` (slightly larger for readability)
- `font-medium leading-none pointer-events-none`

This ensures the number sits visually centered in the bag icon's body at both mobile and desktop sizes.
