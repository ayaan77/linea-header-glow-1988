

## Change OurStory Background to Match Homepage

Update the hero section and bento grid section in `OurStory.tsx` to use the same light limestone background (`bg-background`) as the homepage, instead of the current dark `bg-ink`.

### Changes in `src/pages/about/OurStory.tsx`

**1. Hero Section (line 59)**
- Change `bg-ink text-limestone` to `bg-background text-foreground`
- Update subtitle color from `text-concrete` to `text-muted-foreground`
- Update paragraph text color from `text-concrete` to `text-muted-foreground`

**2. Bento Grid Section (line 79)**
- Change `bg-ink` to `bg-background`

