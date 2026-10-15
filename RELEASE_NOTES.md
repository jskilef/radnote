# Radnote v1.6.0 — Konfiguration sichern und kompakte Baukastenauswahl

- **Konfiguration speichern / laden** sichert Textbausteine einschließlich Wortkürzeln, Kategorien und Favoriten, alle eigenen Vorlagen mit Feldreihenfolge und Standardtexten, strukturierte Thorax-Favoriten sowie Sprache, Darstellung und Bedienungseinstellungen.
- Einstellungen umfassen die ausgewählte Vorlage, den Baukasten, aufgeklappte Seitenleistenbereiche, die Entwurfsspeicherung sowie Thorax-Befundstil und automatische Vorschau.
- Bisherige Textbaustein-Dateien bleiben kompatibel. Bibliotheken werden zusammengeführt, gleiche Makrokürzel aktualisiert und abweichende Vorlagen als zusätzliche Kopien erhalten. Ungültige Dateien werden vor Änderungen abgewiesen.
- Aktuelle Befundtexte bleiben beim Import erhalten und werden weiterhin über die separate lokale Entwurfsspeicherung gesichert.
- **Ein Dropdown für alle Baukästen:** Kein Baukasten / Röntgen-Thorax / MR-Angiographie. Sichtbar ist nur die Auswahl; Eingaben und manuelle Vorschauen bleiben beim Wechsel erhalten.
- Ohne neue Laufzeitabhängigkeiten, weiterhin eine eigenständige HTML-Datei mit Hell-/Dunkeldarstellung und mobiler Bedienung.

[Live-Editor](https://jskilef.github.io/radnote/) · [HTML-Datei](https://github.com/jskilef/radnote/raw/refs/tags/v1.6.0/index.html) · [Konfigurationsformat](https://github.com/jskilef/radnote/blob/v1.6.0/settings/README.md)

Validierung: Konfigurations- und Konflikttests, vollständiger Export-/Import-Rundlauf in einem frischen Browser, Schutz vorhandener Texte, Neuladen und Mobilansicht sowie alle bisherigen Editor-, Thorax- und MR-Angiographie-Tests.
