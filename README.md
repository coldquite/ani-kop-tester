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

## Doplněné otázky ze staršího PDF

Soubor `NI-KOP uzavřené otázky.pdf` (36 stran; sbírka starých zápočtových a zkouškových otázek) byl tematicky porovnán s aktuálním bankem. Nové samostatné úlohy z **dynamického programování a globálních metod** patří do P12; otázky k **Tabu search**, které zdroj výslovně označuje jako vyřazené z předmětu, jsou ponechány **pouze v archivu**. Některé neúplné či nejasné varianty nebyly přidány; u přidaných položek je uvedeno číslo stránky a poznámka k případným odlišnostem od historického klíče.

[Podrobná kontrola PDF](docs/pdf-question-audit-2026-11-01.md).

## AI-generated otázky založené na přednáškách 2026

Vedle historických sad jsou dostupné **oddělené tréninkové sady** označené „AI-generated“. Tyto otázky **nejsou autentické otázky vyučujících**, pouze nové návrhy odvozené z oficiálních prezentací ANI-KOP 2026 a z porovnání s již existující bankou. Neovlivňují počty historických otázek ani sady Průběžný test / Druhá část semestru. Každá obsahuje správné odpovědi, zdůvodnění a odkazy na stránky přednášky.

- **AI-generated · P1**: `?set=ai-lecture-1` (16 otázek, ANI-KOP01.pdf).
- **AI-generated · P2**: `?set=ai-lecture-2` (18 otázek, ANI-KOP02.pdf).
- **AI-generated · P3**: `?set=ai-lecture-3` (18 otázek, ANI-KOP03.pdf).
- **AI-generated · P5**: `?set=ai-lecture-5` (22 otázek, ANI-KOP05.pdf; interpretace SAT/SMT bez psaní kódu).
- **AI-generated · P6**: `?set=ai-lecture-6` (29 otázek, KOP06.pdf; čtení a interpretace ILP/CSP modelů).
- `?set=ai-all`: všechny dokončené AI-generated sady (doplní se L2–L4).

[Audit pokrytí a návrh nových otázek – L1](docs/ai-generated/lecture-01.md).

[Audit pokrytí a návrh nových otázek – L2](docs/ai-generated/lecture-02.md).

[Audit pokrytí a návrh nových otázek – L3](docs/ai-generated/lecture-03.md).

[Audit pokrytí a návrh nových otázek – L5](docs/ai-generated/lecture-05.md).

[Audit pokrytí a návrh nových otázek – L6](docs/ai-generated/lecture-06.md).
