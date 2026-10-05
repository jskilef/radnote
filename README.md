# Radnote

A standalone radiology report editor. German is the default language, with an English switch. Runs directly in a browser, without a backend or external dependencies.

**Current version: 1.0.0**

**Live editor:** https://jskilef.github.io/radnote/

## Features

- Structured reports and a freestyle template with one text box.
- Custom macros: type a shortcut such as `.pleura` and press Tab.
- Placeholder navigation with F2.
- Freeze selected words, phrases, or sentences to protect them and retain them in new reports. Click the lock chip to unfreeze.
- Save and load macro libraries as JSON files. Import merges by shortcut, replacing matching codes while preserving other macros. Invalid files are rejected.
- Copy reports, export plain text, and print or save as PDF.
- Optional draft storage in the browser, including template and frozen selections.

## Use locally

Download `index.html` or the standalone HTML release asset and open it in a browser. No installation is needed.

Keyboard shortcuts: Tab expands macros, F2 selects the next placeholder, Alt+I focuses the impression (or freestyle report), Alt+M searches macros, and Ctrl/Cmd+S exports the report.

## Data and clinical use

Report text stays in the browser unless you copy, export, or print it. Enabling draft saving stores report text on that device. Macros and language preferences are stored locally when browser storage is available. Example macros must be reviewed by a clinician before use.

## License

[MIT License](LICENSE), copyright © 2026 jskilef. You may use, modify, redistribute, and sell the software, provided the copyright and license notice are retained. The software is provided without warranty. The license does not claim ownership of your reports or other user-created content.

See [the clinical and data notice](CLINICAL_NOTICE.md) for the German/English usage notes. These notes do not add restrictions to the MIT License. The standalone HTML includes the full license in its “License & usage” dialog.

## Deployment

GitHub Pages serves the root of the `main` branch. `.nojekyll` enables direct static hosting. Update `index.html` and push to `main` to publish a change.

## Versioning and releases

Use Semantic Versioning (`MAJOR.MINOR.PATCH`). Keep `VERSION`, `version.json`, the HTML application-version meta tag, and the visible version badge aligned. Document each release in `CHANGELOG.md`, tag the commit as `vX.Y.Z`, and publish a GitHub release with the standalone HTML asset.
