# Radnote v1.7.0 — CCT, Röntgen-Skelett und Breischluck

Drei vollständig integrierte Befundbaukästen im bestehenden Dropdown:

- **CT Schädel:** Routine, Trauma, Stroke und Verlauf; Blutungen, Ischämie, ASPECTS rechts/links, Liquorräume/Masseneffekt, Raumforderungen, Kalotte und weitere anatomische Kategorien. Befund und Beurteilung getrennt.
- **Röntgen-Skelett:** 21 Regionen mit passenden Projektionen, regionalen Frakturmasken, Arthrosen, Implantaten und Wirbelsäulensegmenten. Garden, Weber und Meyerding werden nur bei dokumentierten Voraussetzungen ausgegeben. Ein gemeinsamer Text.
- **Breischluck:** Routine, Achalasie, POEM, Z-POEM, Fundoplikatio, Ösophagektomie und sonstige postoperative Kontrollen. Morphologie, Passage, Stenosen, Divertikel, Hernien, beobachteter Reflux und Extravasation; getrennte Ausgabe.

Gemeinsame regelbasierte Generierung, drei Stile, strukturierte Favoriten, Vergleich, geschützte manuelle Vorschau mit Wiederherstellung und Übernahme mit Anhängen/Ersetzen/Abbrechen. Die vorhandenen Fixierungen, Rückgängig-Funktionen, Entwürfe und Themes bleiben integriert. Keine neue Laufzeitabhängigkeit oder externe KI-API.

Konfigurationsformat v2 sichert auch die neuen Favoriten und Vorschau-Einstellungen. Bestehende v1-Konfigurationen und Makrodateien bleiben ladbar.

[Live-Editor](https://jskilef.github.io/radnote/) · [HTML-Datei](https://github.com/jskilef/radnote/raw/refs/tags/v1.7.0/index.html) · [Architektur, Datenmodelle, medizinische Regeln und Grenzen](https://github.com/jskilef/radnote/blob/v1.7.0/builders/README.md)

Validierung: 43 neue Regel-/Modelltests, vollständiger Browserworkflow aller drei Module einschließlich frischem Browser für Favoritenimport und sämtliche bisherigen Thorax-, MRA-, Konfigurations- und Editor-Regressionen.
