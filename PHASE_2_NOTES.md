# Phase 2: Platform foundation

This update deliberately leaves all academic lesson content, illustrations,
video assignments, and publication/future-module statuses unchanged.

## Implemented

- Stable hash-based URLs for every app screen and lesson.
- Browser Back/Forward navigation and shareable lesson links.
- Installable Progressive Web App metadata and mobile icons.
- Same-origin app-shell caching for improved resilience after the first visit.
- GitHub Pages-safe relative build paths.
- Automated GitHub Pages deployment workflow for pushes to `main`.
- Removed unused Gemini API, Express, and dotenv dependencies and API-key setup.
- Restored browser zoom by removing the viewport zoom restriction.

## Deployment

Upload/commit the files to the repository's `main` branch. In GitHub, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
The included workflow will install dependencies, build the app, and deploy it.

## Suggested next phase

After this foundation is deployed and checked on desktop, iPhone, and Android,
the next content-neutral improvement should be study continuity: recently viewed
lessons, persisted segment progress, and a Resume Study entry point.
