# SkilledCA Workspace Instructions

## Project Scope
- This is a static site built with HTML, CSS, and vanilla JavaScript.
- There is no package.json, build pipeline, or automated test suite.
- Main areas are `tech/`, `ca/`, `forms/`, `scripts/`, `styles/`, and `assets/`.

## Build and Preview
- Preview changes with VS Code Live Server or any local static server.
- Preserve clean URLs and existing file names so Vercel routing continues to work.
- If a change touches external integrations, verify the live endpoint or embedded URL manually.

## Code Style
- Keep edits minimal and consistent with the existing pages and shared assets.
- Prefer semantic HTML, plain JavaScript, and the current CSS architecture in `styles/main.css`.
- Reuse shared scripts and styles instead of duplicating logic on individual pages.
- Keep new content aligned with the existing dark glassmorphism visual style.

## Content Boundaries
- Keep tech content in `tech/` and CA content in `ca/`.
- Update the matching data files when content is injected dynamically from JavaScript.
- Preserve navigation between the home page, Tech Hub, CA Hub, and feedback forms.

## External Services
- Form flows may depend on Google Sheets or Web3Forms-style integrations.
- If a form or download flow changes, verify the endpoint URL, request payload, and fallback behavior.
- There is no backend in this repo; integrations are handled externally.

## Documentation To Link
- Use [SITE_BLUEPRINT.md](../SITE_BLUEPRINT.md) for site structure and navigation.
- Use [PROJECT_HISTORY.md](../PROJECT_HISTORY.md) for feature history and architectural decisions.
- Use [SHEETS_INSTRUCTIONS.md](../SHEETS_INSTRUCTIONS.md) for Google Sheets form setup.
- Use [GIT_TUTORIAL.md](../GIT_TUTORIAL.md) for safe Git workflow guidance.
- Use [ICON_REQUIREMENTS.md](../ICON_REQUIREMENTS.md) for icon and asset guidance.
- Use [README.md](../README.md) for the high-level project overview.

## Change Discipline
- Avoid introducing new dependencies unless there is a clear payoff.
- Do not duplicate documentation that already exists in the linked markdown files.
- When adding a page or major section, update the relevant navigation and related docs.
