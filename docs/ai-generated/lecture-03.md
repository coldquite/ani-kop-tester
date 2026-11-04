# AI-generated L3 — NP-těžkost, NP-úplnost a redukce

> Autorské návrhy otázek na základě oficiální ANI-KOP03.pdf (2026). **Nejde o historická ani předpovězená autentická zadání.**

## Reálné pokrytí existujícím testerem

Tematické zařazení P3 mělo před rozšířením **35 historických otázek** (množství formulací NPC/NPH, NPO a konfigurace optimalizačních úloh, CLIQUE, Karpova a Turingova redukce). Přímé výpočetní aplikace oficiálních redukcí z nových snímků jsou zastoupené mnohem méně.

## Matice témat a nových otázek

| Téma | Strany ANI-KOP03.pdf | Co je zde doplněno | Otázky |
|---|---|---|---|
| Směr Karpovy redukce a tranzitivita | 11–15, 21 | Rozpoznávání správného tvrzení a negativních důsledků | AI-L3-01, 02, 15 |
| Kompletní redukce HC → TSP | 16–20 | Konstrukce cen 1/2, práh n, důkaz obou směrů | AI-L3-03, 04, 13 |
| SAT → Independent Set | 33–48 | Konkrétní instance s 3 klauzulemi, graf se 6 vrcholy, výběr svědků | AI-L3-05, 06, 14 |
| NP-hard, NP-complete a co-NP-completeness | 23–32 | Důsledky definic a komplementární redukce | AI-L3-07, 08, 16, 17 |
| NPI a PO/NPO | 49–58 | Zařazení tříd bez neplatného 'neznáme řešení ⇒ NPI' | AI-L3-09, 10 |
| Cook reduction a TSP decision → optimization | 60–76 | Opakované dotazy a bitová délka prahových cen | AI-L3-11, 12, 18 |

## Výsledek a jistota

- **18 nových samostatných úloh:** **12** vícevolbových a **6** otevřených.
- Odpovědi vycházejí z výše uvedených důkazů; každá položka má vlastní vysvětlení a stránkový odkaz.
- AI návrhy nesou explicitní označení a jsou pouze v samostatných sadách `ai-lecture-3` a `ai-all`.
- Největší nový přínos představují praktické konstrukce a důkazy **HC ≤ₚ TSP** a **SAT ≤ₚ IS**. Z toho neplyne tvrzení o pravděpodobnosti výskytu v testu.
