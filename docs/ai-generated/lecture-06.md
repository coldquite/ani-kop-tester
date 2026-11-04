# AI-generated P6 — ILP, MILP, CSP a MiniZinc

> Otázky navržené umělou inteligencí na základě **KOP06.pdf (ILP and CSP, 2026, 34 snímků)**. Nejsou převzaté z testu vyučujících. Soustředí se na porozumění, rozpoznávání vztahů a čtení krátkých hotových fragmentů — **bez požadavku na psaní kódu**.

## Historické otázky v testeru

Podle aktuálního mapování do P6 patří **2 historické položky**: A51 (asymptotická složitost některých metod) a E79 (lineární programování). Většina konkrétních nových témat (LP relaxace, Big-M, TSP/MTZ, MiniZinc, CSP propagace) v samostatném historickém P6 téměř chyběla.

## Nová otázková sada

| Téma | Zdrojové stránky | Nové úlohy |
|---|---|---|
| LP, ILP, MILP, binární ILP | 3–4 | AI-L6-01 |
| Oficiální batoh, LP relaxace a B&B | 5–8 | AI-L6-02–03, 06–07, 24 |
| Převod logických výrazů na 0/1 ILP | 7 | AI-L6-04–05 |
| Big-M a konkrétní vhodné M | 9 | AI-L6-08–09, 26 |
| TSP, podcykly, SEC, MTZ a cena 10 | 11–18 | AI-L6-10–14, 25 |
| CSP (X,D,C), přípustnost, COP | 21, 31 | AI-L6-15–16, 27 |
| MiniZinc: doména, forall, exists, sum, solve, implikace | 27–32 | AI-L6-17–20, 28 |
| Propagace CSP, MiniZinc / FlatZinc | 24–27, 33 | AI-L6-21–22, 29 |
| Porovnání SAT, SMT, ILP, CSP | 34 | AI-L6-23 |

## Výsledek

- **29 nových otázek:** **23** s možnostmi odpovědí, **6** otevřených vysvětlení.
- **Žádné samostatné psaní SMT-LIB / MiniZinc / ILP**; ukázky kódu jsou krátké a jejich úkolem je významu porozumět.
- Česky formulované odpovědi a konkrétní zdůvodnění v `aiNote`, u každé otázky reference na stránky.
- Oddělený název sady: `ai-lecture-6`. Souhrnná sada `ai-all` ji rovněž zahrnuje.
- V historickém banku je stále **250** původních otázek; nové se do historických sad nepromítají.
