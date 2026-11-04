# AI-generated L4 — Stavový prostor, větve a hranice a lokální prohledávání

> **Pozor:** Autorské tréninkové otázky připravené umělou inteligencí podle **ANI-KOP04.pdf (2026, 63 stran)**. Nejedná se o autentické otázky z testů ani o potvrzený seznam, co bude vyučující zkoušet.

## Audit historického pokrytí

V původním testeru je k přednášce P4 tematicky přiřazeno **44 historických otázek: 28 Assessment + 16 Exam**. Převažují teoretické definice prostoru, strategií a stavových grafů a dále rozsáhlé modelovací úlohy. Obsahují mj. úlohy Minimum Bin Packing a Minimum Multiprocessor Scheduling a příklad Kernighan–Lin.

**Proč přidávat AI otázky:** ve stávajícím banku chybí systematické procvičení vlastností konkrétních operátorů a jejich inverzí, rozlišení grafu měst od grafu stavů, několik numerických kroků B&B (včetně rozdílu UB a LB) a rychlé rozpoznání toho, kdy lze bezpečně ořezat větev. Nové otázky se zaměřují na tyto aplikace místo opakování převzatých definic.

## Témata a nové otázky

| Téma | ANI-KOP04.pdf (fyzické stránky) | AI-generated ID |
|---|---|---|
| Formální stav a operátor, sousedé, stavový graf | 4–14 | AI-L4-01–03 |
| Souvislost, inverzní operátory, swap vs. add/remove, TSP 2-exchange | 16–28 | AI-L4-04–05, AI-L4-17 |
| State space vs. search space, úplná vs. částečná ohodnocení | 29–33 | AI-L4-06–07, AI-L4-18 |
| Complete/systematic/informed a OPEN/CLOSED, BFS/DFS/Best-first | 35–44 | AI-L4-08–10, AI-L4-20 |
| Zlomkový batoh, konkrétní bound a bezpečný ořez | 45–53 | AI-L4-11–13, AI-L4-19, AI-L4-21 |
| First Improvement, Best Only, Kernighan–Lin, lokální optima | 54–63 | AI-L4-14–16, AI-L4-22 |

## Statistika a metodika

- **22 nových otázek: 16 uzavřených s více možnostmi a 6 otevřených** se stručným vzorovým vysvětlením.
- Každá má **`aiGenerated: true`**, `aiNote`, oblast a odkazy na odpovídající stránky přednášky.
- V praktickém příkladu z ANI-KOP04 je přípustná celočíselná cena **235** a zlomková horní mez cca **251,24**. Je vysvětleno, že nerovnost LB<UB sama o sobě neprokazuje optimalitu nalezené konfigurace.
- Sada je dostupná přes `?set=ai-lecture-4` a je zahrnuta do `?set=ai-all`.
- **Žádné z 250 historických zadání ani jejich správných odpovědí nebylo upraveno.** AI otázky se nezapočítávají do `midterm`, `lecture-4`, `current`, `all` ani `archive`.
- Úlohy jsou založeny na skutečných tématech prezentace, nikoli na statisticky doložené pravděpodobnosti výskytu v testu.
