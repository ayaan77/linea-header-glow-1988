

## Slow Down Mobile Drawer Animation (Open and Close)

### Problem
The mobile drawer currently opens and closes too quickly at `650ms`. It needs a slower, more elegant "paper-falling" feel for both opening and closing.

### Changes

**File: `src/components/header/MobileDrawer.tsx`**

1. **Increase animation duration** from `650ms` to `900ms` for a noticeably slower, graceful motion
2. **Refine the easing curve** to `cubic-bezier(0.16, 1, 0.3, 1)` -- this curve starts even more gently and settles smoothly, giving a beautiful paper-drift effect on both open and close
3. **Slow down the overlay fade** by adding `duration-700` to the dark overlay (line ~37) so it fades in/out in sync with the drawer rather than snapping

### What Does NOT Change
- Desktop and tablet layouts (everything stays scoped to `lg:hidden`)
- Drawer content, typography, or layout
- Body scroll lock behavior

