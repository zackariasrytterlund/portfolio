# Byggplan: Portfolio (HTML + CSS)

**Live:** https://zackariasrytterlund.github.io/portfolio/

Sajten byggs från Figma-filen [Min Portfolio](https://www.figma.com/design/P29nKuCwQAzURb0Zy3SA3w/Min-Portfolio).
Den ska följa designen exakt och vara responsiv.
Vi jobbar ett steg i taget. Varje steg avslutas med en commit och en push till GitHub.

## Beslut (2026-11-12)

| Fråga | Beslut |
|---|---|
| Teknik | HTML, vanlig CSS och lite JavaScript (bara för mobilmenyn och slidern) |
| Sidor | Startsidan först. Undersidorna (Case, About, Contact) byggs sist, när de är designade i Figma |
| Dark mode | Ja, följer besökarens systeminställning (`prefers-color-scheme`) |
| Content slider på mobil | Döljs på mobil, som i Figma (beslut 2026-11-23) |
| Bilder | Grå platshållare i rätt format. Byts mot riktiga bilder i `images/` senare |
| About-länken | Leder till Kompetenser, eftersom Om mig-sektionen är borttagen (2026-11-23) |
| Contact-länken | Öppnar mejl med `mailto:` (Figma-annotation) |
| Kategorikort | Digital Design till vänster även på mobil (2026-11-23) |
| Navigation | Sticky på både desktop och mobil (2026-11-23) |
| Repo | Publikt repo `zackariasrytterlund/portfolio` som publiceras med GitHub Pages |

## Källor i Figma

| Del | Desktop (1440) | Mobil (375) |
|---|---|---|
| Hela startsidan | `38:303` | `38:403` |
| Dark mode | `38:420` | `38:437` |
| Komponenter | Sidan *Components* (`9:77`) | |
| Textstilar | Sidan *Styles* (`1:250`) | |

## Design-tokens (från Figma-variabler)

| Token | Värde |
|---|---|
| `background/primary` | `#F9C76A` |
| `text/primary` | `#111110` |
| `text/seconday` (hover) | `#5E5748` |
| `text/tertiary` | `#83775A` |
| Heading | Space Grotesk Bold, 132 px (mobil 56 px), radhöjd 168 px (mobil 71 px), letter-spacing −7 % |
| Sub-Heading | Space Grotesk Medium, 32 px (mobil 24 px), radhöjd 41 px (mobil 31 px) |
| Body | Inter Regular, 20 px (mobil 16 px), radhöjd 24 px (mobil 19 px) |
| Link S | Inter Regular, 20 px (mobil 16 px) |
| Link L | Inter Regular, 64 px (mobil 40 px) |
| Grid | Desktop: 12 kolumner, 32 px marginal. Mobil: 6 kolumner, 16 px marginal. Sektionerna använder 16 px gap |
| Hörnradie | 32 px (mobil 16 px) |
| Dark mode | Bakgrund `#111110`, text `#F9C76A` |

## Filstruktur

```
index.html
css/
  reset.css       – nollställning av webbläsarens standardstilar
  tokens.css      – färger, typsnitt och avstånd som CSS-variabler (inkl. dark mode)
  layout.css      – grid, containers och brytpunkter
  components.css  – nav, länkar, media-kort och slider
  sections.css    – hero, arbeten, kompetenser och text
js/
  main.js         – mobilmeny och slider-pilar
images/           – bilder (platshållare tills vidare)
```

## Arbetssätt per steg
1. Hämta rätt ram från Figma (design context och skärmdump).
2. Bygg HTML och CSS.
3. Jämför i webbläsaren med Figma, både på 1440 px och 375 px.
4. Commit med meddelandet `Steg N: …` och push.

## Förhandsvisning
Starta en lokal server i projektmappen och öppna http://localhost:5500 (eller använd Live Server i VS Code):

```bash
python3 -m http.server 5500
```

Storlekarna skalar mjukt mellan mobil (375 px) och desktop (1440 px) med `clamp()`. Vid 768 px och uppåt används 12 kolumner. På skärmar bredare än 1440 px centreras sidan och slidern går ut till fönstrets kanter.

Sidan är testad på 320, 375, 767, 768, 1024, 1440 och 1920 px och har inget sidledsscroll på någon bredd.

## Steg

- [x] **Steg 0: Plan och repo.** Skriv den här planen, kör `git init` och skapa GitHub-repot.
- [x] **Steg 1: Grund.** `index.html`-skelett, reset, tokens (ljust och mörkt tema), typsnitt och grid och brytpunkter.
- [x] **Steg 2: Navigation.** Desktop-nav och mobilnav som öppnas och stängs (JS, `aria-expanded`).
- [x] **Steg 3: Link-komponent.** Lägena Default och Hover i storlekarna S och L. Hover-rörelsen görs i CSS.
- [x] **Steg 4: Hero.** Rubriken och bento-rutnätet med Media Cards (16:9, 4:5 och 5:4).
- [x] **Steg 5: Content slider.** Horisontell slider med scroll-snap och fungerande pilar.
- [x] **Steg 6: Arbeten.** Projektlistan (nr, projekt, roll, år och länk).
- [x] **Steg 7: Kompetenser.** Tools, Clients, Education och Hobbies.
- [x] **Steg 8: Text.** Om mig-sektionen.
- [x] **Steg 9: Dark mode.** Kontrollera mot Figmas dark mode-ramar och justera.
- [x] **Steg 10: Responsiv kontroll.** Testa på 375, 768, 1024 och 1440 px. Kontrollera tillgänglighet (kontrast, fokus och alt-texter).
- [x] **Steg 11: Publicera.** Slå på GitHub Pages och kontrollera den publicerade sajten.
- [ ] **Steg 12: Undersidor.** Case, About och Contact. *Väntar på design i Figma.*

### Del 2: ny design (2026-11-23)
Figma har fått en ny hero, en footer, ny sektionsordning och annotations för interaktion.

- [ ] **Steg 13: Grund v2.** Typsnittet Sarpanch, nya textstorlekar (1 Heading, 2 heading, Heading 2), sticky nav, About → Kompetenser och Contact → `mailto:`.
- [ ] **Steg 14: Hero v2.** "Digital Design • Filmmaking", två kategorikort med bilder och "Selected Work" med fyra projektrader.
- [ ] **Steg 15: Projektrader med hover.** Desktop: kortet glider åt höger och projektinfo visas till vänster (Figma: Media Card Hover).
- [ ] **Steg 16: Ny ordning och uppdaterade sektioner.** Om mig tas bort, Kompetenser får nya avstånd, slidern flyttas efter Kompetenser, får nya mått (704 × 880) och döljs på mobil.
- [ ] **Steg 17: Footer.** Contact, mejladress som kopieras vid klick, ikoner för Instagram, TikTok och LinkedIn.
- [ ] **Steg 18: Kontroll och publicering.** Dark mode, responsiv kontroll och tillgänglighet, sedan push till GitHub Pages.

## Öppna frågor (tas upp när vi kommer dit)
- Kategorikorten och projektraderna leder ingenstans än, eftersom case-sidorna inte är designade.
- Några texter i Figma är hårdkodat svarta (`black`) i stället för `text/primary`. Jag använder `text/primary`, så att de blir gula i dark mode.
- Hover-färgen i dark mode finns inte i Figma. `#B8955A` används (kontrast 6,7:1). Lägg gärna till den som variabel i Figma.
- Mellanstorlekar (cirka 768–1024 px) finns inte i Figma. Där skalar vi mellan mobil och desktop.
