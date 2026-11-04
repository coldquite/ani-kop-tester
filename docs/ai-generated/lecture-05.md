# AI-generated L5 — SAT, Tseitinova transformace a SMT

> **Tréninkové otázky sestavené umělou inteligencí podle ANI-KOP05.pdf (2026). Nejde o autentické otázky vyučujícího a nelze z nich odvodit jistotu, co bude v testu.** Důraz je na čtení hotových výrazů a porozumění, ne na psaní SMT-LIB.

## Pokrytí existujícím testerem

L5 je v historických sadách zastoupena pouze **5 otázkami**: A17 (formulace SAT), A24 (SAT∈NP a certifikát), A78 (DNF-SAT), A79 (CNF-UNSAT), A80 (CNF-SAT). **Žádný z těchto pěti přímo nezkouší Tseitinovu transformaci, interpretace logiky prvního řádu, SMT, QF_NIA, CDCL(T), UF, Int, BitVec, OMT ani čtení SMT-LIB příkladů.**

## Matice mezer podle oficiální prezentace

| Oblast | Strany ANI-KOP05 | Návrhy otázek |
|---|---|---|
| SAT × SMT a omezení čisté booleovské abstrakce | 3, 7, 14 | AI-L5-01, 11, 12, 19 |
| Tseitin: definice, ekvisplnitelnost, klauzule, kořen | 4–6 | AI-L5-02–05, 20 |
| Model, interpretace a teorie prvního řádu | 8–13 | AI-L5-06 |
| Oficiální úloha věků, QF_NIA, čtení SMT-LIB | 15–19 | AI-L5-07–10, 21 |
| CDCL(T), konflikty, UNSAT core | 20–23 | AI-L5-11, 12, 16, 19 |
| UF, Int vs. BV, signed/unsigned, důkaz protipříkladem | 24–27 | AI-L5-13–15, 18 |
| OMT, klasifikace logik, výsledky sat/unsat/unknown | 28–30 | AI-L5-17, 18, 22 |

## Výsledek

- **22 nezávislých otázek:** **18** uzavřených s několika správnými možnostmi a **4** otevřené krátké vysvětlovací.
- Psaní SMT-LIB **není požadováno**. Několik úloh žádá **interpretaci předloženého jednorádkového fragmentu**.
- V každé otázce jsou vysvětlení `aiNote`, stránky oficiální přednášky a zvláštní označení `aiGenerated: true`.
- Historický bank **250** otázek nedotčen; tyto 22 otázek jsou pouze v `ai-lecture-5` a `ai-all`.
- Detailní příklady: Tseitin 10 klauzulí, trojice věků (32,18,50), teoretický konflikt x≥4 ∧ x<3, osmibitové přetečení, rozlišení NIA a LIA.
