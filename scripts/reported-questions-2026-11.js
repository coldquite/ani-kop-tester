// Rekonstrukce dvou studentských zpráv, nikoli oficiální zadání nebo klíč.
(function (global) {
    "use strict";

    function provenance(id, original, explanation, clarification) {
        return {
            id: id,
            originalReport: original,
            reconstructed: true,
            note: "<b>Rekonstrukce ze studentské zprávy.</b> Formulace a odpověď byly odborně doplněny; nejde o ověřený oficiální klíč. " +
                (clarification ? "<b>Upřesnění:</b> " + clarification + "<br>" : "") +
                "<b>Vysvětlení:</b> " + explanation
        };
    }

    function open(id, original, question, answer, clarification) {
        var item = provenance(id, original, "Vzorová odpověď je uvedena níže.", clarification);
        item.question = question;
        item.answer = answer;
        return item;
    }

    function tf(id, original, question, value, explanation, clarification) {
        var item = provenance(id, original, explanation, clarification);
        item.question = question;
        item.answers = { 1: "Pravda", 2: "Nepravda" };
        item.correct = { 1: value ? 1 : 0, 2: value ? 0 : 1 };
        return item;
    }

    var hulle = [
        open("report-hulle-01",
            "Co jsou vystupni promenne konstruktivniho optimalizacniho problemu a kdy/jak se lisi od konfigracnich promennych?",
            "Co jsou výstupní proměnné konstruktivního optimalizačního problému? Jak souvisejí s konfiguračními proměnnými a kdy se jejich reprezentace může lišit?",
            "Výstupní proměnné popisují požadovaný výsledek: konkrétní optimální přípustné řešení, například nejkratší okruh TSP. Konfigurační proměnné popisují kandidáta, nad nímž kontrolujeme omezení a počítáme kritérium. U konstruktivní úlohy mohou být totožné, např. permutace měst. Mohou se však lišit reprezentací: interně používáme bity hran x_ij a pomocná pořadí u_i, zatímco vracíme seznam měst okruhu. Z konfigurace musí jít požadovaný výstup získat. Samotná optimální cena je výstupem vyhodnocovací varianty, ANO/NE výstupem rozhodovací varianty."),
        tf("report-hulle-02", "Je sigma 2 podmnozinou PSPACE?",
            "Platí známé zahrnutí Σ₂ᵖ ⊆ PSPACE?", true,
            "Ano. Pro polynomiálně dlouhé řetězce lze vyhodnotit ∃u ∀v R(x,u,v) postupným procházením u a v, přičemž si ukládáme jen aktuální kandidáty a pracovní prostor polynomiálního predikátu R. Čas může být exponenciální, prostor zůstává polynomiální. Obecně PH ⊆ PSPACE. Přísnost tohoto zahrnutí není známa.",
            "Slovo podmnožina vykládáme jako ⊆, nikoli jako prokázané vlastní zahrnutí ⊊."),
        open("report-hulle-03", "je NPC podmnozinou sigma2-C?",
            "Je každý NP-úplný problém také Σ₂ᵖ-úplný? Co lze tvrdit bez předpokladu o kolapsu polynomiální hierarchie?",
            "Bez dalšího předpokladu to není známo. Každý NP-úplný jazyk je v NP ⊆ Σ₂ᵖ, ale příslušnost do Σ₂ᵖ neznamená Σ₂ᵖ-úplnost. Kdyby byl některý NP-úplný jazyk zároveň Σ₂ᵖ-úplný vůči polynomiálním many-one redukcím, každý jazyk ze Σ₂ᵖ by se redukoval na jazyk v NP, tedy Σ₂ᵖ ⊆ NP. Dostali bychom Σ₂ᵖ = NP a kolaps PH na NP. Za předpokladu nekolapsu tedy nikoli. Samotný předpoklad P ≠ NP k vyloučení tohoto kolapsu nestačí.",
            "Zkratku sigma2-C interpretujeme jako třídu Σ₂ᵖ-úplných problémů. Původní zápis neobsahoval předpoklad nekolapsu PH."),
        tf("report-hulle-04", "je kazda CNF boolovska formule?",
            "Každá formule ve výrokové konjunktivní normální formě (CNF) je booleovská formule.", true,
            "CNF je speciální syntaktický tvar booleovské formule: konjunkce klauzulí, přičemž klauzule je disjunkce literálů. Např. (a ∨ ¬b) ∧ (b ∨ c). Tvrzení nic neříká o velikosti převodu opačným směrem."),
        open("report-hulle-05", "napis 2 postupy jak dokazat ze problem neni z P",
            "Uveďte dva principiálně odlišné způsoby, jak dokázat, že rozhodovací problém nepatří do P. Rozlište podmíněný a nepodmíněný důkaz.",
            "1. Podmíněně: za předpokladu P ≠ NP prokážeme NP-těžkost redukcí známého NP-úplného problému A na náš problém B. Kdyby B ∈ P, pak A ∈ P a následně P = NP.\n2. Nepodmíněně: prokážeme superpolynomiální dolní mez pro všechny deterministické algoritmy řešící B v příslušném výpočetním modelu; lze také využít známé oddělení časových tříd a vhodnou redukci z prokazatelně těžšího jazyka.\nExponenciální běh jednoho algoritmu ani neexistence známého polynomiálního algoritmu nejsou důkazem B ∉ P."),
        tf("report-hulle-06", "pouziva Big-M boolovske promenne?",
            "Při standardním Big-M kódování podmíněného omezení v MILP může binární proměnná y ∈ {0,1} sloužit jako logický přepínač.", true,
            "Např. y = 1 ⇒ aᵀx ≤ b zapíšeme aᵀx ≤ b + M(1−y). Pro y=1 je omezení aktivní, pro y=0 je při vhodně odvozeném M uvolněné. Jde o binární celočíselnou proměnnou reprezentující pravdivost; ostatní proměnné nemusí být binární.",
            "Míníme Big-M pro podmíněná omezení, nikoli jinou metodu stejného jména používanou při inicializaci simplexu."),
        tf("report-hulle-07", "lze pomoci karpa redukovat neco na neco v exp case?",
            "Transformace s exponenciálním časem výpočtu je již z tohoto důvodu přípustnou Karpovou redukcí.", false,
            "Karpova redukce A ≤ₚ B musí být vyčíslitelná v polynomiálním čase a zachovávat odpověď ANO/NE. Transformace vyžadující exponenciální čas tuto definici nesplňuje. Polynomiální algoritmus může mít také volnou exponenciální horní mez; rozhoduje existence polynomiální meze, nikoli to, jak volně ji zapíšeme.",
            "Exp čas vykládáme jako nutnost superpolynomiálního času, ne jako pouhou volnou horní mez O(2^n)."),
        tf("report-hulle-08", "lze pomoci cooka redukovat cokoliv na NPC?",
            "Každý rozhodovací problém, včetně nerozhodnutelných problémů, lze polynomiální Cookovou redukcí převést na libovolný NP-úplný problém.", false,
            "Výraz cokoliv je příliš silný. Například problém zastavení nelze takto redukovat na SAT: SAT je rozhodnutelný a nahrazením orákulových dotazů rozhodovačem SAT bychom získali rozhodovač problému zastavení. Všechny problémy z NP naopak na každý NP-úplný problém redukovat lze.",
            "Původní cokoliv bylo zpřesněno na libovolný rozhodovací problém, aby nešlo o neurčité srovnání typů výstupu."),
        tf("report-hulle-09", "lze pomoci cooka redukovat libovolny NP na libovolny NPC?",
            "Každý problém A ∈ NP lze polynomiální Cookovou redukcí převést na každý NP-úplný problém B.", true,
            "Z NP-úplnosti B plyne Karpova redukce A ≤ₚ B pro každé A ∈ NP. Každá Karpova redukce je zvláštním případem Cookovy redukce s jediným dotazem na orákulum."),
        open("report-hulle-10", "lze pro Co-NP overit v poly. case na DTM Ano-instance a certifikat?",
            "Zaručuje příslušnost L ∈ co-NP polynomiálně dlouhý certifikát ANO-instance ověřitelný v polynomiálním čase na deterministickém Turingově stroji?",
            "Nezaručuje. Definice co-NP zajišťuje polynomiální certifikaci NE-instancí původního jazyka L, protože jeho doplněk patří do NP. Pro některé co-NP problémy, např. pro problémy v P, lze certifikovat i ANO-instance. Existence takových certifikátů pro všechny co-NP problémy je ekvivalentní NP = co-NP a není známa. Nelze proto bez dalšího tvrdit, že ANO-certifikáty nikdy neexistují. U UNSAT jsou snadno ověřitelné NE-instance doložené splňujícím ohodnocením formule."),
        open("report-hulle-11", "popis symetricky stavovy (stavy, operatory, konfig. promenne) prostor pro ulohu min pocet obdelniku pokryvajici binarni matici",
            "Pro minimální obdélníkové pokrytí binární matice A rozměru m × n navrhněte konfigurační proměnné, stavy a operátory tak, aby stavový prostor byl souvislý a symetrický. Pokrýváme právě jedničky; překryvy jsou povolené.",
            "Přípustný obdélník je zde R × C, kde R je neprázdná podmnožina řádků, C neprázdná podmnožina sloupců a A_ij=1 pro každé i∈R,j∈C. Zvolíme K=mn slotů. V každém slotu je buď prázdno, nebo jeden takový obdélník, reprezentovaný dvěma bitovými vektory délek m a n. To jsou konfigurační proměnné.\nStav obsahuje všechny sloty; připouštíme i částečné pokrytí. Operátor vloží libovolný přípustný obdélník do prázdného slotu nebo vyprázdní obsazený slot. Každý tah má inverzi. Libovolný stav lze vyprázdnit a potom vystavět jiný, takže graf je symetrický a souvislý. Řešením je stav pokrývající všechny jedničky; jeho cena je počet obsazených slotů, který minimalizujeme. Jednobuněčné obdélníky zaručují existenci pokrytí s nejvýše mn sloty. Samé nuly mají optimální cenu 0.\nPokud zadání požaduje geometricky souvislé obdélníky, místo bitových vektorů použijeme intervaly řádků a sloupců; argument s vkládáním a odebíráním zůstává platný.",
            "Zdroj nevymezuje pojem obdélník. Používáme kartézské součiny podmnožin řádků a sloupců; pro geometrickou variantu je v odpovědi uvedena úprava. Částečné stavy nejsou úplná řešení."),
        open("report-hulle-12", "Formuluj rozhodovaci ulohu TSP, ktera je NPH a NPO",
            "Formulujte rozhodovací a konstruktivní optimalizační verzi TSP. Která je NP-úplná (a tedy NP-těžká) a která patří do NPO a je NP-těžká?",
            "Vstup: úplný neorientovaný graf s nezápornými celočíselnými cenami hran zapsanými binárně.\nRozhodovací TSP: pro daný práh K existuje Hamiltonovský okruh celkové ceny nejvýše K? Tato verze je NP-úplná a tedy NP-těžká. Certifikátem je pořadí měst; úplnost, jedinečnost návštěv a součet cen ověříme polynomiálně.\nKonstruktivní optimalizační TSP: najděte Hamiltonovský okruh minimální celkové ceny. Patří do NPO: popis okruhu má polynomiální délku, přípustnost i cenu lze vyhodnotit polynomiálně. Je NP-těžký: z jeho optimální ceny rozhodneme prahovou verzi porovnáním s K. Ověření přípustnosti a ceny není ověřením optimality.\nNPO je třída optimalizačních problémů; rozhodovací verzi neoznačujeme jako problém z NPO.",
            "Původní věta směšuje rozhodovací úlohu s NPO. Rekonstrukce výslovně rozlišuje obě verze místo převzetí této chyby."),
        tf("report-hulle-13", "Je BFS systematicka strategie?",
            "BFS nad konečným grafem stavů, které eviduje objevené stavy a každý stav vloží do fronty nejvýše jednou, je systematická strategie.", true,
            "V terminologii přednášky je systematická strategie úplná a navštěvuje každý stav nejvýše jednou. BFS s evidencí objevených stavů tyto podmínky pro konečný graf splňuje. Samotná fronta bez kontroly duplicit nestačí: v cyklickém grafu by se stavy mohly opakovat.",
            "Doplněna evidence navštívených/objevených stavů a konečnost grafu; neomezené stromové BFS tyto vlastnosti obecně nemá."),
        tf("report-hulle-14", "Je model teorie interpretace, kde maji formule pravdive ohodnoceni?",
            "Interpretace I je modelem teorie T právě tehdy, když splňuje všechny formule teorie T.", true,
            "Zapisujeme I ⊨ T právě tehdy, když pro každou φ∈T platí I ⊨ φ. Nestačí splnit jednu vybranou formuli. U formulí s volnými proměnnými je třeba upřesnit ohodnocení nebo uvažovat univerzální uzávěr.")
    ];

    var wednesday = [
        open("report-wednesday-01", "stavový prostor pro processor scheduling problem",
            "Pro Minimum Multiprocessor Scheduling s n úlohami, m stejnými procesory a kladnými dobami t_j navrhněte konfiguraci, omezení, kritérium a souvislý symetrický stavový prostor.",
            "Konfigurace je vektor x=(x_1,…,x_n), kde x_j∈{1,…,m} označuje procesor úlohy j. Každá úloha je přiřazena právě jednomu procesoru a běží bez přerušení; v této variantě nejsou precedenční omezení. Kritérium je makespan C(x)=max_i Σ_{j:x_j=i} t_j, který minimalizujeme. Stavem je libovolný úplný vektor přiřazení. Operátor přesune jednu úlohu na jiný procesor. Má inverzi; každé dva vektory propojíme změnou odlišných souřadnic, tedy prostor je souvislý a symetrický. Při pouhém součtu délek úloh na stejném procesoru nezáleží na jejich pořadí.",
            "Obecné processor scheduling má více variant. Zvolena je varianta se stejnými procesory bez precedencí a s minimalizací makespanu."),
        open("report-wednesday-02", "dokaž problém věcí a kontejnerů v NPO, co je konf. a omezení",
            "Dokažte, že konstruktivní optimalizační Minimum Bin Packing patří do NPO. Uveďte konfigurační proměnné, omezení a optimalizační kritérium.",
            "Vstup: n věcí s kladnými celočíselnými velikostmi a_i a kapacita B; předpokládáme a_i≤B a binární zápis čísel. Proměnná x_i∈{1,…,n} určuje kontejner věci i. Omezení: pro každý kontejner j platí Σ_{i:x_i=j} a_i≤B; každá věc má právě jedno přiřazení. Minimalizujeme počet různých použitých kontejnerů |{x_1,…,x_n}|.\nPodmínky NPO: (1) vektor x má O(n log(n+1)) bitů, tedy polynomiální délku; (2) domény i kapacitní omezení ověříme polynomiálním počtem operací nad čísly polynomiální bitové délky; (3) počet použitých kontejnerů spočítáme polynomiálně. Výstupem je optimální přiřazení, ale k příslušnosti do NPO nemusíme umět optimum polynomiálně najít ani ověřit jeho optimalitu."),
        open("report-wednesday-03", "formuluj NPC verzi problemu uzlového pokrytí",
            "Zformulujte NP-úplnou rozhodovací verzi problému minimálního uzlového pokrytí grafu.",
            "Vstup: neorientovaný graf G=(V,E) a celé číslo K≥0. Otázka: existuje množina C⊆V s |C|≤K taková, že pro každou hranu {u,v}∈E platí u∈C nebo v∈C? Jde o rozhodovací Vertex Cover, který je NP-úplný. Certifikátem je C; velikost a pokrytí všech hran ověříme polynomiálně. Pro doložení NP-těžkosti lze použít Independent Set: množina S je nezávislá právě tehdy, když V\S je vrcholové pokrytí, s převodem prahu k na |V|−k."),
        open("report-wednesday-04", "co jsou výstupní proměnný u konstruktivního optimalizačního problému",
            "Co jsou výstupní proměnné konstruktivního optimalizačního problému? Uveďte příklad a odlište je od výstupu vyhodnocovací varianty.",
            "Popisují konkrétní optimální přípustné řešení. U bin packingu je to např. přiřazení každé věci do kontejneru minimalizující počet použitých kontejnerů; u TSP konkrétní nejkratší okruh. Samotný minimální počet kontejnerů nebo minimální délka okruhu jsou výstupem vyhodnocovací varianty. Interní konfigurační proměnné mohou mít stejnou reprezentaci jako výstup, ale mohou obsahovat i pomocné informace."),
        open("report-wednesday-05", "jak dokázat že něco není NPC",
            "Jak lze dokázat, že rozhodovací problém B není NP-úplný? Uveďte možnosti a potřebné předpoklady.",
            "NP-úplnost znamená současně B∈NP a NP-těžkost vůči polynomiálním many-one redukcím. Stačí vyvrátit jednu složku: (1) dokázat B∉NP, například nerozhodnutelností B; (2) dokázat, že některý jazyk A∈NP nelze Karpovou redukcí převést na B.\nZa předpokladu P≠NP stačí prokázat B∈P. Bez tohoto předpokladu příslušnost do P obecně NP-úplnost nevylučuje. Výjimkou jsou např. konstantní jazyky ∅ a všechny řetězce, na něž nelze odpověďmi zachovávající many-one redukcí převést netriviální jazyk. Nestačí, že pro B neznáme redukci nebo vhodný certifikát."),
        tf("report-wednesday-06", "Slouží Big-M v ILP pro vyjádření podmíněných omezení",
            "Big-M lze v ILP/MILP použít k vyjádření podmíněných omezení.", true,
            "Např. pro x∈[0,10] a binární y zapíšeme y=1 ⇒ x≤3 jako x≤3+M(1−y). Stačí M=7: pro y=0 omezení připouští celý interval x≤10, pro y=1 vyžaduje x≤3. M musí být odvozeno z platných mezí; zbytečně velké M zhoršuje relaxaci a může působit numerické potíže."),
        open("report-wednesday-07", "Je každá boolovská formule převoditelná na ekvisplnitelnou CNF v polynom čase, bez přidání extra proměnných",
            "Posuďte tvrzení: Každou booleovskou formuli lze v polynomiálním čase převést na ekvisplnitelnou CNF bez přidání pomocných proměnných. Proč je důležité odlišit ekvivalenci, ekvisplnitelnost a Tseitinovu transformaci?",
            "Běžné učební tvrzení je: převod na logicky ekvivalentní CNF nad stejnými proměnnými může mít exponenciální výstup, takže obecná záruka polynomiálního času neplatí. Např. disjunkce n dvojic (a_i ∧ b_i) vyžaduje v ekvivalentní CNF nad těmito proměnnými exponenciálně mnoho klauzulí. Tseitinova transformace zaručuje lineárně velkou ekvisplnitelnou CNF díky novým proměnným pro podformule.\nDoslovná ekvisplnitelnost ale zachovává pouze to, zda nějaký model existuje, nikoli stejné modely. Samotná exponenciální velikost ekvivalentní CNF proto nedokazuje nemožnost libovolné ekvisplnitelné transformace. Např. kdyby P=NP, mohli bychom rozhodnout splnitelnost a vrátit konstantní pravdivou nebo nepravdivou CNF. Původní neurčitý zápis tedy nelze poctivě ohodnotit jako jednoznačné T/F bez upřesnění zamýšlené transformace.",
            "Ve zprávě je ekvisplnitelnou, ne ekvivalentní. Zachováváme tuto odlišnost a používáme otevřenou otázku místo zavádějícího binárního klíče."),
        tf("report-wednesday-08", "něco s Mají všechny formule stejný model",
            "Rekonstruovaná varianta: Všechny booleovské formule nad stejnou množinou proměnných mají stejnou množinu modelů.", false,
            "Např. formule p a ¬p mají stejnou proměnnou, ale jejich množiny modelů jsou odlišné, a dokonce disjunktní. Naproti tomu v jednom modelu teorie musí být pravdivé všechny formule té teorie; samotná definice teorie existenci společného modelu nezaručuje.",
            "Nízká jistota rekonstrukce: zdroj obsahuje pouze útržek „něco s Mají všechny formule stejný model“. Zvolená procvičovací varianta není vydávána za původní přesné tvrzení."),
        tf("report-wednesday-09", "Pomocí Cookovi, Lze převést každou libovolnou instanci NP problému na zvolený NPO problém",
            "Za předpokladu P ≠ NP lze každý problém z NP polynomiální Cookovou redukcí převést na libovolný předem zvolený problém z NPO; stačí samotná příslušnost cíle do NPO.", false,
            "NPO neznamená NP-těžkost. Obsahuje i snadné úlohy z PO, například optimalizační úlohu s jediným přípustným řešením konstantní ceny. Redukce SAT na takovou úlohu by dala polynomiální algoritmus pro SAT. Za předpokladu P≠NP je tedy univerzální tvrzení nepravdivé. Bez tohoto předpokladu není obecné tvrzení vyvráceno: při P=NP lze rozhodnout zdroj přímo a nepotřebné orákulum ignorovat. NP-těžkost vhodného cíle je dostačující dodatečná podmínka.",
            "Doplněn předpoklad P≠NP, aby otázka měla jednoznačný binární klíč. Původní nepodmíněná verze souvisí s otevřeným problémem P vs. NP.")
    ];

    var aniCollection = [
        tf("report-ani-extra-01", "jestli je P podmnozina exptime",
            "Platí P ⊆ EXPTIME?", true,
            "Ano. Každý deterministický polynomiální algoritmus má také exponenciální časovou horní mez. Navíc z deterministické časové hierarchie víme, že P je vlastní podtřídou EXPTIME (P ⊊ EXPTIME).",
            "Zápis podmnožina ve výrocích této sady znamená ⊆, pokud není výslovně uvedeno vlastní zahrnutí."),
        tf("report-ani-extra-02", "jestli je NP podmnozina exptime",
            "Platí NP ⊆ EXPTIME?", true,
            "Ano. NP jazyk má polynomiálně dlouhé certifikáty a polynomiální deterministický ověřovač. Pro vstup délky n můžeme deterministicky projít nejvýše 2^{p(n)} kandidátů a každého ověřit v polynomiálním čase. To je čas 2^{poly(n)}, tedy EXPTIME. Přísnost NP ⊆ EXPTIME není známa; exponenciální zde neznamená pouze 2^{O(n)}."),
        tf("report-ani-extra-03", "jestli je co-NP podmnozina exptime",
            "Platí co-NP ⊆ EXPTIME?", true,
            "Ano. Pro L∈co-NP je doplněk L v NP, a tedy v EXPTIME. Deterministický rozhodovač doplňku spustíme a prohodíme ANO/NE. EXPTIME je uzavřena na doplněk, takže i L∈EXPTIME. Není nutné předpokládat NP=co-NP ani znát krátké ANO-certifikáty pro všechny co-NP jazyky."),
        open("report-ani-extra-04", "pak neco neco symetricky souvisly stavovy prostor traveling salesman problemu",
            "Pro optimalizační TSP na úplném grafu s n městy navrhněte konfigurační proměnné a souvislý symetrický stavový prostor. Uveďte stavy, operátory a kritérium.",
            "Konfigurace je permutace měst π=(π_1,…,π_n); první město můžeme pevně zvolit jako start. Stav je jeden úplný okruh π_1→π_2→…→π_n→π_1. Kritérium je součet cen těchto n hran, který minimalizujeme. Operátor prohodí dvě různá města mimo pevný start. Je sám sobě inverzí, takže každá hrana stavového grafu má opačný tah a prostor je symetrický. Každou permutaci lze převést na libovolnou jinou posloupností transpozic, proto je prostor souvislý. V úplném grafu je každý takový okruh přípustný. Pro neúplný graf bychom museli výslovně povolit i nepřípustné mezistavy nebo navrhnout jiné operátory; souvislost množiny pouze přípustných okruhů automaticky neplyne.",
            "Útržek neuvádí variantu TSP; zvolena standardní optimalizační verze na úplném grafu. Nezaměňujeme graf měst s grafem konfigurací."),
        open("report-ani-extra-05", "pak tam bylo hodne uzlove pokryti, co jsou konfiguracni promenne, dukaz ze to je NPO",
            "Pro minimální uzlové pokrytí grafu navrhněte konfigurační proměnné, omezení a kritérium. Dokažte příslušnost konstruktivní optimalizační verze do NPO.",
            "Vstup: neorientovaný graf G=(V,E). Pro každý v∈V zavedeme x_v∈{0,1}; hodnota 1 znamená zařazení v do pokrytí C. Omezení: pro každou hranu {u,v}∈E platí x_u+x_v≥1. Minimalizujeme Σ_v x_v. Výstupem je optimální množina C={v:x_v=1}.\nPodmínky NPO: (1) konfigurace má |V| bitů, tedy polynomiální délku; (2) všechny domény a pokrytí všech hran lze ověřit v O(|V|+|E|); (3) cenu |C| spočítáme v O(|V|). Přípustné řešení vždy existuje, například C=V. NPO nevyžaduje polynomiální nalezení optima ani kontrolu jeho optimality. Uzlové pokrytí není Hamiltonovský okruh: nemusí obsahovat každý vrchol a nehledáme cestu."),
        open("report-ani-extra-06", "jake jsou 2 nesouvisle metody vyvraceni ze problem je v NPC",
            "Uveďte dva principiálně odlišné způsoby, jak vyvrátit NP-úplnost rozhodovacího problému B. Jaké předpoklady potřebujete?",
            "NP-úplnost vyžaduje současně B∈NP a NP-těžkost vůči Karpovým redukcím.\n1. Vyvrátit členství v NP: dokázat B∉NP, např. dokázat, že B je nerozhodnutelný; každý NP jazyk je rozhodnutelný.\n2. Vyvrátit NP-těžkost: prokázat, že nějaký jazyk A∈NP nelze polynomiální many-one redukcí převést na B. Např. pro konstantní jazyk B=∅ žádná transformace nemůže zachovat ANO-instance netriviálního jazyka A={0}; B proto není NP-těžký, přestože B∈P⊆NP.\nZa předpokladu P≠NP stačí pro druhou cestu také prokázat B∈P. Bez tohoto předpokladu samotné členství v P obecně NP-úplnost nevylučuje. Neznalost certifikátu nebo redukce není důkazem jejich neexistence.",
            "Nesouvislé metody vykládáme jako vyvrácení dvou různých podmínek definice NPC, nikoli jako dvě varianty důkazu NP-těžkosti."),
        tf("report-ani-extra-07", "jestli Big-M pracuje s binarnimi promennymi",
            "Ve standardním Big-M kódování podmíněných omezení v ILP/MILP lze použít binární proměnnou jako logický přepínač.", true,
            "Např. y∈{0,1} a omezení aᵀx≤b+M(1−y) vyjadřují y=1 ⇒ aᵀx≤b, je-li M dostatečné pro platné meze x. Binární proměnná reprezentuje pravdivost podmínky; ostatní proměnné nemusí být binární. Netvrdíme, že každé použití velké konstanty ani simplexová Big-M metoda nutně vyžadují binární proměnnou.",
            "Zpřesněno na Big-M pro podmíněná omezení; samotný název Big-M má více použití."),
        tf("report-ani-extra-08", "jestli je CNF boolovska formule",
            "Každá výroková formule v CNF je booleovská formule.", true,
            "CNF je konjunkce klauzulí, z nichž každá je disjunkcí booleovských literálů. Jde tedy o speciální tvar booleovské formule. Nejde o tvrzení, že libovolná booleovská formule už syntakticky je v CNF nebo že převod na ekvivalentní CNF musí být malý."),
        tf("report-ani-extra-09", "Pouziva tseitinova transformace pomocne promenne?",
            "Tseitinova transformace obecné booleovské formule do CNF používá pomocné booleovské proměnné pro složené podformule.", true,
            "Pro složenou podformuli zavedeme proměnnou z a přidáme konstantně mnoho klauzulí vyjadřujících z↔podformule. Navíc vynutíme pravdivost proměnné kořene. Výsledná CNF je ekvisplnitelná s původní formulí, ale má rozšířenou množinu proměnných. U triviální formule nebo vstupu, který už je CNF, lze transformaci zjednodušit; tvrzení popisuje standardní obecnou konstrukci."),
        tf("report-ani-extra-10", "Lze prevest kazdou bool formuli na ekvisplnitelnou v linearnim case?",
            "Každou booleovskou formuli nad obvyklými spojkami s omezenou aritou lze pomocí Tseitinovy transformace převést v lineárním čase na ekvisplnitelnou CNF, pokud dovolíme pomocné proměnné.", true,
            "Ke každému uzlu syntaktického stromu přidáme nejvýše konstantně mnoho pomocných proměnných a klauzulí. Při n uzlech vznikne O(n) proměnných, klauzulí i výskytů literálů a konstrukce vyžaduje O(n) operací v běžném modelu práce se syntaxí a identifikátory. Kořenovou proměnnou musíme vynutit jako pravdivou. Výsledek zachovává splnitelnost; nepožaduje shodu pravdivostních funkcí nad totožnými proměnnými. Při explicitním bitovém počítání délky názvů proměnných závisí zápis a čas na zvoleném kódování.",
            "V útržku chybí cíl převodu; z kontextu Tseitinovy transformace doplněna CNF. Pomocné proměnné nejsou zakázány. Lineární se vztahuje ke standardnímu syntaktickému modelu, ne k libovolnému bitovému kódování."),
        tf("report-ani-extra-11", "Je vyraz x+y<=10 max(y+x^2) ILP",
            "Úloha maximalizovat y+x² za podmínek x+y≤10 a x,y∈ℤ≥0 je ve svém uvedeném zápisu úlohou celočíselného lineárního programování (ILP).", false,
            "Omezení x+y≤10 je lineární, ale účelová funkce y+x² obsahuje druhou mocninu proměnné, a proto není lineární. ILP vyžaduje lineární účelovou funkci i lineární omezení s celočíselnými proměnnými. Uvedený zápis je celočíselná kvadratická optimalizace. Na konečné doméně lze hledat ekvivalentní ILP reformulaci s dalšími proměnnými a omezeními; to z původního nelineárního zápisu přímo ILP nedělá.",
            "Útržek spojuje omezení a maximalizaci bez uvedení domén. Doplněny nezáporné celočíselné domény; rozhodující překážkou linearity je x².")
    ];

    global.reportedQuestionSets = {
        "report-2026-11-12-hulle": hulle,
        "report-2026-11-11-wednesday": wednesday,
        "report-ani-extra": aniCollection
    };
    global.reportedQuestionSetLabels = {
        "report-2026-11-12-hulle": "12. 11. · Hülle · rekonstrukce",
        "report-2026-11-11-wednesday": "Středa 11. 11. · rekonstrukce",
        "report-ani-extra": "ANI · další studentská sbírka · rekonstrukce"
    };
})(window);
