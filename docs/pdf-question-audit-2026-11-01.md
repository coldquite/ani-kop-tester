# Kontrola PDF „NI-KOP uzavřené otázky“ vůči testeru (1. 11. 2026)

> Zdroj: uživatelem dodaný **NI-KOP uzavřené otázky.pdf**, 36 PDF stran. Materiál obsahuje starší testy a odpovědi, včetně neověřených a neúplných tvrzení. **Není to oficiální garantovaný seznam otázek ANI-KOP 2026.** 

## Postup

- Původní bank: Assessment 108, Exam 94, dohromady **202** otázek; správné odpovědi původních položek zůstaly beze změny.
- Porovnání podle tématu a obsahu se stávajícím bankem; pokud již existuje stejná úloha v jiné formulaci nebo jako část vícenásobné otázky, nebyla vytvořena kopie.
- Nové varianty vybrány podle zřetelnosti zadání, samostatnosti a dohledatelného klíče v PDF. **Nejde o stoprocentní doslovnou inventuru všech řádků dokumentu**, protože řada variant je neúplných, opakovaných nebo má neověřený klíč.
- Tučně vyznačené odpovědi použity jako historický klíč; matematicky objasněné varianty (např. O(n²), 2^n) nesou tuto skutečnost výslovně v poznámce.
- **Tabu search:** na s. 11 je uvedeno „Tabu – už v predmete nie je“. Nezařazovat do průběžného testu ani druhé části 2026.

## Výsledek

| Ukazatel | Počet |
|---|---:|
| Strany PDF | 36 |
| Otázky testeru před změnou | 202 |
| Přidané unikátní otázky | **46** |
| Dynamické programování (P12) | 19 |
| Globální metody (P12) | 6 |
| Kernighan–Lin (P4) | 1 |
| CSP (P4) | 1 |
| Tabu search (pouze archiv) | 19 |
| Nové otázky v současné výuce 2026 | 27 |
| Nové otázky pouze v archivu | 19 |
| Otázky po změně celkem | **248** |

## Kontrola podle částí a stran

| Strany | Obsah | Stav |
|---|---|---|
| 1–4 | 2023: diskrétní rozmístění, obdélníkové pokrytí, TSP a GA | Především pokryto Exam 1, 9–15; přečteno |
| 5–10 | Dynamické programování, klíče paměti, počet podinstancí, pseudopolynomiální algoritmy | Doplněno 19 samostatných variant do P12; neurčitá zadání oddělena |
| 11–14 | Tabu search (zdroj říká, že již není v předmětu) | Doplněno 19 unikátních variant do archivu; opakované sloučeny |
| 15–18 | GA, evoluční strategie, Fast Messy GA | Pokryto převážně Exam 11–42 a 66–91 |
| 19 | Relaxace lokálních heuristik | Pokryto Exam 43 |
| 20–21 | Simulované ochlazování | Pokryto Exam 44–56 |
| 22–24 | Experimentální hodnocení randomizovaných algoritmů | Pokryto Exam 57–64; některé alternativní formulace |
| 25–26 | Globální metody a rekurzivní dekompozice | Doplněno 6 úloh do P12 |
| 26–32 | Ostatní otázky, lokální heuristiky, GA, evoluce, SAT/NP, programování | Především pokryto Assessment/Exam, přidány Kernighan–Lin a CSP |
| 33–36 | FIKI a otázky 2016 | Starší opakované varianty zejména DP, Tabu, GA a globální metody; neúplné formulace nebyly přidány |

## Přesný seznam každé přidané otázky

