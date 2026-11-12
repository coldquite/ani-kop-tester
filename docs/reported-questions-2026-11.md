# Rekonstrukce dvou studentských zpráv

Zdrojem je screenshot předaný uživatelem 12. 11. 2026: první zpráva má nadpis „12.11 – Hülle“, druhá uvádí „Otevřený otázky ze středy“ a „Nové či složitější T/F“. Screenshot není oficiální zadání ani klíč. Druhou sadu datujeme podle kontextu na středu 11. 11. 2026; nejde o datum přímo uvedené v útržku. Rozdělení sad respektuje dvě zdrojové zprávy.

Každá položka uchovává `id`, `originalReport` a `reconstructed: true`. Viditelná `note` vysvětluje změny a důvody odpovědi. Otevřené otázky používají vzorovou odpověď, uzavřené mají možnosti Pravda/Nepravda. Původní otázky se nemění.

## Sada Hülle: 14 položek

| ID (report-hulle-) | Zaznamenané téma | Rekonstrukce / poznámka |
|---|---|---|
| 01 | Výstupní a konfigurační proměnné | Konkrétní optimální řešení; rozdíl reprezentace a pomocné proměnné. |
| 02 | Sigma 2 a PSPACE | Σ₂ᵖ ⊆ PSPACE; nikoli tvrzení o přísnosti. |
| 03 | NPC a sigma2-C | Σ₂ᵖ-úplnost se neodvozuje z členství; bez nekolapsu PH jde o otevřený vztah. |
| 04 | Každá CNF je booleovská formule | Pravda pro výrokovou CNF. |
| 05 | Dva postupy pro ∉P | Podmíněná NP-těžkost vs. nepodmíněná dolní mez. |
| 06 | Big-M a booleovské proměnné | Binární přepínač podmíněného omezení; odlišeno od simplexové Big-M metody. |
| 07 | Karp v exponenciálním čase | Karp musí být polynomiální; rozlišena volná horní mez a nutná složitost. |
| 08 | Cokoliv přes Kuka na NPC | Ne; explicitní protipříklad nerozhodnutelného problému. |
| 09 | Libovolný NP na libovolný NPC | Ano, již Karpovou redukcí. |
| 10 | ANO-certifikáty co-NP | Definice zaručuje NE-certifikáty; obecná ANO-certifikace souvisí s NP=co-NP. |
| 11 | Symetrický prostor obdélníkového pokrytí | Výslovně definované obdélníky, částečné stavy, inverzní operátory, souvislost a cena. |
| 12 | Rozhodovací TSP, NPH a NPO | Opraveno směšování typů: rozhodovací NPC, optimalizační NPO a NPH. |
| 13 | BFS systematická strategie | Při evidenci objevených stavů nad konečným grafem. |
| 14 | Model teorie | Jedna interpretace splňuje všechny formule teorie. |

## Středeční sada: 9 položek

| ID (report-wednesday-) | Zaznamenané téma | Rekonstrukce / poznámka |
|---|---|---|
| 01 | Processor scheduling | Stejné procesory, bez precedencí, makespan; přesun úlohy a jeho inverze. |
| 02 | Věci a kontejnery v NPO | Bin Packing; polynomiální délka konfigurace, ověření a cena v bitovém modelu. |
| 03 | NPC uzlové pokrytí | Prahová otázka s ≤K vrcholy; doplněk nezávislé množiny. |
| 04 | Výstupní proměnné | Záměrně zachován překryv s první sadou. |
| 05 | Jak dokázat ∉NPC | Vyvrátit NP nebo těžkost; B∈P obecně stačí až za předpokladu P≠NP. |
| 06 | Big-M pro podmíněná omezení | Pravda, příklad s minimální bezpečnou konstantou 7. |
| 07 | CNF bez nových proměnných | Ponecháno jako otevřená otázka: zdroj říká ekvisplnitelná, nikoli ekvivalentní. Exponenciální dolní mez pro ekvivalenci sama nevyvrací libovolnou ekvisplnitelnou transformaci. |
| 08 | „něco s Mají všechny formule stejný model“ | Nízká jistota; viditelně označená tréninková varianta o stejných množinách modelů. Není vydávána za původní přesné znění. |
| 09 | NP přes Kuka na libovolné NPO | Doplněn P≠NP pro jednoznačné T/F; NPO obsahuje snadné úlohy, nestačí zaměnit NPO za NPH. |

Obecný dovětek „Zbytek kombinace podmnožin, redukce či vlastností tříd“ neidentifikuje žádný konkrétní další výrok; další otázky za něj nevymýšlíme. Celkem 23 položek, 22 odlišných témat, 12 otevřených a 11 T/F. Dvě vágní nebo chybně typované formulace byly převedeny na otevřené otázky, aby nevznikl zavádějící binární klíč.

## Odborná opora

Vzorové odpovědi jsou samostatně vypracovaná studijní řešení. Pro kontrolu terminologie byly použity uživatelem dodané oficiální prezentace ANI-KOP01 (vstup, konfigurace, výstup a varianty úloh), ANI-KOP02 (NP, co-NP, polynomiální hierarchie a prostorové třídy), ANI-KOP03 (many-one a Cookovy redukce, NP-úplnost a NPO), ANI-KOP04 (úplné a systematické strategie) a ANI-KOP05 (CNF, Tseitinova transformace a model teorie). Příklady a upřesnění ve zdejších odpovědích nejsou citacemi studentského klíče.

Pozor na starou banku: její odpovědi nebyly automaticky převzaty. Např. obecné NPH ⊆ PSPACE je chybné, zatímco zdejší Σ₂ᵖ ⊆ PSPACE platí. Neznámé separace tříd nesmějí být vydávány za dokázané jen na základě očekávaného nekolapsu hierarchie.
