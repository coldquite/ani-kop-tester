/* AI-generated questions based on ANI-KOP03.pdf; not authentic teacher questions. */
window.aiGeneratedQuestionSets=window.aiGeneratedQuestionSets||{};
window.aiGeneratedQuestionSets[3]=[
  {
    "question": "Chceme dokázat, že nový rozhodovací problém B je NP-těžký. Co je korektní postup?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "11–15, 29–32",
    "aiTopic": "Správný směr redukce",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Směr redukce vede od již známého těžkého problému k novému cíli. Důkaz musí ošetřit oba směry korektnosti a složitost. <i>ANI-KOP03.pdf, s. 11–15, 29–32.</i>",
    "answers": {
      "1": "Vybrat známý NP-úplný problém A a sestrojit A ≤ₚ B.",
      "2": "Sestrojit B ≤ₚ A a tím bez dalšího dokázat NP-těžkost B.",
      "3": "Prokázat ekvivalenci odpovědí ANO/NE před a po transformaci.",
      "4": "Ujistit se, že transformace je vypočitatelná v polynomiálním čase."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Co se dá odvodit ze vztahu A ≤ₚ B?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "14–15, 21, 23–29",
    "aiTopic": "Důsledky redukce",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Redukce je tranzitivní. Těžkost cíle se přenáší ze zdroje, nikoli obráceně. <i>ANI-KOP03.pdf, s. 14–15, 21, 23–29.</i>",
    "answers": {
      "1": "Je-li B v P, pak A je v P.",
      "2": "Je-li A NP-těžký, pak B je NP-těžký.",
      "3": "Je-li B NP-těžký, pak A je NP-těžký.",
      "4": "Zredukuje-li se navíc B ≤ₚ C, pak A ≤ₚ C."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "V konstrukci HC ≤ₚ rozhodovací TSP s n vrcholy platí:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "16–20",
    "aiTopic": "Konstrukce HC → TSP",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Okruh má právě n hran a každá stojí alespoň 1. Cena ≤n proto vynutí pouze původní hrany. <i>ANI-KOP03.pdf, s. 16–20.</i>",
    "answers": {
      "1": "Za hranu původního grafu se zavádí cena 1.",
      "2": "Za nehranu původního grafu se zavádí cena 2.",
      "3": "Rozhodovací mez se stanoví K=n.",
      "4": "Pokud existuje TSP okruh ceny nejvýše n, musí všechny jeho hrany stát 1."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Proč transformace HC → TSP s cenami 1 a 2 zachovává odpovědi?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "16–20",
    "aiTopic": "Korektnost HC → TSP",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. TSP okruh má n kroků. Každá dvojka by cenu zvedla nad n; délka vstupu výstupní instance je O(n²). <i>ANI-KOP03.pdf, s. 16–20.</i>",
    "answers": {
      "1": "Hamiltonovská kružnice v původním grafu dává TSP okruh ceny n.",
      "2": "Okruh ceny n může obsahovat jedinou hranu ceny 2, je-li počet měst sudý.",
      "3": "TSP okruh ceny ≤n nutně používá pouze původní hrany.",
      "4": "Konstrukce úplné matice vzdáleností má polynomiální velikost."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Při redukci SAT → Independent Set (IS) se používají tato pravidla:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "33–48",
    "aiTopic": "Konstrukce SAT → IS",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Jedna nezávislá množina velikosti m vybere z každé klauzule jeden nekonfliktní literál; tím určuje splňující ohodnocení. <i>ANI-KOP03.pdf, s. 33–48.</i>",
    "answers": {
      "1": "Vytvoříme vrchol pro každý výskyt literálu v každé klauzuli.",
      "2": "Všechny vrcholy stejné klauzule vzájemně spojíme.",
      "3": "Přidáme hranu mezi komplementárními literály, i když pocházejí z různých klauzulí.",
      "4": "Hledaná velikost nezávislé množiny je počet klauzulí."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Pro formuli F=(a ∨ b) ∧ (¬a ∨ c) ∧ (¬b ∨ ¬c) a její redukci na IS platí:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "33–48",
    "aiTopic": "Miniinstance SAT → IS",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Ve třetí možnosti se nevybírají konfliktní literály; poslední možnost obsahuje a a ¬a, takže mezi nimi musí být konfliktní hrana. <i>ANI-KOP03.pdf, s. 33–48.</i>",
    "answers": {
      "1": "Graf má šest vrcholů, pokud každý výskyt literálu odpovídá samostatnému vrcholu.",
      "2": "Každá dvojice vrcholů jedné klauzule je spojena hranou.",
      "3": "Trojice {b z 1. klauzule, ¬a z 2. klauzule, ¬c z 3. klauzule} je nezávislá.",
      "4": "Trojice {a z 1. klauzule, ¬a z 2. klauzule, ¬c z 3. klauzule} je nezávislá."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Která tvrzení o třídách NP-hard a NP-complete platí?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "23–32",
    "aiTopic": "NPH vs NPC",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. NP-těžkost vyjadřuje dolní mez obtížnosti. NP-úplnost k ní přidává podmínku členství v NP. <i>ANI-KOP03.pdf, s. 23–32.</i>",
    "answers": {
      "1": "NP-úplný rozhodovací problém patří do NP.",
      "2": "NP-těžký problém nemusí patřit do NP.",
      "3": "Samotná NP-těžkost dokazuje existenci krátkého certifikátu.",
      "4": "Pro NP-úplnost cíle stačí prokázat NP-těžkost a členství cíle v NP."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Je-li A ≤ₚ B pro rozhodovací jazyky, pak:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "14–15, 27–29",
    "aiTopic": "Komplement redukce",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Z x∈A ⇔ f(x)∈B vyplývá x∉A ⇔ f(x)∉B. Doplňkové jazyky proto používají stejnou transformaci. <i>ANI-KOP03.pdf, s. 14–15, 27–29.</i>",
    "answers": {
      "1": "Doplňky splňují co-A ≤ₚ co-B se stejným zobrazením.",
      "2": "Je-li A co-NP-těžký, přenáší se co-NP-těžkost na B.",
      "3": "B musí být v NP bez ohledu na jeho definici.",
      "4": "Karpova redukce zachovává odpovědi ANO i NE."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Za předpokladu P ≠ NP o třídě NPI platí:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "49–54",
    "aiTopic": "NP-intermediate",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Neprázdnost NPI je důsledkem Ladnerovy věty při P≠NP, ne pouze přehledu dosud neznámých algoritmů. <i>ANI-KOP03.pdf, s. 49–54.</i>",
    "answers": {
      "1": "Existují rozhodovací problémy v NP, které nejsou v P ani NP-úplné.",
      "2": "Každý problém v NP, pro který dosud neznáme algoritmus, musí být NPI.",
      "3": "Problémy v P patří zároveň do NPI.",
      "4": "Samotná absence známé redukce z SAT ještě nedokazuje NPI."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jak porovnat NPO a PO?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "55–58",
    "aiTopic": "NPO a PO",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. NPO připouští i snadné optimalizační úlohy. PO vyznačuje ty z nich, pro které je nalezení optima efektivní. <i>ANI-KOP03.pdf, s. 55–58.</i>",
    "answers": {
      "1": "PO je podtřída NPO.",
      "2": "V NPO lze v polynomiálním čase zkontrolovat přípustnost konfigurace a vyhodnotit její kritérium (za standardních podmínek).",
      "3": "Každý problém v NPO musí být NP-těžký.",
      "4": "Členství v PO znamená, že existuje polynomiální algoritmus hledající optimum."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Karpovy a Cookovy redukce se liší tak, že:",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "60–63",
    "aiTopic": "Karp vs Cook",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Více dotazů a možnost jejich závislosti na odpovědích rozšiřují možnosti Cookovy redukce. <i>ANI-KOP03.pdf, s. 60–63.</i>",
    "answers": {
      "1": "Karpova redukce převádí rozhodovací instance jednou polynomiální transformací.",
      "2": "Cookova/Turingova redukce může položit polynomiálně mnoho adaptivních dotazů orákulu.",
      "3": "Každá Karpova redukce je zároveň zvláštním případem polynomiální Turingovy redukce.",
      "4": "Každá Turingova redukce je automaticky Karpovou redukcí."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jak lze použít orákulum rozhodovacího TSP k řešení optimalizačního TSP se celočíselnými cenami?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "63–76",
    "aiTopic": "TSP pomocí orákula",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Hodnotu zjistíme logaritmickým počtem prahových dotazů; rekonstrukce řešení vyžaduje další self-reduction dotazy. Předpokládá se vhodná redukce rozšířeného TSP na rozhodovací verzi. <i>ANI-KOP03.pdf, s. 63–76.</i>",
    "answers": {
      "1": "Při známém konečném intervalu ceny lze nejprve nalézt optimální hodnotu binárním vyhledáváním na prahu K.",
      "2": "Po nalezení optimální ceny můžeme s dotazy na vhodné rozšířené instance postupně konstruovat konkrétní okruh.",
      "3": "Algoritmus musí vyzkoušet všechna přirozená čísla od 0 po optimální cenu, jinak nejde o Cookovu redukci.",
      "4": "Počet dotazů musí být polynomiální v délce binárního zápisu vstupu."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Ukažte oba směry korektnosti redukce HC ≤ₚ TSP, když je cena každé existující hrany 1, neexistující hrany 2 a mez K=n.",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "16–20",
    "aiTopic": "Důkaz HC → TSP",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Nezapomeňte ukázat obě implikace i polynomiální složitost celé transformace. <i>ANI-KOP03.pdf, s. 16–20.</i>",
    "answer": "Je-li v G Hamiltonovská kružnice, odpovídající TSP okruh má n hran s cenou 1 a tedy cenu n. Naopak TSP okruh na n městech má n hran, každá má cenu alespoň 1. Jestliže jejich součet nepřesáhne n, musejí všechny mít cenu právě 1 a představují existující hrany G. Proto tvoří Hamiltonovskou kružnici v G. Úplnou váhovou matici sestavíme v O(n²)."
  },
  {
    "question": "Z CNF F=(a∨b)∧(¬a∨c)∧(¬b∨¬c) odvoďte graf SAT ≤ₚ IS. Určete počet vrcholů, pravidla pro hrany a ukázku IS velikosti 3.",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "33–48",
    "aiTopic": "Konstrukční SAT → IS",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Při konstrukci je důležité rozlišovat výskyt literálu od samotné proměnné. <i>ANI-KOP03.pdf, s. 33–48.</i>",
    "answer": "Vytvoříme šest vrcholů (dva výskyty literálů v každé ze tří klauzulí). Spojíme dvojici v každé klauzuli, navíc každou dvojici komplementárních výskytů: a–¬a, b–¬b, c–¬c. Nezávislá množina {b z 1. klauzule, ¬a z 2. klauzule, ¬c z 3. klauzule} má velikost 3. Přiřazení (a,b,c)=(0,1,0) splňuje všechny tři klauzule."
  },
  {
    "question": "Proč samotný výrok 'nový problém B lze polynomiálně redukovat na SAT' nedokazuje NP-těžkost B? Co by bylo třeba ukázat?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "11–15, 29–32",
    "aiTopic": "Opačný směr redukce",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Redukce nemá intuitivní směr 'z cíle k něčemu známému'. <i>ANI-KOP03.pdf, s. 11–15, 29–32.</i>",
    "answer": "B ≤ₚ SAT pouze říká, že SAT je alespoň tak těžký jako B. Abychom dokázali NP-těžkost B, potřebujeme redukci A ≤ₚ B ze známého NP-těžkého (obvykle NP-úplného) problému A. Pro NP-úplnost navíc prokážeme B∈NP pomocí polynomiálně ověřitelného certifikátu."
  },
  {
    "question": "Formulujte přesný rozdíl mezi 'v NP', 'NP-těžký' a 'NP-úplný' na rozhodovacích problémech.",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "23–32",
    "aiTopic": "Formální definice NPC",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Uveďte definice jako samostatné podmínky a potom je logicky spojte. <i>ANI-KOP03.pdf, s. 23–32.</i>",
    "answer": "B∈NP znamená, že ANO-instance mají polynomiálně dlouhé deterministicky ověřitelné certifikáty. B je NP-těžký, pokud každou úlohu z NP lze v polynomiálním čase redukovat na B. B je NP-úplný, pokud platí obě podmínky. NP-těžký problém nemusí být v NP."
  },
  {
    "question": "Pro libovolný rozhodovací jazyk A, který je NP-úplný, uvažujte jeho doplněk co-A. Jaké zařazení má co-A a proč?",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "27–29",
    "aiTopic": "Redukce a komplement",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. V důkazu používejte zachování komplementu redukce, nikoli nepodložené tvrzení NP=co-NP. <i>ANI-KOP03.pdf, s. 27–29.</i>",
    "answer": "Doplněk co-A patří do co-NP. Pro libovolné C∈co-NP je co-C∈NP a tedy co-C≤ₚ A. Stejnou transformací dostáváme C≤ₚ co-A, takže co-A je co-NP-těžký. Proto je co-A co-NP-úplný."
  },
  {
    "question": "Popište, jak lze na základě rozhodovacího TSP s prahovou cenou získat optimální délku a posléze optimální okruh pomocí Cookovy redukce.",
    "aiGenerated": true,
    "lecture2026": 3,
    "sourceSlides": "ANI-KOP03.pdf",
    "sourcePages": "60–76",
    "aiTopic": "Cook TSP rekonstrukce",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L3.</b> Fiktivní procvičovací otázka odvozená z přednášky; nikoli autentický test. Důležité je počítat počet dotazů vzhledem k bitové délce čísel; samotný lineární průchod všemi K může být pseudopolynomiální. <i>ANI-KOP03.pdf, s. 60–76.</i>",
    "answer": "Je-li rozsah celočíselných cen shora omezen číslem U s polynomiální bitovou délkou, ptáme se na existenci okruhu s cenou ≤K a binárně hledáme nejmenší dosažitelnou mez K*. K rekonstrukci optimálního okruhu používáme další polynomiální dotazy do vhodně formulovaných rozhodovacích/rozšířených úloh, kterými fixujeme navazující hrany a testujeme možnost dokončení za cenu K*. Nejde o jednu many-one transformaci, ale o opakované adaptivní orákulové dotazy."
  }
];
