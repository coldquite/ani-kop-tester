/* Extra exam practice adapted from Příprava na zápočtový test NI-KOP; distinct from ANI-KOP 2026 official questions. */
window.kopPdfPrepSections = [
  {
    "id": "pdf-p1",
    "label": "Z přípravy NI-KOP · P1 · Modelování",
    "course": "ANI-KOP01"
  },
  {
    "id": "pdf-p2",
    "label": "Z přípravy NI-KOP · P2 · Složitost",
    "course": "ANI-KOP02"
  },
  {
    "id": "pdf-p3",
    "label": "Z přípravy NI-KOP · P3 · Redukce",
    "course": "ANI-KOP03"
  },
  {
    "id": "pdf-p4",
    "label": "Z přípravy NI-KOP · P4 · Stavový prostor",
    "course": "ANI-KOP04"
  }
];
window.kopPdfPrepQuestions = [
  {
    "category": "pdf-p1",
    "topic": "Minimum Bin Packing – model optimalizační úlohy",
    "question": "Je dáno n věcí o velikostech a_i a kontejnery kapacity B. Navrhněte konfigurační proměnné, omezující podmínky a optimalizační kritérium pro konstruktivní optimalizační problém Minimum Bin Packing.",
    "answer": "Zvolíme proměnné x_i ∈ {1,…,n} označující kontejner věci i. Každá věc má právě jeden kontejner a pro každý kontejner j platí součet velikostí věcí s x_i=j nejvýše B. Minimalizujeme počet různých použitých kontejnerů. Jde o konečnou diskrétní konfiguraci; kontrola kapacit a výpočet ceny jsou polynomiální.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 12. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 12
  },
  {
    "category": "pdf-p1",
    "topic": "CLIQUE – certifikát a omezení",
    "question": "Rozhodovací CLIQUE: existuje v neorientovaném grafu klika velikosti alespoň K? Navrhněte konfiguraci a napište přesný polynomiální ověřovač certifikátu.",
    "answer": "Certifikát: seznam alespoň K různých vrcholů (nebo bitový vektor délky |V|). Ověříme, že indexy existují, jsou různé a pro každou dvojici vybraných vrcholů je v E hrana. Kontrola nejvýše O(|V|²) testů hran, tedy CLIQUE ∈ NP.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 13. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 13
  },
  {
    "category": "pdf-p1",
    "topic": "Minimum vertex cover – ověření NPO",
    "question": "Dokažte, že konstruktivní optimalizační problém minimálního uzlového pokrytí grafu patří do NPO. Explicitně uveďte všechny tři podmínky.",
    "answer": "Výstupem je podmnožina vrcholů zapsatelná bitovým vektorem délky |V|. Přípustnost ověříme průchodem hran: každá musí mít alespoň jeden konec ve vybrané množině (O(|E|)). Kritérium |C| spočítáme v O(|V|). Všechny tři podmínky NPO jsou splněny.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 15. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 15
  },
  {
    "category": "pdf-p2",
    "topic": "CNF versus DNF",
    "question": "Proč je rozhodování splnitelnosti formule v DNF polynomiální, zatímco CNF-SAT je NP-úplný?",
    "answer": "DNF je OR termů, z nichž každý je AND literálů. Stačí najít jediný term bez konfliktní dvojice x a ¬x; jeho splnění lze rozhodnout v polynomiálním čase. Obecný CNF-SAT je NP-úplný. Neznamená to, že by CNF formule neuměla popsat stejné booleovské funkce.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 9. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 9
  },
  {
    "category": "pdf-p2",
    "topic": "NPI a předpoklad P ≠ NP",
    "question": "Je za předpokladu P ≠ NP třída NPI prázdná? Co přesně znamená NP-intermediate?",
    "answer": "Není prázdná: Ladnerova věta říká, že při P ≠ NP existuje jazyk v NP, který není v P ani NP-úplný (při standardní polynomiální redukci). NPI = NP \\ (P ∪ NPC).",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 7. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 7
  },
  {
    "category": "pdf-p2",
    "topic": "co-NP – předmět certifikace",
    "question": "Co přesně říká příslušnost rozhodovacího jazyka L do co-NP? Vysvětlete na UNSAT.",
    "answer": "L ∈ co-NP právě tehdy, když jeho komplement je v NP. U UNSAT je komplement SAT: pokud formule není instancí UNSAT (je splnitelná), svědkem je její splňující ohodnocení, které lze ověřit polynomiálně. Není obecně známa polynomiální verifikace certifikátů ANO pro libovolný co-NP problém.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 21. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 21
  },
  {
    "category": "pdf-p3",
    "topic": "Cookova–Levinova věta a její využití",
    "question": "Formulujte Cookovu–Levinovu větu. Jaký správný směr redukce použijete pro důkaz, že nový rozhodovací problém B je NP-těžký?",
    "answer": "SAT je NP-úplný, tj. SAT ∈ NP a každý jazyk A ∈ NP lze polynomiálně redukovat na SAT. NP-těžkost B můžeme prokázat redukcí SAT ≤ₚ B (nebo jiného známého NPC problému na B). K NP-úplnosti B ještě prokážeme B ∈ NP.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 13. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 13
  },
  {
    "category": "pdf-p3",
    "topic": "Co-NPC verze maximální kliky",
    "question": "Zformulujte co-NP-úplný rozhodovací problém odvozený od CLIQUE, jehož rozhodovací verze „existuje klika velikosti alespoň K“ je NP-úplná.",
    "answer": "Ptejme se: „Neexistuje v G žádná klika velikosti alespoň K?“ Jde o komplement NP-úplného CLIQUE, tedy o co-NP-úplný rozhodovací jazyk.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 12. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 12
  },
  {
    "category": "pdf-p3",
    "topic": "Co-NPC verze uzlového pokrytí",
    "question": "Zformulujte co-NP-úplný komplement rozhodovacího Vertex Cover s hranicí K.",
    "answer": "Ptejte se: „Neexistuje v grafu uzlové pokrytí o nejvýše K vrcholech?“ Je to přesný komplement NP-úplné otázky „existuje pokrytí o nejvýše K vrcholech?“ a proto co-NP-úplný.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 12. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 12
  },
  {
    "category": "pdf-p3",
    "topic": "TSP – komplement rozhodovacího prahu",
    "question": "Předpokládejte rozhodovací TSP „existuje Hamiltonova túra o délce ≤ K?“ Zapište přesně její komplement a zařazení.",
    "answer": "„Neexistuje Hamiltonova túra o délce ≤ K“ (každá případná Hamiltonova túra je delší než K). Je-li výchozí rozhodovací TSP NP-úplný, komplement patří do co-NPC. Pozor: výraz „všechny túry jsou kratší než K“ není komplementem tohoto zadání.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 13. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 13
  },
  {
    "category": "pdf-p4",
    "topic": "Souvislý a symetrický graf Minimum Graph Motion Planning",
    "question": "Je dán graf míst G, robot na s, cílový uzel t a překážky. Navrhněte symetrický souvislý stavový prostor algoritmu, který pracuje s plány přesunů. Odlište vstupní graf a graf stavů.",
    "answer": "Stav může být prefix legální posloupnosti přesunů robota/překážek délky nejvýše L, kde L je konečná dostatečně velká mez (existuje mez podle počtu rozlišitelných fyzických konfigurací). Operátory: přidat jeden legální přesun a odstranit poslední přesun. Přes prázdný plán lze dojít z libovolného prefixu do libovolného jiného; přidání a odebrání jsou vzájemné inverze. Uzel stavového grafu reprezentuje plán, nikoliv místo vstupního G; kritériem je počet přesunů.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 18. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 18
  },
  {
    "category": "pdf-p4",
    "topic": "Symetrický stavový prostor TSP – prohození měst",
    "question": "Navrhněte graf stavového prostoru pro TSP se stavem jako permutací měst a operátorem prohození dvou míst. Proč je graf silně souvislý a symetrický?",
    "answer": "Každý stav je jedna permutace měst reprezentující túru. Operátor prohodí dvě různé pozice; stejná záměna operaci vrátí, takže hrany existují v obou směrech. Každou permutaci lze získat z libovolné jiné konečnou posloupností transpozic, proto je graf silně souvislý.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 19. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 19
  },
  {
    "category": "pdf-p4",
    "topic": "Symetrický stavový prostor SAT – bit-flip",
    "question": "Navrhněte symetrický silně souvislý stavový graf pro SAT nad n proměnnými. Vysvětlete počet stavů a sousedů.",
    "answer": "Stav: bitový vektor ohodnocení x ∈ {0,1}ⁿ. Operátor q_i změní jeden bit x_i. Protože q_i(q_i(x))=x, jsou přechody obousměrné. Rozdíly dvou vektorů lze odstranit postupnými flipy, takže graf je silně souvislý. Počet stavů 2ⁿ, počet sousedů každého stavu n. Ne všechny stavy musejí splňovat SAT formuli.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 19. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 19
  },
  {
    "category": "pdf-p4",
    "topic": "Minimum Multiprocessor Scheduling – reprezentace",
    "question": "Pro Minimum Multiprocessor Scheduling s m procesory a úlohami T navrhněte konfiguraci, operátory, důkaz souvislosti grafu a optimalizační kritérium.",
    "answer": "Proměnná x_t ∈ {1,…,m} označuje procesor úlohy t. Operátor změní přiřazení jedné úlohy na jiný procesor, změna má inverzi. Každé dva vektory lze propojit změnou všech odlišných pozic. Minimalizujeme makespan: maximum přes procesory i ze součtu trvání l(t,i) všech úloh s x_t=i.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 18. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 18
  },
  {
    "category": "pdf-p4",
    "topic": "Minimum Bin Packing – symetrický stavový prostor",
    "question": "Navrhněte symetrický souvislý stavový prostor pro Minimum Bin Packing, v němž mohou být i částečné nebo nepřípustné konfigurace.",
    "answer": "Stav: vektor n položek x_i ∈ {0,…,n}, kde nula značí nepřiřazeno a j>0 označuje kontejner. Operátor změní právě jednu hodnotu x_i (včetně přiřazení/odebrání). Každý přechod lze vrátit a všechny stavy lze propojit přes nulový vektor. Omezení kapacit a úplného přiřazení kontrolujeme zvlášť, takže část stavů může být nepřípustná.",
    "note": "Historická studijní sbírka „Příprava na zápočtový test NI-KOP“, s. 17. Upravená tréninková otázka, nikoli garantovaná autentická otázka ANI-KOP 2026.",
    "pdfSource": "Příprava na zápočtový test NI-KOP",
    "pdfPage": 17
  }
];
