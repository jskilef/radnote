# Changelog

## 1.3.0 — 2026-10-06

- Made macro settings and keyboard shortcut panels collapsible, remembering their state.
- Added an Undo button and Ctrl/Cmd+Z, with Ctrl/Cmd+Shift+Z for redo.
- Included report text, macro expansions, frozen selections, and new-report resets in undo history.
- Added browser coverage for undo, redo, saved drafts, and collapsible panels.

## 1.2.0 — 2026-10-06

- Added word-expansion macros triggered by Space, including `re` → `rechts`.
- Added a macro type selector and trigger labels in the library.
- Preserved word macro types in JSON import/export and local storage, with support for legacy Tab macro files.
- Protected frozen selections from macro expansion.
- Added tests for word boundaries, cursor positions, Space input, persistence, and compatibility.

## 1.1.0 — 2026-10-05

- Added copy buttons beside every report field.
- Added the combined “Befund und Beurteilung” template.
- Added custom templates with editable names, reorderable fields, and optional default text.
- Preserved macros, frozen selections, and optional draft saving in custom templates.
- Added browser regression tests for report editing and custom template workflows.

## 1.0.0 — 2026-10-05

Initial release.

- German default with German/English interface switching.
- Structured and freestyle radiology report templates.
- Editable macros, Tab expansion, and F2 placeholder navigation.
- Protected text selections retained when starting a new report.
- JSON macro library import and export.
- Report copying, plain-text export, and printing to PDF.
- Optional local draft saving.
- MIT License included in the repository and standalone editor, with German/English clinical and data notices.
- GitHub Pages deployment and a visible application version.
