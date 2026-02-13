

## Make Size Chart White with Side Padding

### Changes

**File: `src/pages/ProductDetail.tsx`**

Update the Size Chart section (Section 5) styling:

1. **Add white background** -- Add `bg-white` to the section element
2. **Increase horizontal padding** -- The section already has `px-6 lg:px-16 xl:px-20`. Add inner padding or increase existing padding with `mx-6 lg:mx-16 xl:mx-20` on a wrapper, or simply add a white inner container with padding inside the section so the white box has inset from the page edges.

Specifically:
- Wrap the section content in a `div` with `bg-white p-6 lg:p-10 xl:p-12` to create a white card with generous inner padding
- Keep the outer section's existing padding so the white card is inset from page edges

### What Stays the Same
- All table content and styling unchanged
- Desktop/tablet layouts unchanged
- Other sections unchanged

