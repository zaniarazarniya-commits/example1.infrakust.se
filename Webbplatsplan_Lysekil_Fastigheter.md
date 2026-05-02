# Webbplatsplan - Lysekil Fastigheter
## Struktur, wireframes & designriktlinjer

---

## 1. SITESTRUKTUR (Sitemap)

```
STARTSIDA
├── OM OSS
│   └── VÅR HISTORIA
│       ├── Vision
│       ├── Team
│       └── Värderingar
│
├── FASTIGHETER
│   ├── FASTIGHETSPORTFÖLJ
│   │   ├── Objekt A (detaljsida)
│   │   ├── Objekt B (detaljsida)
│   │   └── Objekt C (detaljsida)
│   └──
│       ├── Lägenhet (detaljsida)
│   │   └── Lokal (detaljsida)
│   └──
│       └── Fastighetsägaren
│
├── KONTAKT & FELANMÄLAN
│   ├── KONTAKTUPPGIFTER
│   │   ├── Besöksadress
│   │   ├── Telefon
│   │   └── E-post
│   └── FELANMÄLAN (formulär)
│       ├── Namn
│       ├── Adress/Lägenhetsnummer
│       ├── Telefonnummer
│       ├── E-post
│       ├── Beskrivning av felet
│       ├── Bilduppladdning
│       └── Prioritet (Låg/Normal/Akut)
│   └── JOURNUMMER (akuta ärenden)
│
```

### Globala element (finns på alla sidor)
- **Header**: Logo + huvudnavigation (responsiv med hamburgermeny på mobil)
- **Footer**: Kontakt, adress, e-post, telefon, sociala medier, integritetspolicy
- **Responsiv design**: Mobil, tablet, desktop

---

## 2. WIREFRAME-BESKRIVNING: STARTSIDA

### Övergripande layout
Startsida ska fungera som en digital entré - välkomnande, överskådlig och med tydlig vägledning till de viktigaste funktionerna. Scrollstruktur från topp till botten:

---

