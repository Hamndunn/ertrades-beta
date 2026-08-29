eRTrades v82b — Hourglass Branding + Android Compatibility

BRANDING
- Hourglass is intentional.
- Keep the hourglass for favicon, Apple Home Screen icon, and PWA icons.
- Do not replace it with the green chart logo.

ANDROID COMPATIBILITY
- Keeps the simplified manifest.
- Keeps the conservative service worker.
- The service worker does not intercept normal network requests.
- Icon and manifest URLs are cache-busted to v82b.

UPLOAD / REPLACE IN GITHUB ROOT
1. index.html
2. manifest.webmanifest
3. sw.js
4. favicon.png
5. favicon-32x32.png
6. favicon.ico
7. apple-touch-icon.png
8. pwa-icon-192.png
9. pwa-icon-512.png
10. pwa-icon-maskable-512.png

ANDROID CLEAN REINSTALL
1. Uninstall the existing eRTrades PWA.
2. Chrome -> Site settings -> ertrades.my.id -> Clear & reset.
3. Close Chrome completely.
4. Open ertrades.my.id again.
5. Confirm the install icon is the hourglass.
6. Install eRTrades.
7. Launch the newly installed app.

No trading, Supabase, authentication, dashboard, desktop, or equity-curve logic changed.
