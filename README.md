# ANI-KOP Tester

Webová aplikace pro procvičování otázek z předmětu ANI-KOP.

**Aktuální repozitář:** [coldquite/ani-kop-tester](https://github.com/coldquite/ani-kop-tester)

## Použití

Otevřete `index.html` a vyberte tematickou sadu otázek podle harmonogramu ANI-KOP 2026. Přehled otázek je dostupný v `overview.html`.

### Sady otázek

- **Průběžný test (P1–P6):** témata první poloviny předmětu (kombinatorické problémy, třídy složitosti, NP-úplnost, stavový prostor, SAT/SMT a ILP/CSP).
- **Druhá část semestru (P7–P12):** randomizované algoritmy, experimenty, simulované ochlazování, simulovaná evoluce, vícekriteriální a globální metody.
- **Aktuální témata:** sjednocení obou částí bez archivních otázek.
- **Starší témata (archiv):** otázky ke starší osnově, např. aproximační schémata, obvodová složitost a bayesovská optimalizace.
- **Všechny otázky:** kompletní původní databáze bez vynechání.
- **Jednotlivé přednášky:** samostatné sady P1 až P12; přednášky bez dostupných otázek jsou v nabídce označeny a nelze je vybrat.

Zdroje otázek pocházejí ze starších verzí předmětu. Přiřazení k přednáškám je **orientační tematická klasifikace**, nikoli potvrzený rozsah nebo zadání testu 2026. Původní odkazy `?set=assessment` a `?set=exam` se přesměrují na nové sady.

Aplikace je statická a lze ji nasadit pomocí GitHub Pages.

## Struktura projektu

- `index.html` – procvičování otázek
- `overview.html` – přehled otázek
- `scripts/questions.js` – původní otázky ze sady Assessment
- `scripts/exam/exam-questions-converted.js` – původní otázky ze sady Exam
- `scripts/question-sets.js` – tematická klasifikace a výběr sad podle přednášek
