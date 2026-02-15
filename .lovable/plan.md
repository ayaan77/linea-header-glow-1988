

## Add Save/Bookmark Button to Mobile Header

Add the Bookmark (save) icon to the mobile right-side icon group, matching the desktop version but sized for mobile.

### What Changes

The Bookmark button (line 171-177) is currently hidden on mobile (`hidden lg:block`). It needs to be made visible on all screen sizes while keeping its desktop styling unchanged.

### Technical Details

**File: `src/components/header/Navigation.tsx`** (line 172)

- Change the Bookmark button's class from `hidden lg:block` to just show on all breakpoints
- Use responsive sizing: `w-4 h-4` on mobile, `w-5 h-5` on desktop (matching User and Bag icons)
- Update the Bookmark `<Bookmark>` icon to use `w-4 h-4 lg:w-5 lg:h-5` (same as the User/Bag icons)
- Change padding from `p-2` to `p-1.5 lg:p-2` to match mobile spacing of User and Bag buttons
- No changes to desktop or tablet layout

### Order of icons on mobile (right side):
Bookmark | User | Bag

