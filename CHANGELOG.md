# Changelog

## 1.7.0 — 2026-10-15

- Added integrated Head CT, universal skeletal radiography, and esophagram report builders to the existing compact selector.
- Reused the existing examination components and styles; added a shared registry, schema-validated state, clinical validation, text helpers, preview, favorites and transfer behavior.
- Added all four head CT modes, repeated intracranial findings, explicit normal marking, independent hemispheric ASPECTS and conditional acute-report prioritization.
- Added 21 skeletal regions, regional projections/options and fracture masks, implants, spinal segments, protected classifications and independent regional state.
- Added routine/achalasia and all required postoperative esophagram modes, documented reconstruction anatomy, passage, diverticula, reflux and extravasation rules.
- Included all new structured states in undo and optional local drafts. Shared protected field transfer preserves existing text and frozen spans.
- Extended configuration export to schema v2 with the new structured favorites and per-module preview preferences; retained schema v1 and legacy macro imports.
- Added 43 clinical/model rule tests and a complete browser workflow suite; updated existing tests to scope reused components.

## 1.6.0 — 2026-10-15

- Expanded JSON backup to macros, custom template definitions/defaults, structured chest favorites and personal settings, with legacy macro-file compatibility.
- Added validated merging, preserved existing report text, and kept conflicting templates as separate copies.
- Added an independent Configuration panel and persisted selected template/builder and chest preview preferences even without a saved report draft.
- Replaced the two prominent builder launch panels with one compact dropdown. Only the selected builder is visible; switching preserves each examination and preview.
- Kept chest report style and automatic-preview preference when starting a new report.
- Added configuration validation/merge tests and full browser round trips, conflict, unchanged-report, reload and mobile coverage; updated all existing regression suites.

## 1.5.0 — 2026-10-15

- Added a fully integrated chest radiograph report builder with one combined report text and no separate impression output.
- Added all anatomical categories, repeated parenchymal/atelectatic/fracture/device findings, side-specific pleura, projection-sensitive wording, comparison, and three report styles.
- Added explicit normal activation, structural quick presets, personal favorites, and confirmed diagnostic suggestions.
- Extended existing macros with categories and favorites, preserving JSON import/export compatibility and a single text-block source.
- Added protected manual preview versions, recovery, copy, and append/replace/cancel transfer into the existing findings field while preserving impression.
- Included the builder in local drafts, undo, new-report resets, existing themes and responsive UI.
- Added pure clinical-rule tests and end-to-end browser tests; retained all previous regression suites.

## 1.4.1 — 2026-10-15

- Preserved the stable MR angiography study value when switching language, transferring generated text, and reloading drafts.
- Added explicit transfer/reload coverage for the examination type.

## 1.4.0 — 2026-10-15

- Added a universal arterial MR angiography module with 12 selectable regions and 101 uniquely identified vessel segments.
- Added region-dependent, deduplicated vessel matrices with side-specific status and multiple lesions per vessel.
- Added German rule-based findings and impression, explicit normal marking, stenosis validation, documented runoff rules, and optional pathology details.
- Preserved manually edited previews and existing report text; added explicit append/replace transfer with frozen-text protection.
- Integrated structured findings with existing local draft storage, undo, and new-report resets.
- Added System/Light/Dark appearance shared by the editor and module.
- Separated anatomy, examination configuration/state/generation, UI, integration, and standalone HTML build sources.
- Added anatomy/generation tests and end-to-end browser tests; retained all previous browser suites.

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
