var questions = [];

questions.push({
    question: "Nechť $f(n) = Θ(n!)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Ω(n^2)$"
    },
    correct: {1: 0, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n)=Θ(2^n)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n^2)$. Pak:",
    answers: {
        1: "$f(n) = Ω(n)$",
        2: "$f(n) = Ω(n^2)$",
        3: "$f(n) = O(2^n)$",
        4: "$f(n) = O(n^3)$"
    },
    correct: {1: 1, 2: 1, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$",
        5: "$f(n) = Ω(n)$",
        6: "$f(n) = Ω(n^2)$",
        7: "$f(n) = O(2^n)$",
        8: "$f(n) = O(n)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 0, 5: 1, 6: 0, 7: 1, 8: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n^2)$. Pak:",
    answers: {
        1: "$f(n) = O(n^2)$",
        2: "$f(n) = O(n)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Θ(n^3)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$):",
    answers: {
        1: "$NP \\subset EXPTIME$",
        2: "$P \\subset NP$",
        3: "$Co-NP \\subset NPC$",
        4: "$P \\cap NPH = \\textrm{Ø}$"
    },
    correct: {1: 1, 2: 1, 3: 0, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$NPC = NP \\cap NPH$",
        2: "$P \\subset NPC$",
        3: "$NPO \\subset NPH$",
        4: "$Co-NP \\cap NP = \\textrm{Ø}$"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "$NP \\subset P$",
        2: "$NP = P$",
        3: "$NP \\subset NPH$",
        4: "$NPC \\subset NPH$"
    },
    correct: {1: 0, 2: 0, 3: 0, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "Pro některé NPC problémy existuje polynomiální algoritmus (pro det. Turingův stroj)",
        2: "Certifikát NPC problémů je možno zkontrolovat v polynomiálním čase (det Turingovým strojem)",
        3: "NPC problémy jsou řešitelné v polynomiálním čase nedet. Turingovým strojem"
    },
    correct: {1: 0, 2: 1, 3: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy",
        2: "Všechny P problémy lze řešit v polynomiálním čase (det. Turingovým strojem)",
        3: "Pro některé NPC problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)"
    },
    note: "NPC problémy NEjsou ty nejtěžší rozhodovací kombinatorické problémy",
    correct: {1: 0, 2: 1, 3: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení. Úplná strategie prohledávání stavového prostoru:",
    answers: {
        1: "Vždy prohledává celý stavový prostor",
        2: "Je např. metoda „pouze nejlepší“ (best-only)",
        3: "Je např. metoda „nejlepší nejdříve“ (best-first)",
        4: "Prohledá celý (případně efektivně ořezaný) stavový prostor, pokud neexistuje řešení",
        5: "Vždy nalezne optimální řešení (pokud existuje)"
    },
    correct: {1: 0, 2: 0, 3: 1, 4: 1, 5: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení. Systematická strategie prohledávání stavového prostoru:",
    answers: {
        1: "Vždy nalezne optimální řešení (pokud existuje)",
        2: "Vždy prohledá celý stavový prostor",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Je úplná"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "Některé NP problémy lze řešit v polynomiálním čase",
        2: "Certifikát NP problémů se dá zkontrolovat v polynomiálním čase",
        3: "NP problémy jsou řešitelné v polynomiálním čase nedeterministickým turingovým strojem"
    },
    correct: {1: 1, 2: 1, 3: 1}
});
questions.push({
    question: "Zaškrtněte správné tvrzení:",
    answers: {
        1: "Jestliže je daný problém $O(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        2: "Jestliže je daný problém $Ω(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        3: "Jestliže je daný problém $Θ(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(n^2)$, je tento problém $Θ(n^2)$."
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});
questions.push({
    question: "Zaškrtněte správné tvrzení:",
    answers: {
        1: "Jestliže je daný problém $O(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        2: "Jestliže je daný problém $Ω(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        3: "Jestliže je daný problém $Θ(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(2^n)$, je tento problém $Θ(2^n)$."
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});
questions.push({
    question: "Zformulujte nějakou NPC rozhodovací verzi problému obchodního cestujícího.",
    answer: "Existuje cesta (Hamiltonovská kružnice) splňující omezující podmínky (např. kratší než $x$)?"
});
questions.push({
    question: "Zformulujte nějakou rozhodovací verzi NPC SAT problému.",
    answer: "Je daná formule splnitelná?"
});

questions.push({
    question: "Zformulujte nějakou rozhodovací verzi TSP problému.",
    answer: "Existuje cesta (Hamiltonovská kužnice) splňující omezující podmínky?"
});

questions.push({
    question: "Zformulujte nějakou enumerativní verzi TSP problému.",
    answer: "Nalezněte všechny možné cesty (Hamiltonovské kružnice) splňující omezující podmínky."
});
questions.push({
    question: "Zformulujte nějakou Co-NP (a nepatřící do P) rozhodovací verzi problému odvozeného od problému obchodního cestujícího.",
    answer: "co-NP úloha nesmí mít krátkého svědka ANO == nelze nalezením jednoho kladného případu ukončit prohledávání. Proto otázka může znít: <b>Jsou všechny hamiltonovy kružnice kratší jak $T$?</b><br>(Musí se tak začít prohledávat cesty delší jak $T$ a zjistit, jestli nějaká z nich je hamiltonova kružnice.) "
});

questions.push({
    question: "A) Dokažte, že rozhodovací verze problému \"minimum bin packing\" patří do NP.<br>" +
    "B) Navrhněte pro tento problém konfigurační proměnné.<br>" +
    "C) Co je zde certifikát? Jak jej ověřím?",
    answer: "Aby byl problém v NP, musí jít v polyn. čase ověřit jeho certifikát. Certifikátem zvolíme pole $A$ velikosti $n$, kde na pozici $A[n]$ je číslo kontejneru, ve kterém se machází daná věc $n$.<br" +
    "Ověření proběhne tak, že projdu pole $A$ a sečtu váhy věci v každém kontejneru. Takhle vzniklé váhy porovnám s kapacitami kontejnerů ze zadání. Složitost je $O(n)$ (sčítání a porovnávání), což je polynomiální. Pole $A$, kde si pro každou věc pamatuju, ve kterém je kontejneru. Certifikát je konkrétní ohodnocení konfiguračních proměnných, ověření proběhne tak, jak je naznačeno v důkazu, že je problém NP.",
    note: "<b>Minimum bin packing problem</b> = Je dána množina $n$ věcí a pro každou věc její velikost. Je možné všechny věci umístit do nejvýše $K$ kontejnerů o kapacitě $B$ každý?"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém obchodního cestujícího (TSP-O) patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul><br>"+
	"b) Vyjmenujte jeho konfigurační proměnné - vektor obsahující posloupnost uzlů<br>"+
	"c1) Co je certifikátem optimalizační verze tohoto problému? - Certifikát optimalizační verze, tj. konfiguraci, která dává optimální řešení, jistě nelze ověřit v polynomiálním čase. Musíme totiž zjistit, zda je skutečně optimální, což je problém TSP-O samotný.<br>"+
	"c2) Co jsou omezující podmínky optimalizační verze tohoto problému? - Cesta musí být uzavřená a každý uzel navštívit právě jednou"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém uzlového pokrytí grafu patří do NPO<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul><br>"+
    "b) Vyjmenujte jeho konfigurační proměnné - vektor obsahující posloupnost vrcholů<br>"+
	"c1) Co je certifikátem optimalizační verze tohoto problému? - Certifikát optimalizační verze, tj. konfiguraci, která dává optimální řešení, jistě nelze ověřit v polynomiálním čase. Musíme totiž zjistit, zda je skutečně optimální, což je problém TSP-O samotný.<br>"+
	"c2) Co jsou omezující podmínky optimalizační verze tohoto problému? - Cesta musí být uzavřená a každý uzel navštívit právě jednou"
});
questions.push({
    question: "A) Dokažte, že problém splnitelnosti booleovské formule (SAT) patří do NP.<BR>B) Vyjmenujte jeho konfigurační proměnné.<BR>C) Co je certifikátem rozhodovací verze tohoto problému?",
    answer: "<ul><li>A) Abychom dokázali, že je problém v NP, musíme certifikát ověřit v polynomiálním čase.</li>" +
    "<li>B) Bitový vektor (ohodnocení $true/false$ jednotlivých proměnných v SATu)</li>" +
    "<li>C) Certifikátem je takové ohodnocení (takový bitový vektor), pro který je daný SAT = 1</li></ul>"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém nalezení max. kliky v grafu patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co jsou zde omezující podmínky?<br>",
    answer: "A) Optimalizační problém $\\varPi$ patří do třídy NPO, jestliže splňuje následující podmínky: <br> I.) Velikost výstupu instance je omezena polynomem ve velikosti instance -- výstup lze zapsat v polynomiálním čase; <br>" +
    "II.) Problém, zda daná konfigurace je řešením, patří do P -- omezující podmínky lze vyhodnotit v polynomiálním čase; <br>" +
    "III.) Hodnotu optimalizačního kritéria pro každé řešení každé instance lze vypočíst v polynomiálním čase -- optimalizační kritérium lze vyhodnotit v polynomiálním čase.<br><br>" +
    "B) Vektor všech uzlů, který nabývá $1$ na $i$-tém místě, pokud je $i$-tý uzel momentálně obsažen v klice, $0$ pokud není obsažen.<br>Vektor $X = {X_1 … X_n}$, kde $N$ je rovno počtu uzlů grafu. Proměná $X_i$ nabývá hodnot $0/1$, podle toho zda daný uzel tvoří součást kliky.<br>" +
    "C) Podgraf musí být úplný<br>",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});
questions.push({
    question: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    answers: {
        1: "Neexistuje pro ně polynomiální algoritmus pro det. Turingův stroj",
        2: "Jejich optimalizační kritérium se dá vždy vypočítat v polynomiálním čase (det. Turingovým strojem)",
        3: "Jsou řešitelné v polynomiálním čase nedet. tur. stroje"
    },
    correct: {1: 1, 2: 0, 3: 0}
});


questions.push({
    question: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    answers: {
        1: "Jsou to ty nejtěžší existující problémy",
        2: "Neznáme pro ně polynomiální algoritmus pro deterministický Turingův stroj",
        3: "Je možné zkontrolovat omezující podmínky v polynomiálním čase"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Jak poznáte, že daný problém nepatří do NP? Popište možnosti.",
    answer: "Jeho certifikát není možné zkontrolovat v polynomiálním čase determin. algoritmem.<br>Daný problém nelze převést na SAT. Každý NP problém totiž na SAT převést lze."
});

questions.push({
    question: "Jak poznáte, že daný problém nepatří do NPC? Popište možnosti.",
    answer: "I.) problém není NP <br> II.) nebo je problém P <br> III.) nebo najdu nějaký problém z NP, který není převoditelný pomocí Karpovy redukce na tento můj problém"
});

questions.push({
    question: "Třída NPH je:",
    answers: {
        1: "Třída problémů, pro které neznáme polynomiální algoritmus (pro deterministický Turingův stroj)",
        2: "Třída problémů, pro které lze zkontrolovat certifikát v polynomiálním čase",
        3: "Třída těch nejtěžších existujících problémů"
    },
    correct: {1: 1, 2: 0, 3: 0}
});

questions.push({
    question: "Třída Co-NP je:",
    answers: {
        1: "Třída všech takových problémů, pro které neznáme polynomiální algoritmus pro det. Turingův stroj",
        2: "Třída některých problémů, pro které nelze ověřit certifikát ANO-instanci v polynomiálním čase (det Turingovým strojem)",
        3: "Třída těžších problémů, než je NP"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Třída NPC je:",
    answers: {
        1: "Třída všech problémů, pro které neznáme polynomiální algoritmus",
        2: "Průsečík tříd NP a NPH",
        3: "Třída těch nejtěžších existujících rozhodovacích problémů"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Třída NP je třída problémů:",
    answers: {
        1: "Které nejsou řešitelné v polynomiálním čase",
        2: "Jejichž certifikát se dá zkontrolovat v polynomiálním čase",
        3: "Které jsou řešitelé v polynomiálním čase nedeterministickým turingovým strojem"
    },
    correct: {1: 0, 2: 1, 3: 1}
});

questions.push({
    question: "Jakým způsobem lze dokázat, že daný problém patří do NPC?",
    answer: "Dokážeme převést jiné NPC na náš problém.<br>"+
    		"NPC -> $\\varPi$<br>"+
    		"$\\varPi$ náleží NP",
    note: "Všechny NPC problémy na sebe jsou navzájem převoditelné"
});

questions.push({
    question: "Pomocí Karpovy redukce je možné:",
    answers: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci rozhodovacího problému na instanci konstruktivního optimalizačního problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPC",
        5: "Převést NPC problém na jiný NPC problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1}
});

questions.push({
    question: "Pomocí Karpovy redukce je možné:",
    answers: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci NPC problému na instanci P problému v exponenciálním čase"
    },
    correct: {1: 1, 2: 0, 3: 0}
});

questions.push({
    question: "Co je to systematická strategie prohledávání stavového prostoru?",
    answer: "Je to úplná strategie, která navštíví každý stav nejvýše jednou."
});

questions.push({
    question: "Co je to úplná strategie prohledávání stavového prostoru?",
    answer: "Úplná strategie znamená navštívit všechny stavy kromě těch, o kterých víme, že nedávají (optimální) řešení."
});

questions.push({
    question: "Co je to kombinatorický problém, čím je charakterizován?",
    answer: "<p>Kombinatorický problém je charakterizován:</p><ul>" +
    "<li>Vstupní proměnné (např.: seznam děr)</li>" +
    "<li>Výstupní proměnné (např.: pořadí děr)</li>" +
    "<li>Konfigurační proměnné (např.: pořadí děr)</li>" +
    "<li>Omezení (např.: uzavřená cesta, každá díra právě jednou)</li>" +
    "<li>Optimalizační kritérium (např.: nejkratší!)</li>" +
    "</ul><br>" +
    "<p>" +
    "Kombinatorický problém může být <ul><li>I.) Rozhodovací</li> <li>II.) Konstruktivní</li> <li>III.) Enumerační</li></ul>" +
    "</p>"
});

questions.push({
    question: "Co je stavový prostor? Čím je specifikován?",
    answer: "Nechť $S={s_i}$ je množina všech stavů algoritmu $A$ řešícího $I$. Nechť $Q={qj}$ je množina operací $S→S$ takových, že $q_j(s_i)≠s_i$ pro všechna $s_i,q_j$. Pak dvojici $(S,Q)$ nazveme stavovým prostorem algoritmu $A$ řešícího $I$.<br>" +
    "Je charakterizován:<br><ul><li>Množinou stavů</li><li>Množinou operací, které reprezentují přechody mezi dvěma stavy</li></ul>"
});

questions.push({
    question: "Co je graf stavového prostoru? Jak je specifikován?",
    answer: "Nechť $(S,Q)$ je stavový prostor algoritmu řešícího instanci problému. Pak orientovaný graf $H=(S, E)$, kde hrana $(e_i,e_j)∈E$ odpovídá tahu $s_j=q(s_i)$ pro $q∈Q$ se nazývá grafem stavového prostoru algoritmu."
});

questions.push({
    question: "Co je počáteční konfigurací konstruktivních algoritmů?",
    answer: "Počáteční stav je nějaká triviální konfigurace (prázdný batoh apod.) a algoritmem se dopracujeme k řešení, které vyhovuje omezením."
});

questions.push({
    question: "Co jsou to co-NP problémy?",
    answer: "co-NP je třída problémů, ﻿﻿u kterých existuje v polynomiálním čase ověřitelný důkaz (tzv. protipříklad), že problém nemá řešení.<br>"+
			"Vysvětlení: u NP vyžadujeme snadno ověřitelný certifikát typu ANO, u co-NP certifikát typu NE. co-NP lze vytvořit negací NP.<br>"+
			"Příklad: Ověření nesplnitelnosti SAT."
});

questions.push({
    question: "Co jsou to iterativní heuristiky? Uveďte příklad.",
    answer: "Iterativní heuristika začne s nějakým řešením a to postupně vylepšuje. Iterativní heuristika se ale tak pohybuje v podgrafu stavového prostoru, ve kterém se nemusí nacházet globální optimum. Např. Simulované ochlazování."
});


questions.push({
    question: "Stavový prostor problému $0/1$ batohu lze vyjádřit pro různé algoritmy jako:",
    answers: {
        1: "Acyklický graf",
        2: "Cyklický graf",
        3: "n-rozměrnou hyperkrychli",
        4: "Strom"
    },
    correct: {1: 1, 2: 1, 3: 1, 4: 1}
});

questions.push({
    question: "Popište graf stavového prostoru pro problém nalezení uzlového pokrytí. Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly jsou stavy, které reprezentují množinu uzlů, které tvoří uzlové pokrytí.<br>Hrany jsou operace, které reprezentují přidání nebo odebrání uzlu z této množiny"
});

questions.push({
    question: "Jak se vypočítá relativní chyba ($ε$) daného algoritmu? V jakých mezích se pohybuje?",
    answer: "$\\varepsilon = \\frac{C(OPT)-C(APX)}{C(OPT)}$ Relativní chyba se pohybuje v rozmezí $<0, 1>$."
});

questions.push({
    question: "Je dán problém $Π$. $Q(S)$ budiž hodnota optimalizačního kritéria řešení $S$ instance $I$ tohoto problému, dokázat, že algoritmus řešící tento problém je aproximativní. Musíme tedy:",
    answers: {
        1: "Pro každou instanci $I$ algoritmus skončí v polynomiálním počtu kroků",
        2: "Relativní kvalita algoritmu je konečná",
        3: "Relativní kvalita algoritmu $< 1$",
        4: "$Π \\in NP$",
        5: "Relativní chyba algoritmu $< 1$"
    },
    correct: {1: 1, 2: 1, 3: 0, 4: 0, 5: 1}
});

questions.push({
    question: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda „nejlepší nejdříve“ v takovém případě celý stavový prostor?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    note: "Neuvažujeme části stavového prostoru, které jsou v rozporu s optimalizačními kritérii.",
    correct: {1: 1, 2: 0}
});
questions.push({
    question: "Jaká je pravděpodobnost nalezení řešení rozhodovacího SAT problému pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných?",
    answer: "$\\left(1-\\frac{1}{2^{k}}\\right)^c$"
});

questions.push({
    question: "Jaký je rozdíl v asymptotické složitosti metod \"backtracking\" (prohledávání s návratem) a \"forward-checking\" (dopředná kontrola)?",
    answer: "Žádný, asymptoticky jsou obě metody stejně obtížné."
});

questions.push({
    question: "Mějme optimalizační problém unátního pokrytí. Je dána binární (obsahující pouze hodnoty \"0\" a \"1\") matice $A$ o rozměrech $(m,n)$. $m$ je počet řádků, které mají být pokryty podmnožinou sloupců (z $n$). Daný řádek ($i$) je pokryt sloupcem $j$, pokud $A[i,j] = 1$. Problém nalezení minimálního pokrytí, tj. nalezení minimální podmnožiny sloupců, které pokrývají všechny řádky, patří do NPH. Zformulujte rozhodovací verzi tohoto problému, která má srovnatelnou složitost.",
    answer: "Je možné pokrýt všechny řádky nejvýše K<=n sloupci?"
});

questions.push({
    question: "Popište graf stavového prostoru pro problém obchodního cestujícího (TSP). Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly - volba Hamiltonovy kružnice (obecně podgraf grafu s městy)<br>Hrany - Operace přechodu mezi těmito kružnicemi (dvojitá záměna uzlů…)"
});

questions.push({
    question: "Jak se vypočítá relativní kvalita ($R$) daného algoritmu? V jakých mezích se pohybuje?",
    answer: "$R >= ∀ I:$ $max({C_{APX}(I)/C_{OPT}(I), C_{OPT}(I)/C_{APX}(I)})$ $R ∈ <1,+nekonecno)$"
});

questions.push({
    question: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda \"pouze nejlepší\" v každém takovém případě celý stavový prostor?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 0, 2: 1}
});

questions.push({
    question: "Jaká je pravděpodobnost splnění dané klauzule SAT problému o max. $k$ proměnných pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných? Jaká bude pravděpodobnost splnění celé formule při $n$ klauzulích?",
    answer: "$1-\\frac{1}{2^{k}}$, pokud má být splněna celá formule, tak $(1-\\frac{1}{2^{k}})^n$"
});

questions.push({
    question: "Pro problémy patřící do třídy PTAS (polynomiální aproximační schéma) platí:",
    answers: {
        1: "Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně",
        2: "Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou",
        3: "Patří do NPC",
        4: "Jsou prodmnožinou APX",
        5: "Patří do NPH"
    },
    correct: {1: 0, 2: 1, 3: 0, 4: 1, 5: 0}
});

questions.push({
    question: "Jaká je asymptotická složitost metody větví a hranic (B&B)? V nejobecnějším případě.",
    answer: "$O(2^n)$ (= bruteforce)"
});

questions.push({
    question: "Jaké jsou kladeny požadavky na konfigurační proměnné kombinatorického problému?",
    answer: "Proměnných je konečný počet a mají konečné domény."
});

questions.push({
    question: "Jak je specifikován optimalizační kombinatorický problém ?",
    answer: "Jedná se o kombinatorický problém, pro který je <b>zadáno optimalizační kritérium</b> (cenová funkce)."
});

questions.push({
    question: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$P \\subset NPI$",
        2: "$P \\cap NPC = \\textrm{Ø}$",
        3: "$NP \\cap NPH = \\textrm{Ø}$",
        4: "$P \\subset NP$",
        5: "$NPC \\subset NPH$",
        6: "$NPO \\subset NPH$"
    },
    correct: {1: 0, 2: 1, 3: 0, 4: 1, 5: 1, 6: 0}
});

questions.push({
    question: "Jakým způsobem lze dokázat, že problém náleží do NP?",
    answer: "Nalezním certifikátu, který lze ověřit v polynomiálním čase."
});

questions.push({
    question: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$P \\subset NP$",
        2: "$NPI \\subset NPC$",
        3: "$P \\cap NP = \\textrm{Ø}$",
        4: "$NPH \\subset PSPACE$"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 1}
});

questions.push({
    question: "Uveďte příklad grafu stavového prostoru pro problém nalezení kliky v grafu (max. úplný podgraf). Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly jsou stavy, které reprezentují podgrafy grafu, jehož pokrytí hledáme.<br>Hrany jsou operace, které reprezentují přidání/odebrání uzlu z podgrafů.",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});

questions.push({
    question: "Uveďte příklad grafu stavového prostoru pro problém splnitelnosti booleovské formule (SAT). Co jsou uzly v tomto grafu, co hrany?",
    answer: "A) Uzly jsou jednotlivé konfigurace proměnných<br>B) Hrany jsou operace, při nichž jednu z proměnných nastavím opačně"
});

questions.push({
    question: "Mají pseudopolynomiální algoritmy polynomiální složitost s velikostí instance?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Co jsou to pseudopolynomiální algoritmy? Uveďte příklad.",
    answer: "Algoritmus, jehož počet kroků závisí polynomiálně na velikosti instance, ale závisí dále na parametru, který s velikostí instance nesouvisí, nazýváme pseudopolynomiálním.<br>" +
    "Příklad: Řešení problému batohu dynamickým programováním (ať už s dekompozicí dle váhy nebo ceny). "
});

questions.push({
    question: "Co jsou to greedy algoritmy?",
    answer: "Algoritmus v každém svém kroku vybírá lokální optimum, přičemž existuje šance, že takto nalezne optimum globální. Nevrací se do již navštívených stavů. Příklad: Heuristika cena/váha u problému batohu. "
});


questions.push({
    question: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém batohu patří do NPO.",
    answer: "Optimalizační problém $\\varPi$ patří do třídy NPO, jestliže splňuje následující podmínky:<br> I.) Velikost výstupu instance je omezena polynomem ve velikosti instance -- výstup lze zapsat v polynomiálním čase; <br>" +
    "II.) Problém, zda daná konfigurace je řešením, patří do P -- omezující podmínky lze vyhodnotit v polynomiálním čase; <br>" +
    "III.) Hodnotu optimalizačního kritéria pro každé řešení každé instance lze vypočíst v polynomiálním čase -- optimalizační kritérium lze vyhodnotit v polynomiálním čase."
});

questions.push({
    question: "Zformulujte nějakou NPC rozhodovací verzi problému nalezení uzlového pokrytí grafu.",
    answer: "Existuje uzlové pokrytí grafu velikost $k\\leq n$?",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});


questions.push({
    question: "Jak zjistím, že moje jednoduchá lokální metoda má tendenci rychle uváznout v lokálním minimu?",
    answers: {
        1: "Při náhodných restartech vždy dojdu ke stejnému výsledku",
        2: "Při náhodných restartech dosažený výsledek příliš závisí na počátečním stavu"
    },
    correct: {1: 0, 2: 1}
});

questions.push({
    question: "Zjistím, že moje jednoduchá lokální metoda rychle uvázne v lokálním minimu. Problém řeším tím, že prohledávané okolí",
    answers: {
        1: "Zvětším",
        2: "Zmenším"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do hloubky (DFS) systematická strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do hloubky (DFS) úplná strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do šířky (BFS) systematická strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Metoda \"nejlepší nejdříve\" (best-first):",
    answers: {
        1: "Je hladová",
        2: "Je úplná",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Používá frontu"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});

questions.push({
    question: "Jak rychle se zvětšuje k-okolí stavu s rostoucím k?",
    answer: "Exponenciálně"
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součet součinů (SOP, DNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    note: "<ul>" +
    "<li>P: Stačí splnit jednu klauzuli a máme vyhráno. A protože v disjunktivní normální formě může být proměnná v klauzuli jen jednou, najít takové ohodnocení je snadné.</li>" +
    "<li>NP: Když je to P, musí to být i NP</li>" +
    "<li>co-NP: Když je to P, musí to být i co-NP</li>" +
    "</ul>",
    correct: {1: 1, 2: 1, 3: 0, 4: 1}
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení kontradikce pro takto zadanou funkci (pro všechna ohodnocení proměnných je funkce rovna $0$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    correct: {1: 0, 2: 0, 3: 0, 4: 1}
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});

questions.push({
    question: "Co znamená, když relativní kvalita ($R$) daného algoritmu je rovna $1$?",
    answer: "Algoritmus je maximálně přesný, vždy dostáváme optimální řešení."
});

questions.push({
    question: "Co znamená pojem \"globální minimum\" u optimalizačních problémů?",
    answer: "Konfigurace, která má nejlepší možnou hodnotu optimalizačního kritéria (cenu) pro každou instanci."
});

questions.push({
    question: "Co znamená pojem \"lokální minimum\" u optimalizačních problémů ?",
    answer: "Lokální minimum znamená, že všechny sousední stavy mají horší hodnotu optimalizačního kritéria.<br>Konfigurace, která splňuje opt. kritérium i omezení v daném čase řešení problému."
});

questions.push({
    question: "Popište princip Las Vegas randomizovaného algoritmu.",
    answer: "Randomizovaný algoritmus: Čas běhu je náhodná proměnná, výsledek je vždy správný. Příklad: Quicksort"
});

questions.push({
    question: "Popište princip Monte Carlo algoritmu.",
    answer: "Randomizovaný algoritmus: Dosažený výsledek (optimalizační kritérium) je náhodná proměnná, čas běhu je pro danou instanci pevný."
});

questions.push({
    question: "Jakým způsobem lze dokázat, že daný problém patří do NPH?",
    answer: "Potřebujeme jen převést SAT na ten náš problém (SAT je NPC → na něj lze převést každý NP)."
});

questions.push({
    question: "Velikost pravidelného k-okolí se s rostoucím k zvětšuje:",
    answers: {
        1: "Lineárně",
        2: "Exponenciálně",
        3: "Vždy jinak"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Od problému nalezení minimální uzlového pokrytí grafu odvoďte rozhodovací problém, který by patřil do třídy P",
    answer: "Minimální uzlové pokrytí: nalezněte minimální množinu uzlů grafu, která inciduje se všemi hranami. " +
    "=> Incidují v dané konfiguraci dané uzly se všemi hranami? NEBO Rozhodovací problém vrcholového pokrytí se ptá, zda-li v daném grafu existuje vrcholové pokrytí maximálně o k vrcholech.",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});

questions.push({
    question: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém nalezení minimálního uzlového pokrytí patří do NPO.",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul>"
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést instanci jakéhokoliv problému na instance NPH problému",
        2: "Převést instanci (NPH) rozhodovacího problému na instanci (NPC) konstuktivního optimalizačního problému",
        3: "Převést instanci konstruktivního optimalizačního problému na instanci rozhodovacího problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPH",
        5: "Převést NPH problém na jiný NPH problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1}
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést instanci jakéhokoliv problému na instanci NPH problému v polynomiálním čase",
        2: "Převést instanci NPC rozhodovacího problému na instanci NPH konstruktivního optimalizačního problému",
        3: "Převést instanci NPH konstruktivního optimalizačního problému na instanci NPC rozhodovacího problému"
    },
    correct: {1: 0, 2: 1, 3: 1}
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést P problém na P problém v polynomiálním čase",
        2: "Převést NPC problém na P problém v exponenciálním čase",
        3: "Převést NPH problém na jiný NPH problém v polynomiálním čase"
    },
    correct: {1: 1, 2: 0, 3: 1}
});

questions.push({
    question: "Co je APX, FPTAS, PTAS, jaké jsou mezi nimi rozdíly?",
    answer: "<b>Algoritmus APR</b> pro problém N je R-aproximativní (eps-aproximativní), jestliže každou instanci N vyřeší v polynomiálním čase s relativní kvalitou R (relativní chybou eps).<br>"+
    		"<b>PTAS (Polynomial Time Approximation Scheme)</b> - Algoritmus APR, který pro každé 1 > eps > 0 vyřeší každou instanci problému N s relativní chybou nejvýše eps v čase polynomiálním v |I| nazýváme polynomiální aproximační schéma problému N.<br>"+
    		"<b>FPTAS (Fully Polynomial Time Approximation Scheme)</b> - Polynomiální aproximační schéma APR, jeho čas výpočtu závisí polynomiálně na 1/eps, nazýváme plně polynomiální aproximační schéma."
});

questions.push({
    question: "Třída NC1, co to je a jak se díky tomu dělá obvodová složitost?",
    answer: "NC = Nick's class je množina rozhodovacích problémů rozhodnutelných v polylogaritmickém čase na paralelním počítači s polynomiálním počtem procesorů."
});

questions.push({
    question: "Co je třída AC0?",
    answer: "Třída AC0 obsahuje jazyky rozpoznatelné booleovskými obvody s hloubkou O(\log^i n) = O(\log^0 n) = O(1) a polynomiálním počtem AND a OR hradel s neomezeným počtem vstupů (unlimited fan-in hradla). Negace je jen na vstupech, AND a OR se střídají."
});

questions.push({
    question: "Co jsou to konfigurační a výstupní proměnné kombinatorického problému? Jaký je mezi nimi rozdíl?",
    answer: "<ul><li><b>Konfigurační proměnné</b> jsou proměnné, kterými dokážu popsat jeden stav</li>"+
            "<li><b>Výstupní proměnné</b> jsou proměnné, kterými dokážu popsat výstup algoritmu</li></ul>"+
            "Mohou být shodné (konstruktivní problémy), nebo odlišné (rozhodovací problémy - konfigurační proměnné jsou třeba vektor a výstupní proměnná je ano/ne)"
});

questions.push({
    question: "Co všechno je nutné dokázat, abychom mohli daný problém zařadit do třídy PTAS (polynomiální aproximační schéma)?",
    answer: "Musí to být aproximativní algoritmus (APR), který pro každé epsilon vyřeší každou instanci problému s relativní chybou nejvýše epsilon v polynomiálním čase v |I|.<br>"+
            "Jde o podmnožinu třídy APX - u té stačilo řešení s relativní kvalitou R a chybou epsilon, nyní je omezení na polynomiální dobu výpočtu podle velikosti instance."
});

questions.push({
    question: "Co všechno je nutné dokázat, abychom mohli daný problém zařadit do třídy FPTAS (plně polynomiální aproximační schéma)?",
    answer: "Aby byl problém FPTAS, tak musí být PTAS a jeho čas výpočtu musí být polynomiálně závislý na 1/eps."
});

questions.push({
    question: "Co jsou NPI problémy?",
    answer: "Problémy, které nelze vyřešit v polynomiálním čase pomocí det. turingova stroje a zároveň na ně nelze redukovat nějaký NPC problém (např. nelze na ně převést SAT).<br>"+
            "Jinými slovy: Jsou to NP, ale nejsou v P ani v NPC."
});

questions.push({
    question: "Co je APX redukce? Co je APX úplný problém? Co je NPO-úplný problém? Jaký mezi sebou mají vztah?",
    answer: "<ul><li>APX redukce - převod jednoho APX problému na druhý APX problém se zachováním aproximace</li>"+
            "<li>APX úplný problém - problém, který patří do třídy APX a zároveň je APX těžký. (APX těžký je problém, na který jdou APX redukovat všechny ostatní APX problémy)</li>"+
            "<li>NPO-úplný problém - problém, který patří do třídy NPO a zároveň je NPO těžky (analogicky s APX)</li>"+
            "<li>Vztah ? TODO</li></ul>"
});

questions.push({
    question: "Co je báze v obvodové složitosti?",
    answer: "Množina komutativních Booleových funkcí (hradel), ze kterých konstruuji Booleův obvod (ohodnocuji každý vnitřní uzel zvoleným hradlem z báze)."
});

questions.push({
    question: "Co je to komunikační složitost a k čemu je dobrá?",
    answer: "Komunikační složitost se používá při vyhodnocení složitosti distribuovaných/paralelních algoritmů.<br>"+
            "Udává, kolikrát si musí jednotlivé výpočetní jednotky vyměnit informace, než dojde ke konci algoritmu/výpočtu."
});

// Doplněné ověřené otázky z FigJam NI-KOP zápočet (část 1–71 z 112 obrázků).
questions.push({
    question: "Jak lze dokázat, že daný rozhodovací problém nepatří do třídy P? Uveďte alespoň dva principiálně odlišné přístupy.",
    answer: "1. **Podmíněný důkaz:** za předpokladu P ≠ NP dokážeme NP-těžkost pomocí polynomiální redukce známého NP-úplného problému na zkoumaný problém. Kdyby byl v P, platilo by P = NP.<br>2. **Nepodmíněný důkaz:** dokážeme superpolynomiální dolní mez pro každý deterministický algoritmus řešící daný problém v uvažovaném výpočetním modelu (např. vhodným argumentem z hierarchie časových tříd). Takové důkazy bývají mimořádně obtížné.",
    note: "FigJam: obrázek 11 (uzel 1:93). **Pozor:** ve zdrojové studentské odpovědi je jako druhá možnost uvedena neověřitelnost certifikátu v polynomiálním čase; samotná absence známého ověřovače není důkazem, že problém nepatří do P. Zde je uvedeno odborné upřesnění."
});

questions.push({
    question: "Navrhněte souvislý symetrický stavový prostor pro problém Minimum Bin Packing: n věcí má dané velikosti, kontejnery mají kapacitu B a chceme minimalizovat jejich počet. Popište konfiguraci, stavy a operátory.",
    answer: "Konfigurace přiřazuje každé z n věcí číslo kontejneru; lze předem připustit nejvýše n očíslovaných kontejnerů. Pro konstrukční hledání může stav obsahovat také dosud nepřiřazené věci. Operátory: (1) přiřaď jednu nepřiřazenou věc do zvoleného kontejneru, (2) odeber přiřazenou věc zpět mezi nepřiřazené. Jde o vzájemně inverzní akce; jakýkoli stav lze přes prázdné přiřazení převést na jiný, proto je prostor souvislý a symetrický. Aby to platilo bez výjimek, mohou mezistavy dočasně porušovat kapacitu B a mít penalizaci; výsledná řešení musí dodržet kapacity a každá věc musí být umístěna právě jednou.",
    note: "FigJam: obrázek 18 (uzel 2:35). Definice stavů a dvojice inverzních operátorů navazuje na původní odpověď; vysvětlení relaxace a souvislosti je doplněno."
});

questions.push({
    question: "Zformulujte NP-úplnou rozhodovací verzi optimalizačního problému nalezení maximální kliky v grafu.",
    answer: "Vstup: neorientovaný graf G=(V,E) a celé číslo K. Otázka: **Existuje v G klika obsahující alespoň K vrcholů?** (Rozhodovací problém CLIQUE.) Jde o NP-úplný problém. U kladné instance tvoří certifikát množina K vybraných vrcholů a lze ověřit, že každé dva z nich jsou spojeny hranou.",
    note: "FigJam: obrázek 21 (uzel 2:53). Otázka na formulaci rozhodovací varianty; nepřidává se další kopie stejné formulace."
});

questions.push({
    question: "Navrhněte souvislý symetrický stavový prostor pro Minimum Multiprocessor Scheduling: máte množinu úloh T, m procesorů a kladné časy trvání t_j. Minimalizujete maximální součet časů úloh přiřazených jednomu procesoru. Uveďte stavy, konfigurační proměnné a operátory.",
    answer: "Konfigurací je přiřazení každé úlohy právě jednomu z m procesorů; lze ji reprezentovat uspořádanými seznamy úloh pro jednotlivé procesory. Stav konstrukčního hledání obsahuje tyto seznamy a množinu nepřiřazených úloh. Operátory: (1) připojit jednu nepřiřazenou úlohu na konec seznamu zvoleného procesoru, (2) odebrat poslední úlohu ze seznamu procesoru zpět mezi nepřiřazené. Akce jsou vzájemně inverzní. Každý stav lze postupně vyprázdnit a poté vystavět jiný, takže stavový prostor je souvislý a symetrický. Cena úplného rozvrhu je max_i Σ_{j přiřazeno i} t_j.",
    note: "FigJam: obrázek 38 (uzel 2:143). Zachována formulace příkladu a návrh operátorů."
});

questions.push({
    question: "Odvoďte z úlohy maximální kliky rozhodovací problém z třídy co-NP-úplných problémů a zapište jeho otázku.",
    answer: "Vstup: graf G a celé číslo K. Otázka: **Platí, že každá klika v G obsahuje méně než K vrcholů?** Ekvivalentně: v grafu neexistuje klika velikosti alespoň K. Je to doplněk NP-úplného rozhodovacího problému CLIQUE a je tedy co-NP-úplný (pro standardní polynomiální many-one redukce). Pozor: otázka musí zahrnovat všechny kliky, nikoli pouze jednu nalezenou.",
    note: "FigJam: obrázek 49 (uzel 2:200). Původní zadání se týká komplementární rozhodovací varianty."
});

questions.push({
    question: "Pro rozhodovací problém CLIQUE (existuje v grafu G klika velikosti alespoň K?) navrhněte konfigurační proměnné a omezení a dokažte, že problém patří do NP.",
    answer: "Pro každý vrchol v∈V zavedeme bit x_v∈{0,1}; hodnota 1 znamená, že vrchol vybereme. Omezení: Σ_v x_v ≥ K a pro každé dva různé nesousední vrcholy u,v nesmí současně platit x_u=x_v=1. Certifikátem je bitový vektor délky |V|. Ověření zahrnuje počet vybraných vrcholů a kontrolu sousednosti všech vybraných dvojic, nejvýše O(|V|²) kontrol, tedy polynomiálně. Tím dokazujeme CLIQUE∈NP; NP-těžkost se dokazuje samostatnou redukcí.",
    note: "FigJam: obrázky 53 (uzel 2:216) a 63 (uzel 2:264). Dvě vyobrazení stejné úlohy; odpověď zpřesňuje požadavek velikosti na alespoň K."
});

// Úlohy doplněné z NI-KOP uzavřené otázky.pdf (2022–2024 / starší testy).
// Témata Tabu nejsou v osnově 2026: záměrně nejsou přiřazena k přednáškám.

questions.push({
    "question": "Dynamické programování může:",
    "answers": {
        "1": "uváznout v lokálním minimu",
        "2": "potřebovat velikost paměti, kterou nelze odvodit jen z velikosti instance",
        "3": "potřebovat paměť o velikosti omezené polynomem ve velikosti instance",
        "4": "divergovat"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 5; ID DP-01. Klíč podle tučného zvýraznění v dokumentu; tvrzení o paměti neznamená, že DP vždy vyžaduje superpolynomiální prostor."
});

questions.push({
    "question": "DP řeší grafový problém: podinstance se vybírají podle (p,q), kde p je uzel, q hrana; musí se spočítat všechny. Dekompozice a kompozice trvá O(n). Co platí?",
    "answers": {
        "1": "Čas má v nejhorším případě horní mez O(n⁴) při O(n³) podinstancích a práci O(n) na podinstanci.",
        "2": "Celková složitost je nejvýše O(n³).",
        "3": "Algoritmus je nutně pseudopolynomiální.",
        "4": "Jde o globální metodu.",
        "5": "Bez úspory paměti může tabulka obsahovat O(n³) podinstancí."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 5; ID DP-02. Zdroj označuje A,D,E; n značí počet uzlů, počet hran je nejvýše O(n²). Původní A říká 'nejméně se čtvrtou mocninou', což bez dodatečných předpokladů neplyne; zde je tvrzení formulováno jako horní mez."
});

questions.push({
    "question": "DP pro graf: klíč (p,q), index uzlu a hrany, konstantní dekompozice a kompozice, potřeba spočítat všechny podinstance. Co platí?",
    "answers": {
        "1": "Musí mít exponenciální čas.",
        "2": "Nutně je pseudopolynomiální.",
        "3": "Počet položek a čas lze omezit O(n³).",
        "4": "Bez využití vrstev lze paměť omezit O(n³)."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 5; ID DP-03. O(n) uzlů krát O(n²) hran."
});

questions.push({
    "question": "DP používá jako klíč k-tici binárních proměnných, kde k=log₂ N a N je délka vstupu. Každá podinstance se řeší jednou, dekompozice i kompozice jsou konstantní. Co platí?",
    "answers": {
        "1": "Počet podinstancí je O(N).",
        "2": "Algoritmus je nutně pseudopolynomiální.",
        "3": "Algoritmus má polynomiální čas.",
        "4": "DP při správné dekompozici poskytuje exaktní řešení."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 6; ID DP-04. V PDF jsou tučně A,C,D."
});

questions.push({
    "question": "DP používá klíč tvořený N binárními proměnnými, kde N je velikost vstupu, a může potřebovat všechny podinstance. Jak se mění počet stavů?",
    "answers": {
        "1": "Nejvýše O(N).",
        "2": "Může být až 2^N.",
        "3": "Vždy je O(N²).",
        "4": "Algoritmus je automaticky lokální heuristikou."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 6; ID DP-05. Zdroj na s. 6 nemá vyznačenou odpověď; 2^N plyne z počtu ohodnocení N bitů (matematické doplnění)."
});

questions.push({
    "question": "DP používá klíč (p,q), kde p,q∈{0,…,n}; každá podinstance se zpracuje jednou s konstantní prací. Jaká je složitost vyhodnocení celé tabulky?",
    "answers": {
        "1": "O(2^n)",
        "2": "O(n³)",
        "3": "O(n)",
        "4": "O(n²)"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 6; ID DP-06. Počet dvojic je (n+1)²; v originálu na s. 6–7 je jako správné označeno, že metoda je polynomiální."
});

questions.push({
    "question": "DP na permutačním problému používá jako klíč libovolnou podmnožinu n prvků. Existují instance, kde se vypočte všech 2^n podinstancí; cena jedné je Θ(n²). Co platí?",
    "answers": {
        "1": "Čas roste alespoň exponenciálně.",
        "2": "Algoritmus je nutně pseudopolynomiální.",
        "3": "Algoritmus je polynomiální.",
        "4": "Horní mez celkového času je O(n²·2^n)."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 7; ID DP-07. PDF str. 7, původní správné možnosti A,D."
});

questions.push({
    "question": "DP používá jako klíč libovolnou podmnožinu n prvků a vypočítá všechny podinstance s prací Θ(n) na podinstanci. Co lze tvrdit?",
    "answers": {
        "1": "Počet podinstancí je O(n²).",
        "2": "Čas je Θ(n·2^n).",
        "3": "Jde o polynomiální algoritmus.",
        "4": "Počet podinstancí je 2^n."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 7; ID DP-08. Původní otázka na s. 7 neobsahovala spolehlivě vyznačený klíč; výsledek doplněn matematickým výpočtem."
});

questions.push({
    "question": "DP vybírá optimální podmnožinu n prvků a musí vypočítat výsledky pro všechny podmnožiny. Co platí o počtu podinstancí?",
    "answers": {
        "1": "Je exponenciální, totiž 2^n.",
        "2": "Je kvadratický.",
        "3": "Je lineární.",
        "4": "Je polynomiální."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 7; ID DP-09. Odpovídá příkladu na s. 7."
});

questions.push({
    "question": "DP pro graf má podinstance označené libovolnými podmnožinami n uzlů a v některých instancích musí vypočítat všechny. Jaká metoda to je?",
    "answers": {
        "1": "Globální metoda.",
        "2": "Z definice pseudopolynomiální.",
        "3": "Nutně lineární.",
        "4": "Nutně polynomiální."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 8; ID DP-10. V PDF je tučně A; výpočet všech 2^n podmnožin vylučuje polynomiální horní mez tohoto postupu."
});

questions.push({
    "question": "DP pro graf zpracovává všechny podmnožiny n uzlů, a práci potřebnou pro každou podinstanci lze provést v O(1). Jaká je celková časová složitost?",
    "answers": {
        "1": "O(n)",
        "2": "O(n²)",
        "3": "O(n³)",
        "4": "Θ(2^n)"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 8; ID DP-11. Přesná matematická interpretace s. 8."
});

questions.push({
    "question": "Která tvrzení o dynamickém programování jsou správná?",
    "answers": {
        "1": "Vždy dává jen suboptimální řešení.",
        "2": "Vždy řeší každý problém z NP v polynomiálním čase.",
        "3": "Některé problémy řeší v polynomiálním čase.",
        "4": "Typicky používá přesnou či čistou dekompozici a opakované využití podvýsledků."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 8; ID DP-12. Podle tučných položek na s. 8; formulace 4 doplněna o charakteristickou paměť."
});

questions.push({
    "question": "Dynamické programování obecně:",
    "answers": {
        "1": "může být exaktní metodou",
        "2": "zaručuje polynomiální čas bez dalších podmínek",
        "3": "je vždy aproximační",
        "4": "využívá dekompozici problému"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 8; ID DP-13. Podle tučných odpovědí na s. 8."
});

questions.push({
    "question": "Pro některé problémy je dynamické programování:",
    "answers": {
        "1": "vždy lokální metodou",
        "2": "pouze přibližnou dekompozicí",
        "3": "nutně suboptimální",
        "4": "pseudopolynomiální"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 8; ID DP-14. Podle závěru s. 8."
});

questions.push({
    "question": "DP musí vyhodnotit všechny podmnožiny n-prvkové množiny (bez možnosti obejít tento krok). Co z toho plyne?",
    "answers": {
        "1": "Počet podinstancí je exponenciální.",
        "2": "Je zaručena pseudopolynomiální složitost.",
        "3": "Je polynomiální.",
        "4": "Jde o globální metodu."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 9; ID DP-15. Zdroj s. 9. Všech 2^n podmnožin."
});

questions.push({
    "question": "DP pro graf používá klíč (p,q), p je index uzlu a q index hrany. Kolik různých klíčů může být při n uzlech?",
    "answers": {
        "1": "Nejvýše O(n³).",
        "2": "Nejvýše O(n).",
        "3": "Vždy pseudopolynomiálně mnoho.",
        "4": "Jde o globální metodu."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 9; ID DP-16. Nejvýše n·O(n²)=O(n³); v PDF na s. 9 je A,D."
});

questions.push({
    "question": "DP používá podinstance tvořené prvními m uzly grafu na n vrcholech; pro každý stupeň má kompozice i dekompozice dolní mez Ω(n). Co plyne pro celý výpočet všech stupňů?",
    "answers": {
        "1": "Nutně horní mez O(n³).",
        "2": "Dolní mez Ω(n²).",
        "3": "Vždy lineární složitost.",
        "4": "Vždy exponenciální složitost."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 9; ID DP-17. Přesná formulace dolní meze na základě zdroje s. 9: n stupňů × Ω(n) práce."
});

questions.push({
    "question": "DP řeší pro každé n pouze Θ(log P) podinstancí s konstantní kompozicí a dekompozicí. Která časová mez vzhledem k délce binárního zápisu P je přirozená?",
    "answers": {
        "1": "Exponenciální podle log P.",
        "2": "Θ(n·P).",
        "3": "Kubická podle P.",
        "4": "O(n·log P), tedy polynomiální."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 9; ID DP-18. Podle zdroje s. 9 (D); pokud počet stupňů n odpovídá velikosti vstupu."
});

questions.push({
    "question": "DP postupně zpracovává všech m hran grafu; každá hrana má celočíselnou váhu do M a práce na jednom kroku je Θ(log M). Co platí?",
    "answers": {
        "1": "Nutně lineární čas vzhledem k bitové velikosti vstupu.",
        "2": "Nutně exponenciální čas.",
        "3": "Čas O(m·log M) je polynomiální vůči binárnímu zápisu instance.",
        "4": "Nutně pseudopolynomiální čas."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 9; ID DP-19. S. 9–10, tučně je polynomiální čas."
});

questions.push({
    "question": "Globální rekurzivní metoda na grafu rozloží instanci o n uzlech na dvě podinstance velikosti n/2; dekompozice je O(n), kompozice O(1). Co platí?",
    "answers": {
        "1": "Musí vždy nalézt optimální řešení bez ohledu na povahu dekompozice.",
        "2": "Časová složitost je O(n²).",
        "3": "Čas je alespoň lineární.",
        "4": "Zaručeně jde o pseudopolynomiální algoritmus.",
        "5": "Má polynomiální čas."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 0,
        "5": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 25; ID GLOB-01. S. 25; T(n)=2T(n/2)+O(n)=O(n log n). Původní F je totéž co zde 5."
});

questions.push({
    "question": "Globální metoda s přesnou dekompozicí vytvoří z velikosti n dvě podinstance velikosti n−1, kompozice i dekompozice mají konstantní cenu. Jaký je vývoj počtu rekurzivních volání při přímé rekurzi?",
    "answers": {
        "1": "Θ(n)",
        "2": "Θ(n²)",
        "3": "Θ(2^n)",
        "4": "Θ(log n)"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 25; ID GLOB-02. S. 25, otázka bez vyznačených odpovědí; odvozeno z T(n)=2T(n−1)+O(1). Z toho samotného neplyne, že memoizace zaručí polynomiální čas."
});

questions.push({
    "question": "Globální metoda rozděluje instanci grafu a celého čísla M na poloviny uzlů, cena dekompozice O(n·log M). Která tvrzení platí vzhledem k bitové délce vstupu?",
    "answers": {
        "1": "Dekompozici lze provést v polynomiálním čase.",
        "2": "Strom rekurze při dělení na poloviny má O(N) podinstancí/uzlů, kde N je počet vrcholů grafu.",
        "3": "Složitost je nutně pseudopolynomiální.",
        "4": "Dynamické programování je nutně pseudopolynomiální."
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 25; ID GLOB-03. S. 25, tučně A,B. O(N) jako počet uzlů stromu při zjednodušeném půlení (přesně záleží na stop podmínce)."
});

questions.push({
    "question": "Jaká tvrzení o globálních metodách a dekompozici platí?",
    "answers": {
        "1": "Všechny globální metody vždy dávají exaktní optimum.",
        "2": "Přibližná dekompozice vždy dává exaktní řešení.",
        "3": "Čistá dekompozice může zachovat exaktnost.",
        "4": "Přesná dekompozice může zachovat exaktnost.",
        "5": "Globální metody používají rekurzivní formulaci."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1,
        "5": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 25; ID GLOB-04. PDF s. 25, tučně C,D,E. Slovo 'může' respektuje potřebu korektní kompozice."
});

questions.push({
    "question": "Co lze obecně tvrdit o globálních metodách?",
    "answers": {
        "1": "Jsou založeny na povinném explicitním prohledávání každého stavu.",
        "2": "Vždy jsou polynomiální pro NP-těžké problémy.",
        "3": "Základem je dekompozice problému.",
        "4": "Často mají rekurzivní formulaci."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 26; ID GLOB-05. PDF s. 25–26, zdroj označuje D,E; není automaticky zaručen polynomiální čas."
});

questions.push({
    "question": "Pro globální metody používající čistou dekompozici platí:",
    "answers": {
        "1": "Každá globální metoda musí najít řešení každé instance.",
        "2": "Každá přibližná dekompozice nutně najde exaktní řešení.",
        "3": "Pokud čistá dekompozice nenalezne žádné řešení a algoritmus je korektní, původní instance nemá řešení.",
        "4": "Globální metody typicky mají rekurzivní formulaci."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 26; ID GLOB-06. S. 26, tučně D,E."
});

questions.push({
    "question": "Tabu search: k optimalizačnímu kritériu přidáme pokutu za tah, jehož Hammingova vzdálenost překročí práh. Jde o:",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "omezení okolí"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 11; ID TABU-01. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search: zakázaný tah je přesto proveden, jestliže využívá velmi zřídka navštívené uzly. Jakou roli opatření plní?",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "aspirační kritérium"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 11; ID TABU-02. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search: překonáme tabu, když kandidátní cesta dosud vůbec nebyla navštívena, a jinak penalizujeme často používané uzly. Jaké mechanismy jsou přítomné?",
    "answers": {
        "1": "diverzifikace",
        "2": "intenzifikace",
        "3": "aspirace"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 11; ID TABU-03. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search: tah dostane pokutu, pokud četnost použití jeho uzlů převyšuje průměr. Opatření podporuje:",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "aspiraci"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 11; ID TABU-04. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search: při bitu s vysokou dosavadní četností 1 je dovoleno tabu porušit a bit znovu nastavit na 1. Jde o:",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "pouhé omezení okolí"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 11; ID TABU-05. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. V originálu práh >0,7."
});

questions.push({
    "question": "Tabu search: tabu lze porušit nastavením vzácného bitu do 1 (četnost <0,3) nebo častého bitu do 0 (četnost >0,7). Opatření podporuje:",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "omezení okolí"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-06. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. Zdroj u varianty výslovně upozorňuje, že některé odpovědi nejsou ověřené."
});

questions.push({
    "question": "Tabu search s binárním vektorem: tahy s Hammingovou vzdáleností větší než K jsou tabu. Chceme zvýšit diverzifikaci. Jak změnit K?",
    "answers": {
        "1": "snížit K",
        "2": "zvýšit K",
        "3": "K nemá vliv"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-07. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search: prolomení tabu povolíme, pokud četnost uzlu je menší než K procent průměru. Chceme zvýšit intenzifikaci. Jak změnit K?",
    "answers": {
        "1": "snížit K",
        "2": "zvýšit K",
        "3": "K nemá vliv"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-08. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search konverguje pomalu, ale dává kvalitní výsledky. Jaké opatření je podle staršího testu vhodné?",
    "answers": {
        "1": "aspirační kritérium spouštěné dosud nejlepším řešením",
        "2": "aspirační kritérium pro nízkou četnost tahu",
        "3": "odměna za nízkou četnost tahu"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-09. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. Toto historické doporučení je kontextové, nikoli univerzální záruka."
});

questions.push({
    "question": "Tabu search často uvázne v lokálním optimu. Které změny mohou pomoci diverzifikaci?",
    "answers": {
        "1": "zkrácení tabu lhůty",
        "2": "aspirace při nízké frekvenci atributů tahu",
        "3": "odměna za nízkou frekvenci atributů tahu"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-10. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search pro TSP: tabu zakážeme často použité hrany, ale povolíme tah, pokud zlepšení kritéria překročí práh. Jde o:",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "aspiraci"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 12; ID TABU-11. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. Podle původně tučně označených B,C; pojem samotného prolomení tabu odpovídá aspiraci."
});

questions.push({
    "question": "Tabu search: tah je zakázán při změně více než poloviny bitů, ale povolí se, pokud některý bit získá dosud nevyzkoušenou hodnotu. Co to podporuje?",
    "answers": {
        "1": "diverzifikaci",
        "2": "intenzifikaci",
        "3": "aspiraci"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-12. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Potřebujeme zvýšit diverzifikaci v tabu prohledávání. Které změny jsou ve starším testu doporučeny?",
    "answers": {
        "1": "zkrátit tabu lhůtu",
        "2": "aspirační kritérium pro málo používané atributy",
        "3": "odměna za malou četnost atributů tahu"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-13. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Potřebujeme zvýšit intenzifikaci v tabu prohledávání. Které změny jsou ve starším testu doporučeny?",
    "answers": {
        "1": "zkrátit tabu lhůtu",
        "2": "aspirace pro velmi nízkou frekvenci atributů",
        "3": "odměna za málo používané atributy",
        "4": "aspirační kritérium při vysoké frekvenci atributů"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-14. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu prohledávání často uvázne v lokálním optimu. Jaké postupy mohou pomoci?",
    "answers": {
        "1": "prodloužit tabu lhůtu",
        "2": "restartovat od dosud nejlepšího řešení",
        "3": "restartovat od náhodného řešení"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-15. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Tabu search pro TSP: jako tabu atribut použijeme jen výslednou dvojici hran místo celé záměny. Co to může způsobit?",
    "answers": {
        "1": "větší diverzifikaci",
        "2": "větší intenzifikaci",
        "3": "silnější omezení aktuálního okolí"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-16. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Jaká strategie prohledávání okolí je typická pro tabu search podle původního testu?",
    "answers": {
        "1": "první zlepšení nebo přijatelné zhoršení",
        "2": "pouze nejlepší soused"
    },
    "correct": {
        "1": 0,
        "2": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 13; ID TABU-17. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. Znění používá terminologii dokumentu. Standardní tabu search často vybírá nejlepší přípustný tah i při zhoršení."
});

questions.push({
    "question": "K čemu lze u tabu search využít dlouhodobou paměť?",
    "answers": {
        "1": "diverzifikace",
        "2": "intenzifikace",
        "3": "omezování prohledávaného okolí"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 14; ID TABU-18. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Které účinky může mít pravidlo, podle kterého je tah tabu?",
    "answers": {
        "1": "diverzifikace",
        "2": "intenzifikace",
        "3": "omezení okolí"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 14; ID TABU-19. Historická látka Tabu – dle PDF již není součástí předmětu; zařazeno pouze do archivu. "
});

questions.push({
    "question": "Metoda Kernighan–Lin má následující vlastnosti:",
    "answers": {
        "1": "je založena na konstrukci proměnného okolí",
        "2": "okolí prohledává metodou pouze nejlepší",
        "3": "je primárně založena na prořezávání B&B",
        "4": "vždy dává lepší výsledek než metoda nejlepší nejdříve"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 0,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 30; ID KERN-01. Dvě tučně označené možnosti dle PDF s. 30."
});

questions.push({
    "question": "Instance problému splnění podmínek má n konfiguračních proměnných a každá má d hodnot. Jak velký je prostor úplných ohodnocení a prostor s jednou hodnotou 'nepřiřazeno' na proměnnou?",
    "answers": {
        "1": "úplný stavový prostor má n^d prvků",
        "2": "úplný stavový prostor má d^n prvků",
        "3": "prostor úplných a částečných ohodnocení má (d+1)^n prvků",
        "4": "počet částečných ohodnocení je vždy d^(2n)"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 0
    },
    "note": "Zdroj: NI-KOP uzavřené otázky.pdf, str. 32; ID CSP-01. PDF s. 32, správné B,C."
});