| ID | Assessment | Strana PDF | Výuková kategorie | Obsah |
|---|---:|---:|---|---|
| DP-01 | 109 | 5 | P12 | Dynamické programování může: |
| DP-02 | 110 | 5 | P12 | DP řeší grafový problém: podinstance se vybírají podle (p,q), kde p je uzel, q hrana; musí se spočítat všechny. Dekompozice a komp |
| DP-03 | 111 | 5 | P12 | DP pro graf: klíč (p,q), index uzlu a hrany, konstantní dekompozice a kompozice, potřeba spočítat všechny podinstance. Co platí? |
| DP-04 | 112 | 6 | P12 | DP používá jako klíč k-tici binárních proměnných, kde k=log₂ N a N je délka vstupu. Každá podinstance se řeší jednou, dekompozice  |
| DP-05 | 113 | 6 | P12 | DP používá klíč tvořený N binárními proměnnými, kde N je velikost vstupu, a může potřebovat všechny podinstance. Jak se mění počet |
| DP-06 | 114 | 6 | P12 | DP používá klíč (p,q), kde p,q∈{0,…,n}; každá podinstance se zpracuje jednou s konstantní prací. Jaká je složitost vyhodnocení cel |
| DP-07 | 115 | 7 | P12 | DP na permutačním problému používá jako klíč libovolnou podmnožinu n prvků. Existují instance, kde se vypočte všech 2^n podinstanc |
| DP-08 | 116 | 7 | P12 | DP používá jako klíč libovolnou podmnožinu n prvků a vypočítá všechny podinstance s prací Θ(n) na podinstanci. Co lze tvrdit? |
| DP-09 | 117 | 7 | P12 | DP vybírá optimální podmnožinu n prvků a musí vypočítat výsledky pro všechny podmnožiny. Co platí o počtu podinstancí? |
| DP-10 | 118 | 8 | P12 | DP pro graf má podinstance označené libovolnými podmnožinami n uzlů a v některých instancích musí vypočítat všechny. Jaká metoda t |
| DP-11 | 119 | 8 | P12 | DP pro graf zpracovává všechny podmnožiny n uzlů, a práci potřebnou pro každou podinstanci lze provést v O(1). Jaká je celková čas |
| DP-12 | 120 | 8 | P12 | Která tvrzení o dynamickém programování jsou správná? |
| DP-13 | 121 | 8 | P12 | Dynamické programování obecně: |
| DP-14 | 122 | 8 | P12 | Pro některé problémy je dynamické programování: |
| DP-15 | 123 | 9 | P12 | DP musí vyhodnotit všechny podmnožiny n-prvkové množiny (bez možnosti obejít tento krok). Co z toho plyne? |
| DP-16 | 124 | 9 | P12 | DP pro graf používá klíč (p,q), p je index uzlu a q index hrany. Kolik různých klíčů může být při n uzlech? |
| DP-17 | 125 | 9 | P12 | DP používá podinstance tvořené prvními m uzly grafu na n vrcholech; pro každý stupeň má kompozice i dekompozice dolní mez Ω(n). Co |
| DP-18 | 126 | 9 | P12 | DP řeší pro každé n pouze Θ(log P) podinstancí s konstantní kompozicí a dekompozicí. Která časová mez vzhledem k délce binárního z |
| DP-19 | 127 | 9 | P12 | DP postupně zpracovává všech m hran grafu; každá hrana má celočíselnou váhu do M a práce na jednom kroku je Θ(log M). Co platí? |
| GLOB-01 | 128 | 25 | P12 | Globální rekurzivní metoda na grafu rozloží instanci o n uzlech na dvě podinstance velikosti n/2; dekompozice je O(n), kompozice O |
| GLOB-02 | 129 | 25 | P12 | Globální metoda s přesnou dekompozicí vytvoří z velikosti n dvě podinstance velikosti n−1, kompozice i dekompozice mají konstantní |
| GLOB-03 | 130 | 25 | P12 | Globální metoda rozděluje instanci grafu a celého čísla M na poloviny uzlů, cena dekompozice O(n·log M). Která tvrzení platí vzhle |
| GLOB-04 | 131 | 25 | P12 | Jaká tvrzení o globálních metodách a dekompozici platí? |
| GLOB-05 | 132 | 26 | P12 | Co lze obecně tvrdit o globálních metodách? |
| GLOB-06 | 133 | 26 | P12 | Pro globální metody používající čistou dekompozici platí: |
| TABU-01 | 134 | 11 | Archiv | Tabu search: k optimalizačnímu kritériu přidáme pokutu za tah, jehož Hammingova vzdálenost překročí práh. Jde o: |
| TABU-02 | 135 | 11 | Archiv | Tabu search: zakázaný tah je přesto proveden, jestliže využívá velmi zřídka navštívené uzly. Jakou roli opatření plní? |
| TABU-03 | 136 | 11 | Archiv | Tabu search: překonáme tabu, když kandidátní cesta dosud vůbec nebyla navštívena, a jinak penalizujeme často používané uzly. Jaké  |
| TABU-04 | 137 | 11 | Archiv | Tabu search: tah dostane pokutu, pokud četnost použití jeho uzlů převyšuje průměr. Opatření podporuje: |
| TABU-05 | 138 | 11 | Archiv | Tabu search: při bitu s vysokou dosavadní četností 1 je dovoleno tabu porušit a bit znovu nastavit na 1. Jde o: |
| TABU-06 | 139 | 12 | Archiv | Tabu search: tabu lze porušit nastavením vzácného bitu do 1 (četnost <0,3) nebo častého bitu do 0 (četnost >0,7). Opatření podporu |
| TABU-07 | 140 | 12 | Archiv | Tabu search s binárním vektorem: tahy s Hammingovou vzdáleností větší než K jsou tabu. Chceme zvýšit diverzifikaci. Jak změnit K? |
| TABU-08 | 141 | 12 | Archiv | Tabu search: prolomení tabu povolíme, pokud četnost uzlu je menší než K procent průměru. Chceme zvýšit intenzifikaci. Jak změnit K |
| TABU-09 | 142 | 12 | Archiv | Tabu search konverguje pomalu, ale dává kvalitní výsledky. Jaké opatření je podle staršího testu vhodné? |
| TABU-10 | 143 | 12 | Archiv | Tabu search často uvázne v lokálním optimu. Které změny mohou pomoci diverzifikaci? |
| TABU-11 | 144 | 12 | Archiv | Tabu search pro TSP: tabu zakážeme často použité hrany, ale povolíme tah, pokud zlepšení kritéria překročí práh. Jde o: |
| TABU-12 | 145 | 13 | Archiv | Tabu search: tah je zakázán při změně více než poloviny bitů, ale povolí se, pokud některý bit získá dosud nevyzkoušenou hodnotu.  |
| TABU-13 | 146 | 13 | Archiv | Potřebujeme zvýšit diverzifikaci v tabu prohledávání. Které změny jsou ve starším testu doporučeny? |
| TABU-14 | 147 | 13 | Archiv | Potřebujeme zvýšit intenzifikaci v tabu prohledávání. Které změny jsou ve starším testu doporučeny? |
| TABU-15 | 148 | 13 | Archiv | Tabu prohledávání často uvázne v lokálním optimu. Jaké postupy mohou pomoci? |
| TABU-16 | 149 | 13 | Archiv | Tabu search pro TSP: jako tabu atribut použijeme jen výslednou dvojici hran místo celé záměny. Co to může způsobit? |
| TABU-17 | 150 | 13 | Archiv | Jaká strategie prohledávání okolí je typická pro tabu search podle původního testu? |
| TABU-18 | 151 | 14 | Archiv | K čemu lze u tabu search využít dlouhodobou paměť? |
| TABU-19 | 152 | 14 | Archiv | Které účinky může mít pravidlo, podle kterého je tah tabu? |
| KERN-01 | 153 | 30 | P4 | Metoda Kernighan–Lin má následující vlastnosti: |
| CSP-01 | 154 | 32 | P4 | Instance problému splnění podmínek má n konfiguračních proměnných a každá má d hodnot. Jak velký je prostor úplných ohodnocení a p |

