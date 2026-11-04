# AI-generated L2 — P, NP, co-NP a polynomiální hierarchie

> Předkládané otázky jsou autorsky vytvořené tréninkové návrhy podle ANI-KOP02.pdf (2026), nikoli skutečné zadání vyučujících.

## Zmapování stávajícího testu

Původní zařazení `lecture-2`: **14 historických otázek** (A1–A5, A13–A15, A28, A31, A33, A43, A62, A155). Obsahuje velkou skupinu asymptotických tvrzení Θ/O/Ω, otázky na význam NP, co-NP, dokazování členství v NP a certifikát pro rozhodovací TSP.

## Co bylo ve zdrojích 2026 a v testeru méně pokryté

| Kompetence | ANI-KOP02.pdf, s. | Přidané položky |
|---|---|---|
| Délka reprezentace instance a pseudo-polynomiální čas | 13–17, 63 | AI-L2-01 |
| DTM, NDTM, sémantika přijímací větve, rozdíl ověřování/hledání | 7–50 | AI-L2-02–04, 11, 13–14 |
| Co-NP, doplněk, UNSAT a TAUTOLOGY | 53–62 | AI-L2-05–07, 12, 15, 18 |
| QSAT₂, alternace kvantifikátorů a polynomiální hierarchie | 65–80 | AI-L2-08–09, 16–17 |
| Bezpodmínečné inkluze NP, PSPACE, EXPTIME | 68–84 | AI-L2-10 |

## Výsledek

- **18 nových otázek:** **12** uzavřených s více možnostmi a **6** otevřených.
- Obsahuje krátké důvody správnosti, odkazy na konkrétní stránky oficiální prezentace a opozici vůči častým chybným závěrům.
- U části s QSAT₂ je uvedeno odborné upozornění: nelze z přirozené složitosti ověřování vynášet nepodmíněný závěr, že QSAT₂ není v NP. Výrok z přednášky není všeobecně dokázaný.
- AI otázky se nacházejí pouze v `ai-lecture-2` a `ai-all`, historických 250 položek se nemění.
- Soubor: `scripts/ai-generated/lecture-02.js`.
