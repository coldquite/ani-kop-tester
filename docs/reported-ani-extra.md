# Další studentská sbírka ANI – rekonstrukce

Samostatná sada `report-ani-extra` je sestavena ze čtyř screenshotů předaných uživatelem 12. 11. 2026. Datum předání není považováno za datum testu. Zprávy obsahují studentské vzpomínky na otázky, nikoli ověřené oficiální znění nebo klíč. Každá položka uchovává původní útržek (`originalReport`), identifikátor, rekonstruované české zadání a zdůvodnění. Upřesnění jsou viditelná v poznámce k odpovědi.

## Úplné mapování

| Screenshot / zpráva | Zdrojová položka | ID report-ani-extra- | Typ |
|---|---|---|---|
| 1, 13:35 | P podmnožina EXPTIME | 01 | T/F, pravda |
| 1, 13:35 | NP podmnožina EXPTIME | 02 | T/F, pravda |
| 1, 13:35 | co-NP podmnožina EXPTIME | 03 | T/F, pravda |
| 1, 13:36 | Souvislý symetrický stavový prostor TSP | 04 | Otevřená |
| 1, 13:36 | Uzlové pokrytí, proměnné, důkaz NPO | 05 | Otevřená, více částí |
| 1, 13:36 | Dvě různé metody vyvrácení NPC | 06 | Otevřená |
| 2, 13:38 | „3 ano/ne otázky na tseitinovu transformaci a ILP“ | 09–11 | Souhrn, není další položkou |
| 3, 13:38 | Big-M a binární proměnné | 07 | T/F, pravda pro podmíněná omezení |
| 3, 13:38 | CNF je booleovská formule | 08 | T/F, pravda |
| 4, 13:43 | Tseitin používá pomocné proměnné | 09 | T/F, pravda |
| 4, 13:43 | Lineární převod na ekvisplnitelnou formuli | 10 | T/F, pravda po doplnění cílové CNF a povolení pomocných proměnných |
| 4, 13:43 | x+y≤10, max(y+x²), je to ILP? | 11 | T/F, nepravda kvůli x² |

Celkem **11 otázek: 3 otevřené a 8 T/F**. Závěrečné „dál si už moc nepamatuji“ neobsahuje otázku. Obecné „bylo hodně uzlové pokrytí“ neopravňuje domýšlet další neznámé otázky: konkrétní zaznamenané požadavky jsou sloučeny do otevřené úlohy 05. Tematické překryvy se staršími sadami jsou záměrně zachovány, aby novou sbírku šlo procvičit samostatně.

## Důležitá upřesnění

- Zahrnutí tříd vyjadřujeme pomocí ⊆. Pro P⊊EXPTIME je přísnost známa; u NP⊆EXPTIME ani co-NP⊆EXPTIME zde přísnost netvrdíme.
- TSP je na úplném grafu; transpozice permutace mají inverzi a generují souvislý stavový prostor. Neúplný graf může vyžadovat jinou definici stavů.
- NPO vyžaduje polynomiální popis, ověření přípustnosti a výpočet ceny, ne důkaz optimality.
- Vyvrácení NPC rozlišuje nečlenství v NP a neexistenci potřebné NP-těžkosti. Příslušnost do P obecně vyloučí NPC jen s předpokladem P≠NP; konstantní jazyk slouží jako nepodmíněný protipříklad těžkosti.
- Big-M je specifikováno jako kódování podmíněných omezení; stejnojmenná metoda inicializace simplexu není zaměňována s binárním přepínačem.
- U Tseitinova převodu je doplněna cílová CNF, pomocné proměnné a vynucení kořene. Lineární čas/velikost se uvádí ve standardním modelu práce se syntaktickými uzly a identifikátory; nezaměňuje se s bitovou délkou libovolných názvů proměnných. Ekvisplnitelnost není logická ekvivalence nad stejnou množinou proměnných.
- U ILP je rekonstruováno zadání se dvěma nezápornými celočíselnými proměnnými. Kvadratická účelová funkce není lineární, přestože omezení je lineární; případná reformulace je jiný zápis modelu.

Odborná terminologie odpovídá uživatelem dodaným prezentacím ANI-KOP01–05 (proměnné a typy úloh, třídy složitosti, redukce/NPO, stavový prostor, Tseitin/SAT). Vzorové odpovědi a doplněné předpoklady jsou vlastní studijní řešení, ne převzatý oficiální klíč.
