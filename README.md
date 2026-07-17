# Video Player App

A phone-format video player. Full-screen background photo cycles every 10 seconds; tap-to-pause vertical video feed on top, swipe up/down for next/previous, shuffled order, with an Autoplay/Loop toggle.

## Adding content
1. Go to this repo on github.com
2. Open the `videos` folder → **Add file → Upload files** → select clips from your phone
3. Open the `photos` folder → **Add file → Upload files** → select photos
4. That's it — a GitHub Action automatically rebuilds `manifest.json` within about a minute of your upload, and the live app picks up the new files automatically.

## Supported formats
- Videos: .mp4, .mov, .webm, .m4v
- Photos: .jpg, .jpeg, .png, .webp

## Live app
Once GitHub Pages is enabled (Settings → Pages → Deploy from branch `main` / root), your app is live at:
`https://<username>.github.io/<repo-name>/`

Add it to your phone's home screen from Safari/Chrome for an app-like experience.
