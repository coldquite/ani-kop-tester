# Audit rozsahu prvního testu ANI-KOP 2026 (9. 11. 2026)

## Zdroje a kritérium
Srovnáno se skutečnými soubory **ANI-KOP00.pdf až ANI-KOP05.pdf** (přednášky 2026) a s existujícím tematickým rozřazením P1–P6, v němž je P6 věnována ILP/CSP. Otázky jsou **historické nebo tréninkové**: přiřazení ke studijní sadě není potvrzeným zadáním zápočtového testu.

**Rozhodující pravidlo:** do sady „Průběžný test · P1–P6“ zůstávají jen otázky na přímo probírané pojmy nebo na aplikaci těchto pojmů na konkrétní problém. Problematiku z dalších přednášek není vhodné přimíchávat jen kvůli souvisejícímu názvu.

## Výsledek
- Původní sada P1–P6: **109 položek**.
- Po úpravě: **98 položek**.
- **11 položek vyřazeno z prvního testu**, žádná však nebyla fyzicky smazána z originální databáze.
- Z toho **5 přeřazeno do pozdějších přednášek** (P8/P9) a **6 odloženo do archivu** pro nejasnost, zavádějící klíč nebo nepřítomnost ve výuce.
- **2 položky pouze přesunuty mezi P1–P6**: TSP NPC z P1 na P3; počáteční stav konstruktivního algoritmu z P1 na P4.
- P1: 7; P2: 14; P3: 35; P4: 35; P5: 5; P6: 2. Starší a nové sady, původní otázky i 15 samostatných PDF doplňků jsou zachovány.

## Konkrétní zásahy

| Zdrojové ID | Původně | Nově | Důvod |
|---|---|---|---|
| A16 | P1 | P3 | NP-úplná verze TSP spadá k NP-úplnosti a redukcím |
| A42 | P1 | P4 | Počáteční stav algoritmu patří do tématu prohledávání prostoru |
| A88 | P3 | archiv | Vzorová odpověď zaměňuje polynomiální ověření dané množiny a obtížnost rozhodovacího Vertex Cover |
| A71 | P4 | P8 | Experimentální diagnostika podle náhodných restartů |
| A77 | P4 | archiv | Bez parametrů operátorů nelze obecně tvrdit exponenciální růst k-okolí |
| A87 | P4 | archiv | Stejný problém; neupřesněné „pravidelné“ k-okolí |
| E14 | P4 | P9 | Jedna ze správných odpovědí explicitně vyžaduje simulated annealing |
| E43 | P4 | archiv | Parametrická penalizace/relaxace konfigurací není součástí ANI-KOP04 |
| E65 | P4 | archiv | Stejný výsledek restartů nedokazuje, že algoritmus neskončil v lokálním minimu |
| E67 | P4 | archiv | Nepodložená obecná závislost růstu k-okolí |
| E70 | P4 | P8 | Experimentální diagnostika náhodných restartů |
| E78 | P4 | P8 | Totéž: kvalita výstupů po restartech |
| E84 | P4 | P8 | Iterativní síla je hodnocena experimentálně |

**A44:** ponecháno v P4 (iterativní heuristiky jsou v ANI-KOP04), ale příklad „simulované ochlazování“ byl nahrazen metodami skutečně vysvětlovanými v této přednášce: First Improvement, Best Only a Kernighan–Lin.

## Co vědomě zůstalo
- **B&B, úplné/systematické strategie, OPEN/CLOSED, First Improvement, Best Only, Kernighan–Lin, lokální optimum**: přímo v ANI-KOP04.
- Návrhy stavových prostorů nad **TSP, batohem, SAT, robotem, bin packing a procesorovým plánem**: jde o aplikaci obecné definice stavového prostoru, bez požadavku na algoritmy z pozdějších přednášek.
- Základy **P, NP, co-NP, polynomiální hierarchie, NPO, NP-úplnosti, Karpových a Cookových redukcí**: přednášky ANI-KOP02–03.
- **CNF/SAT a rozhodovací problémy**: ANI-KOP02–03 a související ANI-KOP05.
- **P6 ILP/CSP** zůstává v existujícím rozřazení beze změny; k dispozici zde není stejnojmenná nová příloha ANI-KOP06, proto nebyly nově vymýšleny hranice P6.

## Co tento audit netvrdí
Nejde o záruku, že ponechané úlohy padnou v testu, ani o formální ověření správnosti všech historických klíčů. Při čištění nebyla měněna žádná původní odpověď kromě A44. Problematičtější staré otázky zůstávají dostupné v archivu, aby bylo možné se k nim případně vrátit.
