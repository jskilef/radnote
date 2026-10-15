# Radnote

A standalone radiology report editor. German is the default language, with an English switch. Runs directly in a browser, without a backend or external dependencies.

**Current version: 1.6.0**

**Live editor:** https://jskilef.github.io/radnote/

## Features

- Structured reports, a combined “Befund und Beurteilung” template, and a freestyle template with one text box.
- A copy button beside each report field, copying only that field’s text.
- Custom templates with named, reorderable fields and optional default text. Create, edit, or delete them using the template controls. Templates are saved in this browser; enable draft saving to retain entered report text as well. Default text is restored in new reports, together with frozen selections.
- Two macro types: `.pleura` + Tab inserts a report macro; `re` + Space expands to `rechts `, including the trailing space.
- Choose “Word expansion” when adding or editing a macro to define your own Space shortcuts. Matching is case-sensitive and applies to the whole word before the cursor. Existing Tab macros and legacy JSON files remain supported.
- Placeholder navigation with F2.
- Freeze selected words, phrases, or sentences to protect them and retain them in new reports. Click the lock chip to unfreeze.
- Save and restore the complete personal configuration as one JSON file: macros (including Space shortcuts, categories and favorites), all custom templates with field order/default text, structured chest favorites, language, theme, selected template/builder, panel visibility, draft-saving preference, chest report style and automatic preview setting.
- Use **Configuration → Save configuration / Load configuration** in the sidebar. Import merges libraries, replaces matching macro codes, retains conflicting template definitions as additional copies, and applies imported settings. Current report text is preserved. Legacy macro JSON files remain supported; invalid files are rejected before changes.
- A compact **Report builder** dropdown selects Chest radiograph, MR angiography, or No builder. Only the selected builder is visible; switching preserves structured findings and manually edited previews. The selection is remembered.
- Patient/reference values, current reports, frozen report selections and examination findings are stored separately through optional local draft saving; these are not included in a configuration backup.
- Copy reports, export plain text, and print or save as PDF.
- Optional draft storage in the browser, including template and frozen selections.

- Collapsible macro settings and keyboard shortcut panels; their open/closed state is remembered.
- Undo report changes with the Undo button or Ctrl/Cmd+Z; Ctrl/Cmd+Shift+Z redoes them. Report history includes macro expansions, frozen selections, and new-report resets. History is limited to the latest 200 changes and resets on reload or when changing custom template definitions.

## Röntgen-Thorax

Der über das Dropdown **Baukasten → Röntgen-Thorax** auswählbare Befundbaukasten erzeugt genau einen gemeinsamen Befundtext ohne separates Beurteilungsfeld. Links befinden sich kompakte anatomische Kategorien, rechts die bearbeitbare Live-Vorschau.

- Bewusst aktivierter Normalbefund, strukturierte Schnellwahlen, eigene dauerhaft gespeicherte Favoriten und drei Befundstile.
- Herz, Mediastinum/Aorta, Stauung, Parenchym, Atelektasen, Pleura, Überblähung, Bronchien, Hili, Zwerchfell, Skelett, Weichteile und typabhängige Device-Angaben.
- Projektion und Beurteilbarkeit beeinflussen Formulierungen. Diagnostische Vorschläge werden nur nach Bestätigung eingefügt.
- Optionaler Voraufnahmenvergleich mit Verlauf je Befund bzw. Merkmal.
- Eigene Textbausteine nutzen die vorhandene Makroverwaltung, einschließlich Kategorien, Favoriten und JSON-Dateiaustausch.
- Geschützte manuelle Vorschau mit wiederherstellbarer Fassung; Anhängen, Ersetzen oder Abbrechen bei vorhandenem Zieltext. Die bestehende Beurteilung bleibt unverändert.
- Lokale Entwurfsspeicherung, Rückgängig und vorhandene Themes sind integriert.

[Thorax-Architektur, Datenmodell und Textregeln](chest/README.md)

[Konfigurationsformat und Importregeln](settings/README.md)

## MR-Angiographie

Das aufklappbare Modul **MR-Angiographie · strukturierter Befund** unterstützt arterielle Untersuchungen von Kopf, Hals, thorakaler und abdomineller Aorta, Viszeral- und Nierenarterien, Becken, Beinen, Füßen und beiden oberen Extremitäten.

1. Nur die tatsächlich untersuchten Regionen auswählen. Es werden ausschließlich die zugehörigen Gefäßabschnitte angezeigt; gemeinsam zugeordnete Gefäße erscheinen einmal.
2. Gefäße einzeln oder eine Region ausdrücklich als unauffällig markieren. Optionale Abschnitte werden nicht automatisch eingeschlossen.
3. Für Pathologien eine oder mehrere Läsionen mit Stenosegrad, Morphologie und optionalen Zusatzangaben erfassen.
4. Befund und Beurteilung in der Live-Vorschau prüfen und bei Bedarf manuell bearbeiten.
5. Über **In Befund und Beurteilung übernehmen** die Texte ausdrücklich anhängen oder ersetzen. Bereits übernommene Editor-Texte werden nicht automatisch verändert; Fixierungen bleiben geschützt.

Die bestehende Option zur lokalen Entwurfsspeicherung speichert auch Regionen, strukturierte Gefäßbefunde und Vorschautexte. Der gemeinsame Rückgängig-Verlauf umfasst das Modul. **System / Hell / Dunkel** wählt die Darstellung. Die MRA-Befundtexte sind deutsch.

[Architektur, Datenmodell und Textregeln](mra/README.md)

## Use locally

Download `index.html` or the standalone HTML release asset and open it in a browser. No installation is needed.

Keyboard shortcuts: Tab expands macros, F2 selects the next placeholder, Alt+I focuses the impression (or freestyle report), Alt+M searches macros, and Ctrl/Cmd+S exports the report.

## Data and clinical use

Report text stays in the browser unless you copy, export, or print it. Enabling draft saving stores report text on that device. Macros and language preferences are stored locally when browser storage is available. Example macros must be reviewed by a clinician before use.

## License

[MIT License](LICENSE), copyright © 2026 jskilef. You may use, modify, redistribute, and sell the software, provided the copyright and license notice are retained. The software is provided without warranty. The license does not claim ownership of your reports or other user-created content.

See [the clinical and data notice](CLINICAL_NOTICE.md) for the German/English usage notes. These notes do not add restrictions to the MIT License. The standalone HTML includes the full license in its “License & usage” dialog.

## Deployment

Run `npm run build` after source changes. `src/editor.html`, `mra/` and `chest/` are the editable sources; the build embeds them into the standalone `index.html`. No new runtime dependencies are required.

GitHub Pages serves the root of the `main` branch. `.nojekyll` enables direct static hosting. Update `index.html` and push to `main` to publish a change.

## Validation

Install development dependencies with `npm install`, then install a browser with `npx playwright install chromium` and run `npm test`. To use an existing browser, set `RADNOTE_CHROMIUM_PATH` to its executable path. No dependencies are needed to use the editor itself.

## Versioning and releases

Use Semantic Versioning (`MAJOR.MINOR.PATCH`). Keep `VERSION`, `version.json`, the HTML application-version meta tag, and the visible version badge aligned. Document each release in `CHANGELOG.md`, tag the commit as `vX.Y.Z`, and publish a GitHub release with the standalone HTML asset.
