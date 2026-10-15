# Radnote v1.4.1 — Universelle arterielle MR-Angiographie

- Auswahl aus 12 untersuchten Körperregionen; 101 eindeutig identifizierte Gefäßabschnitte einschließlich Kopf/Hals, Aorta, Viszeral-/Nierenarterien, Becken/Beinen/Füßen und oberen Extremitäten.
- Dynamische, deduplizierte Rechts-links-Übersicht. Kein automatischer Normalbefund für unbeurteilte oder nicht untersuchte Gefäße.
- Mehrere Läsionen pro Gefäß mit Stenosegrad, weiteren Pathologien und optionalen Maß-, Ausdehnungs- und Abstromangaben.
- Deutsche Live-Vorschau mit getrenntem Befund und priorisierter Beurteilung.
- Schutz manueller Texte; ausdrückliches Anhängen/Ersetzen im vorhandenen Editor unter Berücksichtigung fixierter Textstellen.
- Speicherung und Wiederherstellung mit dem bestehenden Entwurf, gemeinsames Rückgängig und vollständiger Modulreset.
- System-/Hell-/Dunkel-Darstellung und mobile Rechts-links-Matrix.
- Wiederverwendbare Anatomiedefinitionen und getrennte regelbasierte Erzeugung ohne neue Laufzeitabhängigkeiten. Die veröffentlichte HTML-Datei bleibt vollständig eigenständig.

[Live editor](https://jskilef.github.io/radnote/) · [Standalone HTML](https://github.com/jskilef/radnote/raw/refs/tags/v1.4.1/index.html) · [Architektur und Textregeln](https://github.com/jskilef/radnote/blob/v1.4.1/mra/README.md)

Zusätzlich bleiben Untersuchungsart und sprachunabhängiger Auswahlwert bei Textübernahme und Entwurf-Wiederherstellung stabil.

Validierung: Anatomie-/Textregeltests, neue MRA-Browsertests für Regionen, Läsionen, Speicherung, manuelle Texte, Übernahme, Fixierungen, Undo, Reset, Dark Mode und mobile Darstellung sowie die vier bisherigen Browser-Suiten.
