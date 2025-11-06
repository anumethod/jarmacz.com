# Repository Guidelines

## Project Structure & Module Organization
- Root `.html` pages power the marketing site; reuse naming patterns such as `framework-name.html`.
- `styles/main.css` centralizes design tokens and layout; extend inside the existing comment sections and avoid inline rules.
- `js/main.js` houses ES6 classes for navigation, counters, and canvas work; add behavior via new classes that reuse the shared utilities.
- `api/app.py` exposes the Flask contact endpoints; append helpers beside the section headers already in place.
- `docs/` stores deployment decks and `requirements.txt`, while `images/` holds raster assets—compress uploads before committing.

## Build, Test, and Development Commands
- `python3 -m venv .venv && source .venv/bin/activate` — create and enter a local virtual environment.
- `pip install -r docs/requirements.txt` — install the Flask stack used in production.
- `FLASK_APP=api/app.py flask run --reload` or `python api/app.py` — serve the API on port 5000 with existing rate limits.
- `python -m http.server 8080 --directory .` — preview static pages at `http://localhost:8080/index.html`.
- `curl http://127.0.0.1:5000/api/health` — quick smoke test for the API.

## Coding Style & Naming Conventions
- HTML/CSS/JS use 4-space indentation and descriptive, dash-separated class names (`.hero-content`, `.neural-grid`); comment sections follow the `// ========================================` motif.
- Favor ES6 classes and pure utilities in `js/main.js`; export-free modules keep functions scoped.
- Keep styling changes in `styles/main.css`, leveraging existing custom properties; avoid inline colors.
- Backend code adheres to PEP 8; type hints and docstrings are expected for new helpers.

## Testing Guidelines
- No automated suite yet; validate changes via manual API calls and browser checks.
- When adding endpoints, include a `curl` example in the PR description and capture expected JSON responses.
- Target happy-path coverage with `flask.testing.FlaskClient` before introducing complex logic; place future tests under `api/tests/`.

## Commit & Pull Request Guidelines
- Commit messages follow short, imperative lines (`Add health check logging`, `Sync deployment notes`); group related work per commit.
- PRs should summarize scope, link tracked initiatives, list local verification (commands above), and attach screenshots for UI changes.
- Flag secrets via `.env` in `.gitignore` and call out required env vars (`SMTP_*`, `SECRET_KEY`) in the PR body.

## Security & Configuration Tips
- Never hard-code credentials; load them from environment variables and document defaults in `docs/DEPLOYMENT.md`.
- Rate limits guard against abuse; adjust thresholds in `api/app.py` only after discussing operational impact.
- Use TLS when testing email flows; confirm SMTP credentials through a non-root account before merging.