## Nepřidávané a potenciálně problematické varianty

- S. 5–10: některé starší otázky na DP neuvádějí dostatek informací pro jednoznačnou složitost (např. podinstance z podgrafů do n/2 uzlů bez přesné specifikace toho, které je nutné spočítat). Některé odpovědi v materiálu jsou přitom vzájemně nesourodé.
- S. 6–7: otázka o grafu a celočíselném parametru K obsahuje dokonce znak **„?“ místo počtu hran**; tato varianta není reprodukovatelná.
- S. 11–14: otázky Tabu byly přidány jen jako historické procvičování. Jejich původní označení správnosti může odrážet specifickou konvenci kurzu.
- S. 25: přesná a čistá dekompozice ani globální rekurze samy o sobě automaticky negarantují polynomialitu. Zadání bez podmínek pro memoizaci není vhodné převádět do bezpodmínečného klíče.
- S. 33–36: staré varianty, které jen obměňují GA/SA/DP otázky, nemají smysl duplikovat. Otázka s podgrafy o log₂(n) vrcholech vyžaduje výslovně určit počet potřebných podinstancí; není automaticky polynomiální.
- Odpovědi vyznačené v původním PDF tučně jsou **zdrojové tvrzení**, nikoli nezávislé oficiální potvrzení. Případné zpřesnění je popsáno přímo v poznámce dané otázky.

## Změněné soubory

- `scripts/questions.js` – nové otázky s uvedením strany PDF.
- `scripts/question-sets.js` – přidané indexy do P12/P4; Tabu ponecháno mimo přednášky.
- `README.md` – dokumentace zdroje a odkazu na tento audit.
- `docs/pdf-question-audit-2026-11-01.md` – tento přehled.

Výsledné otázky jsou česky. U nejasných odpovědí a rozdílů mezi starým testem a matematickým výpočtem byla uvedena poznámka; staré banky zůstaly zachovány.