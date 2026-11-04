/* AI-generated study questions based on ANI-KOP01.pdf; not authentic exam questions. */
window.aiGeneratedQuestionSets = window.aiGeneratedQuestionSets || {};
window.aiGeneratedQuestionSets[1] = [
  {
    "question": "Která tvrzení správně odlišují problém a jeho instanci?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "5–9",
    "aiTopic": "Problém versus instance",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Jedna instance může mít více optimálních konfigurací. Výstup navíc může být číslo nebo ANO/NE, zatímco konfigurace popisuje kandidátní řešení. <i>Zdroj: ANI-KOP01.pdf, s. 5–9.</i>",
    "answers": {
      "1": "Problém je určen obecnými vstupními, výstupními a konfiguračními proměnnými, omezeními a případným kritériem.",
      "2": "Instance vznikne dosazením konkrétních hodnot vstupních proměnných.",
      "3": "Každá instance automaticky určuje jednu optimální konfiguraci.",
      "4": "Konfigurační proměnné musí být vždy totožné s výstupními."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0
    }
  },
  {
    "question": "Pro batoh s n předměty modelovaný bity x_i∈{0,1} platí:",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "8–15",
    "aiTopic": "Konfigurace a přípustnost",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Konfigurace je libovolné ohodnocení bitů; přípustné řešení navíc splňuje kapacitní omezení. <i>Zdroj: ANI-KOP01.pdf, s. 8–15.</i>",
    "answers": {
      "1": "Počet všech binárních konfigurací je 2^n.",
      "2": "Každá z 2^n konfigurací je nutně přípustná.",
      "3": "Jedna konfigurace jednoznačně říká, které předměty byly vybrány.",
      "4": "Při porušení kapacity jde o konfiguraci, ale nikoli o řešení."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Batoh: M=6, váhy (2,3,5), ceny (10,20,30). Které podmnožiny jsou přípustné?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "12",
    "aiTopic": "Výpočet na instanci",
    "difficulty": "základní",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Prázdná množina váží 0, {u1,u2} váží 5 a {u3} váží 5. Ostatní uvedené dvojice překračují kapacitu 6. <i>Zdroj: ANI-KOP01.pdf, s. 12.</i>",
    "answers": {
      "1": "∅",
      "2": "{u1,u2}",
      "3": "{u1,u3}",
      "4": "{u2,u3}",
      "5": "{u3}"
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0,
      "5": 1
    }
  },
  {
    "question": "Pro stejný batoh M=6, c=(10,20,30), w=(2,3,5) jsou správná tvrzení:",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "12",
    "aiTopic": "Nejednoznačné optimum",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. U3 a {u1,u2} jsou dvě přípustná optima. Shoda optimální ceny neimplikuje jedinečnost optimální konfigurace. <i>Zdroj: ANI-KOP01.pdf, s. 12.</i>",
    "answers": {
      "1": "Optimální cena je 30.",
      "2": "Existují dvě různá optimální řešení.",
      "3": "Optimální musí být jediná konfigurace.",
      "4": "Podmnožina {u1,u2} má cenu 30 a váhu 5.",
      "5": "Vybrání všech tří předmětů dává přípustné řešení."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1,
      "5": 0
    }
  },
  {
    "question": "Které požadavky jsou důležité pro vhodnou reprezentaci konfigurací?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "13, 16–18",
    "aiTopic": "Kvalita reprezentace",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Reprezentace nesmí vyloučit potřebná řešení; nemusí však nutně pokrýt každý nepřípustný objekt. Praktické vlastnosti reprezentace ovlivňují algoritmus. <i>Zdroj: ANI-KOP01.pdf, s. 13, 16–18.</i>",
    "answers": {
      "1": "Umožnit reprezentovat všechna potřebná přípustná řešení.",
      "2": "Zajistit, že z každé reprezentace lze vyhodnotit omezení a kritérium.",
      "3": "Vždy reprezentovat také všechny možné neplatné objekty, jinak je model chybný.",
      "4": "Mít rozumnou velikost a podporovat operace potřebné algoritmem."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "V grafové úloze TSP je přirozené rozlišit:",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "19–27",
    "aiTopic": "TSP a reprezentace",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Permutace je způsob zápisu; v neúplném grafu mohou některé navazující hrany chybět. Vstupní graf popisuje možnosti, trasa je podgraf nebo jiné reprezentované řešení. <i>Zdroj: ANI-KOP01.pdf, s. 19–27.</i>",
    "answers": {
      "1": "Konfigurační objekt jako podgraf tvořící kandidátní okruh.",
      "2": "Pořadí vrcholů (permutaci) jako jednu z možných reprezentací okruhu.",
      "3": "Pořadí měst je vždy přípustný Hamiltonovský okruh i v neúplném grafu.",
      "4": "Graf vstupní instance je totéž co jediná kandidátní trasa."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0
    }
  },
  {
    "question": "Pro úlohu vrtání otvorů s konfigurací 'pořadí navštívení' odpovídají typy výstupu následujícím otázkám:",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "5–7, 29–32",
    "aiTopic": "Typy problémů",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Konstruktivní varianta vrací objekt, vyhodnocovací cenu, rozhodovací ANO/NE a enumerační všechny požadované objekty. <i>Zdroj: ANI-KOP01.pdf, s. 5–7, 29–32.</i>",
    "answers": {
      "1": "'Existuje trasa délky nejvýše K?' → rozhodovací typ.",
      "2": "'Jaká je nejmenší možná délka?' → vyhodnocovací optimalizační typ.",
      "3": "'Vypiš všechny optimální trasy' → enumerační optimalizační typ.",
      "4": "'Najdi jednu nejkratší trasu' → počítací typ."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Co se typicky mění při převodu konstruktivního optimalizačního problému na rozhodovací verzi 'existuje řešení s cenou nejvýše K'?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "29–32",
    "aiTopic": "Rozhodovací optimalizační verze",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Rozhodovací optimalizační varianta testuje existenci přípustné konfigurace s omezenou cenou; pracuje se stejným jádrem modelu. <i>Zdroj: ANI-KOP01.pdf, s. 29–32.</i>",
    "answers": {
      "1": "Přibývá mez K mezi vstupní údaje.",
      "2": "Výstup se mění z konkrétní konfigurace na ANO/NE.",
      "3": "Nutně se změní i všechny konfigurační proměnné.",
      "4": "Je nutné vypisovat všechny optimální konfigurace."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0
    }
  },
  {
    "question": "Pro booleovskou formuli F jsou správná přiřazení zadání k typu úlohy:",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "36–40",
    "aiTopic": "SAT varianty",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. MAX-SAT maximalizuje počet splněných klauzulí; SAT samotný rozhoduje existenci úplně splňujícího ohodnocení. <i>Zdroj: ANI-KOP01.pdf, s. 36–40.</i>",
    "answers": {
      "1": "SAT: zjistit, zda existuje splňující ohodnocení.",
      "2": "#SAT: spočítat počet splňujících ohodnocení.",
      "3": "Enumerační SAT: vypsat všechny splňující ohodnocení.",
      "4": "SAT: vždy najít ohodnocení maximalizující počet splněných klauzulí."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jak se liší MAX-SAT a Max-Ones-SAT?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "39–42",
    "aiTopic": "MAX-SAT versus Max-Ones-SAT",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Klíčová je role F: u MAX-SAT je počet splněných klauzulí kritériem, u Max-Ones-SAT musí být F celá splněna. <i>Zdroj: ANI-KOP01.pdf, s. 39–42.</i>",
    "answers": {
      "1": "MAX-SAT maximalizuje počet splněných klauzulí a nemusí vyžadovat splnění celé formule.",
      "2": "Max-Ones-SAT maximalizuje počet jedniček mezi ohodnoceními, která splňují F.",
      "3": "Obě úlohy mají vždy stejnou optimální konfiguraci.",
      "4": "Nesplnitelná F může mít řešení MAX-SAT, ale nemá přípustné řešení Max-Ones-SAT."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Které výroky o konfiguraci, řešení a optimu jsou pravdivé?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "8–9, 12",
    "aiTopic": "Formální hierarchie pojmů",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Konfigurace je ohodnocení, řešení splňuje omezení, optimum je nejlepší přípustné řešení podle kritéria. <i>Zdroj: ANI-KOP01.pdf, s. 8–9, 12.</i>",
    "answers": {
      "1": "Každé přípustné řešení je konfigurací.",
      "2": "Každá konfigurace automaticky splňuje omezení.",
      "3": "Každé optimální řešení je přípustné.",
      "4": "Optimální cena může náležet více konfiguracím."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Sestavte úplný matematický model batohu 0/1 s n předměty. Jasně oddělte vstup, proměnné, omezení, kritérium a výstup.",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "10–15, 29–32",
    "aiTopic": "Formální model batohu",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Záměrně oddělujeme hodnoty vstupních proměnných od kandidátního řešení a výstupního typu. <i>Zdroj: ANI-KOP01.pdf, s. 10–15, 29–32.</i>",
    "answer": "Vstup: n, kapacita M, váhy w_i a ceny c_i. Konfigurační proměnné x_i∈{0,1}. Omezení: Σ_i w_i x_i≤M. Kritérium: maximalizovat Σ_i c_i x_i. Konstruktivní výstup: množina {i: x_i=1}; vyhodnocovací výstup: optimální cena; rozhodovací varianta přidává K a ptá se, zda existuje přípustná konfigurace s cenou ≥K."
  },
  {
    "question": "Pro danou úlohu vrtání n otvorů popište, co testuje hrubá síla, pokud požadovaným výstupem není trasa, nýbrž pouze její minimální délka.",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "5–8",
    "aiTopic": "Brute force a výstup",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Toto je záměrně nový příklad použití kontrastu konfigurace a výstupu, který je výslovně rozebírán na s. 7. <i>Zdroj: ANI-KOP01.pdf, s. 5–8.</i>",
    "answer": "Hrubá síla prochází kandidátní pořadí otvorů (konfigurační proměnné). U každé permutace vyhodnotí přípustnost a délku trasy a udržuje nejmenší nalezenou hodnotu. Výstupní proměnnou je číslo – optimální délka. Konfigurační proměnné proto nejsou totéž co výstupní proměnné."
  },
  {
    "question": "Vymezte rozhodovací, konstruktivní, počítací, enumerační a vyhodnocovací variantu optimalizace na příkladu TSP.",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "29–33",
    "aiTopic": "Všechny typy TSP",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Nezaměňujte počítání objektů splňujících práh K s hledáním optimální ceny; prezentace přesně rozlišuje tyto varianty. <i>Zdroj: ANI-KOP01.pdf, s. 29–33.</i>",
    "answer": "Rozhodovací: existuje okruh délky ≤K? Konstruktivní: najdi jeden nejkratší okruh. Počítací (optimalizační varianta se zadanou mezí): kolik okruhů má délku ≤K? Enumerační optimalizační: vypiš všechny okruhy s optimální cenou. Vyhodnocovací optimalizační: urči délku nejkratšího okruhu. Všechny pracují s podobnými konfiguracemi, ale mají rozdílný výstup a někdy navíc vstup K."
  },
  {
    "question": "Je permutace vrcholů vždy vhodnou reprezentací libovolného podgrafu vstupního grafu? Vysvětlete vztah k úloze TSP.",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "16–27",
    "aiTopic": "Abstraktní objekt versus reprezentace",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Zdůvodněte odpověď tím, co reprezentace musí pokrýt, nikoli pouze podobností se zápisem okruhu. <i>Zdroj: ANI-KOP01.pdf, s. 16–27.</i>",
    "answer": "Ne. Permutace může dobře reprezentovat Hamiltonovský okruh, pokud máme dostatečné informace o navazujících hranách, ale obecný podgraf ani ne-Hamiltonovské kandidáty takto nepokryjeme. Je-li třeba procházet i jiné podgrafy, musíme použít reprezentaci schopnou vyjádřit požadovanou množinu konfigurací (např. incidenci hran)."
  },
  {
    "question": "Pro formuli F rozlište MAX-SAT a optimalizaci počtu pravdivých proměnných při splnění F. Co nastane, není-li F splnitelná?",
    "aiGenerated": true,
    "lecture2026": 1,
    "sourceSlides": "ANI-KOP01.pdf",
    "sourcePages": "39–42",
    "aiTopic": "Dvě rodiny optimalizace SAT",
    "difficulty": "střední",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L1.</b> Není převzato ze skutečného testu. Stejná logická formule může být u jedné varianty podmínkou a u jiné součástí kritéria; jde o rozdílné modely. <i>Zdroj: ANI-KOP01.pdf, s. 39–42.</i>",
    "answer": "MAX-SAT: optimalizuje počet splněných klauzulí; každé ohodnocení je kandidátem a lze nalézt nejlepší i při nesplnitelné F. Max-Ones-SAT (s úplným splněním F): omezení F(Y)=1 a kritérium max Σ_i Y_i. Je-li F nesplnitelná, neexistuje žádná přípustná konfigurace Max-Ones-SAT."
  }
];
