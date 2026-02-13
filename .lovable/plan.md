

## Replace Artistic Signature Video

Replace the current video in the Artistic Signature section with the new uploaded video file.

### Steps

1. Copy `user-uploads://Instagram_Post_Untitled_Design_1-3.mp4` to `public/artistic-signature-video.mp4`, overwriting the existing file.
2. No code changes needed -- the component already references `/artistic-signature-video.mp4`.

### Technical Details

The video element in `ArtisticSignatureSection.tsx` (line 29) already points to `/artistic-signature-video.mp4` with `autoPlay`, `muted`, `loop`, and `playsInline` attributes, ensuring compatibility across mobile, tablet, and desktop. Only the video file itself needs to be swapped.

