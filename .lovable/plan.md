

## Change Mobile Drawer to Slide Down from Top ("Paper Fall" Animation)

Currently the mobile drawer slides in from the left (`-translate-x-full` to `translate-x-0`). The user wants it to slide down from the top slowly, like paper falling -- matching the Diptyque reference.

### What Changes

**File: `src/components/header/MobileDrawer.tsx`** (line 44-47)

- Change the drawer's closed state from `-translate-x-full` to `-translate-y-full` (hidden above the viewport)
- Change the open state from `translate-x-0` to `translate-y-0` (slides down into view)
- Slow down the animation duration from `600ms` to `800ms` for a more "paper falling" feel
- Use a softer easing curve: `cubic-bezier(0.22, 1, 0.36, 1)` -- this starts slow, then settles gently, mimicking paper drifting down

No changes to desktop or tablet (already scoped to `lg:hidden`).

### Summary

One line change in the drawer panel's className to swap the X-axis slide for a Y-axis slide-down with adjusted timing.