### Sektion A: Header (Navigation)
| Element | Beskrivning |
|---------|-------------|
| **Logo** | Fastighetsägarens logotyp, vänsterställd. Klickbar - leder till startsidan. |
| **Navigation** | Horisontell meny: STARTSIDA \| FASTIGHETER \| OM OSS \| KONTAKT & FELANMÄLAN. På mobil: hamburgermeny (☰) i höger hörn. |
| **Design** | Mörk marinblå (#1e3a5f) bakgrund, vit text. Höjd: ~80px. Sticky vid scroll (fäst överst). |

---

### Sektion B: Hero / Välkomstsektion
| Element | Beskrivning |
|---------|-------------|
| **Bakgrund** | Heltäckande bild/video av Lysekils kust, hamn eller fastighetsbestånd. Mörkt overlay (40% svart) för textkontrast. |
| **Huvudrubrik** | "Välkommen till [Fastighetsnamn]" - stor vit text, centrerad. |
| **Underrubrik** | "Din lokala fastighetsägare i Lysekil sedan [år]" - lättare tyngd. |
| **CTA-knapp** | "[ SE VÅRA FASTIGHETER ]" - blå (#3b82f6) knapp med vit text. Leder till Fastighetsportföljen. |
| **Design** | Full viewport-höjd eller ~60vh. Textcentrerad i mitten. Kustnära känsla med blåa och gråa toner. |

---

### Sektion C: Fastighetsportfölj
| Element | Beskrivning |
|---------|-------------|
| **Sektionsrubrik** | "VÅR FASTIGHETSPORTFÖLJ" - centrerad, mörkblå (#1e3a5f). |
| **Kortlayout** | 3 kort i rad (desktop), 2 (tablet), 1 (mobil). Varje kort innehåller: |
| **Kortinnehåll** | Foto av fastigheten (överkant), adress under, typ (Bostäder/Lokaler). |
| **Interaktion** | Klick på kort leder till detaljsida för respektive fastighet. |
| **Design** | Vita kort med subtil skugga, avrundade hörn (8px). Grå (#f1f5f9) sektionsbakgrund. Hover: lätt lyft-effekt (shadow ökar). |

---

### Sektion D: Lediga objekt
| Element | Beskrivning |
|---------|-------------|
| **Sektionsrubrik** | "LEDIGA OBJEKT" - centrerad, vit text på blå (#3b82f6) bakgrund. |
| **Objektlista** | Vertikal lista med objekt. Varje rad: bild (vänster), info (mitten), knapp (höger). |
| **Objektinfo** | Typ + storlek (t.ex. "Lägenhet • 2 rok • 58 m²"), adress, pris/månad. |
| **CTA per objekt** | "LÄS MER →" - blå knapp. Leder till objektets detaljsida med bildgalleri och fullständig info. |
| **Separering** | Tunna grå linjer mellan objekt. |
| **Design** | Vit bakgrund. Pris i blå (#3b82f6) tyngd text. Adress i grå (#64748b) text. |

---

### Sektion E: Om oss (teaser)
| Element | Beskrivning |
|---------|-------------|
| **Sektionsrubrik** | "OM OSS" - centrerad. |
| **Layout** | Två kolumner: bild vänster, text höger. |
| **Bild** | Foto av teamet/fastighetsägaren eller fastighetsbeståndet. |
| **Text** | Kort pitch: "En pålitlig partner i Lysekil". 2-3 rader om värderingar och långsiktighet. |
| **Länk** | "[ LÄS MER OM OSS ]" - leder till Om oss-sidan. |
| **Design** | Grå (#f1f5f9) bakgrund. Avrundad bild. |

---

### Sektion F: Snabbkontakt / CTA-band
| Element | Beskrivning |
|---------|-------------|
| **Bakgrund** | Blå (#3b82f6) band över hela bredden. |
| **Rubrik** | "Behöver du göra en felanmälan?" - vit text, centrerad. |
| **Knappar** | "[ GÅ TILL FELANMÄLAN ]" och "[ KONTAKTA OSS ]" - vita/transparenta knappar bredvid varandra. |
| **Design** | Tydlig visuell brytpunkt. Skiljer innehåll från footer. |

---

### Sektion G: Footer
| Element | Beskrivning |
|---------|-------------|
| **Bakgrund** | Mörkgrå (#1e293b). |
| **Innehåll** | Kontaktuppgifter, adress, e-post, telefon, sociala medier-ikoner, integritetspolicy-länk. |
| **Design** | Vit/ljusgrå text. Centrerad layout. © 2025 [Fastighetsnamn]. |

---

## 3. WIREFRAME-BESKRIVNING: KONTAKT & FELANMÄLAN

Denna sida har två huvudsyften: presentera kontaktinformation och erbjuda ett smidigt felanmälningsflöde. Layouten är ren, luftig och fokuserad på användbarhet.

---

### Sektion A: Header
Identisk med startsidan (sticky, marinblå navigation).

---

### Sektion B: Sidtitel
| Element | Beskrivning |
|---------|-------------|
| **Huvudrubrik** | "KONTAKT & FELANMÄLAN" - stor, centrerad, marinblå (#1e3a5f). |
| **Underrubrik** | "Här hittar du vår kontaktinformation och kan göra en felanmälan" - grå (#64748b), centrerad. |

---

### Sektion C: Kontaktuppgifter
| Element | Beskrivning |
|---------|-------------|
| **Sektionsrubrik** | "KONTAKTUPPGIFTER" - centrerad, grå sektionsbakgrund. |
| **Kortlayout** | 3 kort i rad: |
| **Kort 1** | Adress-ikon + "Besöksadress" + Storgatan 1, 453 30 Lysekil |
| **Kort 2** | Telefon-ikon + "Telefon" + 0523-XX XX XX (vardagar 08:00-16:00) |
| **Kort 3** | E-post-ikon + "E-post" + info@fastighet-lysekil.se |
| **Design** | Ljusa kort (#f8fafc) med ikoner. Tydlig hierarki: etikett fet, värde normal. |

---

### Sektion D: Akuta ärenden & Jour (KRITISK SEKTION)
| Element | Beskrivning |
|---------|-------------|
| **Syfte** | Tydligt skilja akuta ärenden från vanliga felanmälningar. |
| **Design** | Röd/vit varningsbox: ljusrosa (#fef2f2) bakgrund, röd (#ef4444) kantlinje. |
| **Innehåll** | Varningsikon + rubrik "AKUTA ÄRENDEN & JOUR" + telefonnummer. |
| **Text** | "Vid akuta fel (läckage, el-avbrott, låsproblem): Ring 0523-XX XX XX" |
| **Undertext** | "Journummer är bemannat dygnet runt för akuta ärenden" |
| **Placering** | Direkt under kontaktuppgifter, ovanför formuläret - ska synas direkt! |

---

### Sektion E: Felanmälan (Formulär)
| Element | Beskrivning |
|---------|-------------|
| **Sektionsrubrik** | "FELANMÄLAN" - blå (#3b82f6) band med vit text. |
| **Beskrivning** | "Fyll i formuläret nedan för att göra en felanmälan. Vi återkommer så snart som möjligt." |
| **Formulärfält** | |
| **Namn** | Textfält. Obligatoriskt (*). Placeholder: "Ditt för- och efternamn" |
| **Adress / Lägenhetsnummer** | Textfält. Obligatoriskt (*). Placeholder: "Ex: Storgatan 12, lgh 1102" |
| **Telefonnummer** | Textfält. Obligatoriskt (*). Placeholder: "Ditt telefonnummer" |
| **E-post** | Textfält. Valfritt. Placeholder: "Din e-postadress (valfritt)" |
| **Beskrivning av felet** | Textarea (större fält, 3-4 rader). Obligatoriskt (*). Placeholder: "Beskriv felet så detaljerat som möjligt..." |
| **Bilduppladdning** | Drag-and-drop zon eller klicka-välja. Ikon: paperclip. Text: "Klicka för att ladda upp bilder eller dra och släpp filer här". Undertext: "Max 5 bilder (JPG, PNG) • Max 5 MB per bild". |
| **Prioritet** | Radio-knappar: Låg (mindre störning) / Normal (standardärende) / Akut (kräver omedelbar åtgärd). "Normal" förvald. "Akut" har röd färgmarkering. |
| **Submit-knapp** | "SKICKA FELANMÄLAN →" - blå (#3b82f6) knapp, centrerad, fullbredd (max 400px). |
| **Bekräftelse** | "✓ Du får en bekräftelse via e-post eller SMS när din anmälan är mottagen" - grön (#10b981), centrerad under knappen. |
| **Design** | Vita fält med grå kantlinjer. Avrundade hörn (6px). Fokus: blå kantlinje vid aktivt fält. Fel: röd kantlinje vid valideringsfel. |

---

### Sektion F: Alternativ kontakt
| Element | Beskrivning |
|---------|-------------|
| **Bakgrund** | Ljusgrå (#f8fafc) ruta. |
| **Rubrik** | "Föredrar du att ringa in din felanmälan?" |
| **Text** | "Ring oss på 0523-XX XX XX så hjälper vi dig direkt" |
| **Syfte** | Erbjuda alternativ för de som inte vill/kan använda formulär. |

---

### Sektion G: Footer
Identisk med startsidan.

---

## 4. FÄRGPALETT & DESIGNPRINCIPER

### Primärfärger (Kustnära tema)
| Färg | Hex | Användning |
|------|-----|------------|
| Marinblå | #1e3a5f | Header, rubriker, footer, primära CTA-knappar |
| Havsblå | #3b82f6 | Sekundära knappar, länkar, aktiva tillstånd, sektionsband |
| Skumblå | #0ea5e9 | Accenter, ikoner, hover-effekter |

### Neutrala toner
| Färg | Hex | Användning |
|------|-----|------------|
| Mörkgrå | #334155 | Brödtext, etiketter |
| Mellangrå | #64748b | Sekundär text, placeholders, metadata |
| Ljusgrå | #f1f5f9 | Sektionsbakgrunder, kortbakgrund |
| Vit | #ffffff | Sidobakgrund, kort |

### Statusfärger
| Färg | Hex | Användning |
|------|-----|------------|
| Röd | #ef4444 | Akut/jour, valideringsfel, varningar |
| Grön | #10b981 | Bekräftelser, framgångsmeddelanden |
| Gul | #f59e0b | Varningar, uppmärksamhet |

### Typografi
- **Rubriker**: Sans-serif (t.ex. Inter, Roboto, eller systemfont). Vikt: 600-700.
- **Brödtext**: Sans-serif. Vikt: 400. Storlek: 16px (desktop), 15px (mobil).
- **Etiketter**: Sans-serif. Vikt: 500. Storlek: 14px. Versaler för sektionsrubriker.

### Designprinciper
1. **Luft och andrum**: Generösa marginaler (minst 60px mellan sektioner). Vit/lygrå kontrast.
2. **Tydlig hierarki**: Rubriker > underrubriker > brödtext > metadata.
3. **Konsekventa knappar**: Primära = fylld blå. Sekundära = outlined/transparent.
4. **Lokalt fokus**: Använd bilder från Lysekil (hamnen, kusten, kända landmärken).
5. **Tillgänglighet**: Kontrastkrav WCAG AA (4.5:1 för text). Fokusmarkeringar tydliga.

---

## 5. UX-RIKTLINJER & ANVÄNDARFLÖDEN

### Felanmälningsflöde (Primärt flöde)
```
Hyresgäst besöker sidan
        ↓
Ser JOUR-sektionen direkt (om akut) → RING JOURNUMMER
        ↓
Om ej akut: scrollar till formulär
        ↓
Fyller i fälten (validering i realtid)
        ↓
Väljer prioritet (Normal förvalt)
        ↓
Laddar upp bilder (valfritt)
        ↓
Klickar "SKICKA"
        ↓
Bekräftelsesida / popup: "Anmälan mottagen. Ärendenummer: #12345"
        ↓
Kopia till hyresgästens e-post/SMS
```

### Prioritetslogik
| Nivå | Exempel | Åtgärdstid |
|------|---------|------------|
| **Akut** | Vattenläckage, strömavbrott, dörr som inte går att låsa | 0-4 timmar |
| **Normal** | Kran droppar, lampa trasig, mindre skada | 1-3 arbetsdagar |
| **Låg** | Kosmetiska skador, önskemål om förbättring | Nästa planerade underhåll |

### Navigation (hyresgästperspektiv)
> "Jag behöver felanmäla något" → Klickar "KONTAKT & FELANMÄLAN" i header → Ser direkt om det är akut (röd box) → Scrollar till formulär → Fyller i och skickar.

**Max 2 klick** från vilken sida som helst till felanmälan.

---

## 6. TEKNISKA REKOMMENDATIONER

### Frontend
- **Ramverk**: React / Vue / ren HTML+CSS+JS beroende på behov.
- **Responsivitet**: Mobile-first (brytpunkter: 640px, 768px, 1024px, 1280px).
- **Bilder**: WebP-format med fallback. Lazy loading för bilder under fold.
- **Prestanda**: LCP < 2.5s, CLS < 0.1.

### Formulär & Backend
- **Validering**: Client-side (HTML5 + JavaScript) + server-side.
- **Bilduppladdning**: Kompression innan upload. Max 5 filer × 5 MB.
- **Spamskydd**: reCAPTCHA v3 (osynlig) eller honeypot-fält.
- **Bekräftelse**: Automatisk e-post med ärendenummer. SMS-avisering som tillval.
- **Databas**: Lagring av ärenden med status (mottagen → under utredning → åtgärdad → stängd).

### SEO & Tillgänglighet
- Semantisk HTML (header, nav, main, section, footer).
- Alt-text på alla bilder.
- ARIA-labels på ikoner och knappar.
- Tangentbordsnavigering fungerar i hela formuläret.
- Meta-titel och beskrivning per sida.

---

## 7. SIDÖVERSIKT (Sammanfattning)

| Sida | Syfte | Viktigaste element |
|------|-------|-------------------|
| **Startsida** | Välkomna, presentera portfölj, driva konvertering till lediga objekt/felanmälan | Hero, fastighetsgalleri, lediga objekt-lista, snabb-CTA till felanmälan |
| **Om oss** | Bygga förtroende och lokal förankring | Historia, team, värderingar, bilder |
| **Fastighetsportfölj** | Visa hela beståndet | Galleri/kort med adresser, bilder, typ |
| **Objektdetaljsida** | Detaljinformation om specifikt objekt | Bildgalleri, beskrivning, karta, kontakt för intresseanmälan |
| **Kontakt & Felanmälan** | Kontaktinformation + felanmälningsformulär | Kontaktkort, jour-ruta, formulär med prioritet, bilduppladdning |

---

*Dokumentversion 1.0 | 2025-04-30*
