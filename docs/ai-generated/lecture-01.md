# AI-generated L1 — Kombinatorické problémy a formalizace

> **Upozornění:** Tyto otázky vytvořila AI pro samostatné procvičování. Nejde o otázky z reálného testu ani o informaci, co vyučující skutečně položí. Primární zdroj: ANI-KOP01.pdf (2026), s. 5–42; orientačně také ANI-KOP00.pdf.

## Co obsahoval původní tester

Tematická sada `lecture-1` před touto úpravou čítala **9 historických položek** (Assessment: 16, 18, 19, 39, 42, 59, 60, 82, 96). Pokrývá základní charakteristiku kombinatorické úlohy, konfigurační a výstupní proměnné, jednotlivé varianty TSP a obecné definice.

## Zjištěné mezery a odůvodněný návrh

| Okruh z oficiální přednášky | Strany ANI-KOP01 | Dosavadní slabina | Nové otázky |
|---|---|---|---|
| Problem vs. instance; konfigurace, řešení, optimum | 5–9 | Převážně definice bez konkrétního přiřazení | AI-L1-01, 02, 11 |
| Batoh 0/1 a konkrétní instance se dvěma optimy | 10–15 | Není přímé numerické procvičení instance z přednášky | AI-L1-03, 04, 12 |
| Abstraktní konfigurace a vhodnost reprezentací | 13, 16–27 | Slabé ověřování, co může reprezentace vynechat | AI-L1-05, 06, 14 |
| Konstruktivní, rozhodovací, výpočetní, enumerační varianty | 29–33 | Původní sada se koncentruje na TSP otázky, ne na hlubší srovnání | AI-L1-07, 08, 13 |
| SAT, #SAT, MAX-SAT vs. Max-Ones-SAT | 36–42 | Chybí porovnání modelů, kde je splnitelnost omezením vs. kritériem | AI-L1-09, 10, 15 |
| Vrtací úloha a rozdíl konfigurace / výstupu | 5–8 | Chybí aplikace rozdílu na hodnotovou variantu | AI-L1-13 |

## Výsledek

- **16 nových AI-generated otázek:** **11** vícevolbových a **5** otevřených, uložených do `scripts/ai-generated/lecture-01.js`.
- Ke každé otázce je česky formulované zdůvodnění `aiNote` a přesný tematický odkaz na stránky primární prezentace.
- Stávajících historických **250** otázek se nemění a nová sada `ai-lecture-1` se nezapočítává do `midterm`, `lecture-1`, `all` ani `archive`.
- Návrh hodnotí rozsah **potenciálně testovatelných dovedností**, nikoli pravděpodobnost konkrétního výskytu v testu.
