/* AI-generated practice questions based on ANI-KOP05.pdf; not real exam questions. */
window.aiGeneratedQuestionSets=window.aiGeneratedQuestionSets||{};
window.aiGeneratedQuestionSets[5]=[
  {
    "question": "Která tvrzení správně charakterizují rozdíl mezi SAT a SMT?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "3, 7, 14",
    "aiTopic": "SAT versus SMT",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Booleovská abstrakce může přijmout kombinaci atomů, která je v teorii nemožná, například x>10 a x<5. <i>Zdroj: ANI-KOP05.pdf, s. 3, 7, 14.</i>",
    "answers": {
      "1": "SAT pracuje s booleovskými formulacemi a hledá jejich splňující ohodnocení.",
      "2": "SMT navíc bere v úvahu význam atomů v určité teorii, například celočíselné aritmetice.",
      "3": "Pokud je booleovská abstrakce SMT formule splnitelná, musí být splnitelná i formule v teorii.",
      "4": "SMT může současně používat logické spojky i aritmetická omezení."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Tseitinova transformace původní formule do CNF:",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "4–6",
    "aiTopic": "Tseitin a ekvisplnitelnost",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Výsledkem je ekvisplnitelná formule, nikoli identická formule nad stejnou množinou proměnných. <i>Zdroj: ANI-KOP05.pdf, s. 4–6.</i>",
    "answers": {
      "1": "Zavádí pomocné proměnné pro složené podformule.",
      "2": "Zachovává splnitelnost, ale nové proměnné mění množinu všech ohodnocení.",
      "3": "Musí nutně vytvořit exponenciálně mnoho klauzulí.",
      "4": "Umožňuje lineární růst velikosti CNF vůči původní formuli."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Známe vztah x ↔ (a ∨ b). Které klauzule patří do jeho Tseitinova zakódování?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "5–6",
    "aiTopic": "Rozpoznání Tseitinových klauzulí",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Ekvivalence musí pokrýt obě implikace: x⇒(a∨b) a (a∨b)⇒x. Poslední klauzule z této ekvivalence samostatně neplyne. <i>Zdroj: ANI-KOP05.pdf, s. 5–6.</i>",
    "answers": {
      "1": "(¬x ∨ a ∨ b)",
      "2": "(x ∨ ¬a)",
      "3": "(x ∨ ¬b)",
      "4": "(x ∨ a ∨ b)"
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro F=(a∨b)∧¬(c∧d) se zavede x↔(a∨b), y↔(c∧d) a z↔(x∧¬y). Co je správně?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "6",
    "aiTopic": "Kořen formule",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Tři definice přidají po třech klauzulích a kořen se asertuje jednotkovou klauzulí (z). <i>Zdroj: ANI-KOP05.pdf, s. 6.</i>",
    "answers": {
      "1": "Je třeba navíc požadovat z=1, aby se vynutila pravdivost F.",
      "2": "Bez jednotkové klauzule z=1 by definice pomocných proměnných samy nezaručily splnění F.",
      "3": "Zakódování uvedené na přednášce má devět definičních klauzulí a jednu kořenovou.",
      "4": "Pomocné proměnné musejí být vždy zvoleny náhodně."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Která ohodnocení splňují F=(a∨b)∧¬(c∧d)?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "6",
    "aiTopic": "Vyhodnocení formule",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Levá disjunkce musí být pravdivá a c,d nesmějí být současně pravda. <i>Zdroj: ANI-KOP05.pdf, s. 6.</i>",
    "answers": {
      "1": "a=1, b=0, c=1, d=0",
      "2": "a=0, b=0, c=0, d=0",
      "3": "a=1, b=1, c=1, d=1",
      "4": "a=0, b=1, c=1, d=0"
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jaký je význam interpretace a modelu v logice prvního řádu?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "8–13",
    "aiTopic": "Interpretace a model",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Na rozdíl od syntaktického zápisu určuje interpretace konkrétní sémantiku symbolů; splňování teorie znamená splnění všech jejích formulí. <i>Zdroj: ANI-KOP05.pdf, s. 8–13.</i>",
    "answers": {
      "1": "Interpretace přiřazuje význam konstantám, funkcím a predikátům nad neprázdnou doménou.",
      "2": "Interpretace je modelem teorie T, splňuje-li všechny formule z T.",
      "3": "Každý predikát musí v každé interpretaci znamenat stejnou konkrétní vlastnost.",
      "4": "Jedna teorie může mít více různých modelů."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Ve třídě QF_NIA ve značení SMT-LIB platí:",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "17–19, 26, 29–30",
    "aiTopic": "SMT logiky",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. QF_LIA omezuje celočíselnou aritmetiku na lineární výrazy; BV představuje konečné bitové vektory. <i>Zdroj: ANI-KOP05.pdf, s. 17–19, 26, 29–30.</i>",
    "answers": {
      "1": "QF znamená, že zvolený fragment neobsahuje kvantifikátory.",
      "2": "NIA zahrnuje nelineární celočíselnou aritmetiku.",
      "3": "Součin dvou celočíselných proměnných A·B je nelineární výraz.",
      "4": "QF_NIA je totéž co QF_BV s pevnou šířkou bitů."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "V modelu tří osob je A=32, B=18, C=50. Která tvrzení platí?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "15–16, 19",
    "aiTopic": "Příklad věků a implikace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Implikace s nepravdivým předpokladem B>C je pravdivá bez nutnosti splnění rovnosti B·C=432. <i>Zdroj: ANI-KOP05.pdf, s. 15–16, 19.</i>",
    "answers": {
      "1": "A+B+C=100.",
      "2": "Pravidlo A>B ⇒ A·B=576 je splněno.",
      "3": "Pravidlo B>C ⇒ B·C=432 je porušeno, protože 18·50≠432.",
      "4": "Požadavek (A>B)∨(B>C) je splněn."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jak číst hotový fragment SMT-LIB `(assert (=> (> A B) (= (* A B) 576)))`?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "19",
    "aiTopic": "Čtení SMT-LIB",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Asertované omezení je podmínka, ne nepodmíněné tvrzení o pořadí věků. `=>` je logická implikace. <i>Zdroj: ANI-KOP05.pdf, s. 19.</i>",
    "answers": {
      "1": "Pokud A>B, potom A·B=576.",
      "2": "Vždy musí platit A>B.",
      "3": "Je to implikace, která je pravdivá také při A≤B.",
      "4": "Jde o deklaraci proměnné A."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "K čemu slouží příkazy `check-sat` a `get-model`?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "17–19",
    "aiTopic": "Základní příkazy",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. SMT-LIB odděluje formulaci modelu, požadavek na kontrolu splnitelnosti a následné získání svědka. <i>Zdroj: ANI-KOP05.pdf, s. 17–19.</i>",
    "answers": {
      "1": "`check-sat` zkoumá splnitelnost aktuálních omezení.",
      "2": "`get-model` může po výsledku sat vrátit konkrétní model.",
      "3": "`get-model` je požadavek na důkaz optimálnosti.",
      "4": "Výsledek `unsat` znamená, že neexistuje ohodnocení splňující všechna aktivní omezení."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Formule `x≥4 ∧ (x>5 ∨ x<3)` nad Int:",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "20–22",
    "aiTopic": "SAT abstrakce a konflikt",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. x=4 nesplní disjunkci. Kandidát A=true,B=false,C=true požaduje současně x≥4 a x<3; to je konflikt. <i>Zdroj: ANI-KOP05.pdf, s. 20–22.</i>",
    "answers": {
      "1": "Je splnitelná, například pro x=6.",
      "2": "Je splnitelná pro x=4.",
      "3": "Booleovská abstrakce A∧(B∨C) může nabídnout neplatný kandidát A=true,B=false,C=true.",
      "4": "Teoretický řešič musí respektovat význam atomů A, B, C."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Proč SMT řešič po nalezení booleovského kandidáta potřebuje kontrolu v teorii?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "20–23",
    "aiTopic": "Princip CDCL(T)",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. V CDCL(T) si SAT a teoretická vrstva vyměňují konflikty / odvozené klauzule; zbytečné kombinace se dál nezkoušejí. <i>Zdroj: ANI-KOP05.pdf, s. 20–23.</i>",
    "answers": {
      "1": "Atomická tvrzení mohou být booleovsky konzistentní, ale aritmeticky sporná.",
      "2": "Teoretický konflikt lze převést na lemma zakazující chybnou kombinaci atomů.",
      "3": "Teoretický řešič musí vždy provést úplné vyzkoušení všech celých čísel.",
      "4": "Nalezený model musí splňovat booleovskou strukturu i příslušnou teorii."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Máme neinterpretovanou funkci f a předpoklad a=b. Co musí platit v teorii UF?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "25",
    "aiTopic": "UF a kongruence",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. UF neuděluje funkci konkrétní aritmetický význam, ale zachovává rovnost při aplikaci funkce (kongruenci). <i>Zdroj: ANI-KOP05.pdf, s. 25.</i>",
    "answers": {
      "1": "f(a)=f(b).",
      "2": "f(a)=a+1.",
      "3": "Stejné argumenty musejí dávat stejný výsledek funkce.",
      "4": "Funkce f musí být rostoucí."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jak se liší `Int` od osmibitového `BitVec`?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "26–27",
    "aiTopic": "Int versus BitVec",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Stejný vzor 0xFF znamená unsigned 255 a signed −1; výsledek aritmetiky je modulo 256. <i>Zdroj: ANI-KOP05.pdf, s. 26–27.</i>",
    "answers": {
      "1": "Int modeluje matematická celá čísla bez osmibitového přetečení.",
      "2": "Pro osmibitové BV platí 255+1≡0 (mod 256).",
      "3": "V osmibitové BV má vzor 11111111 při signed a unsigned interpretaci stejnou hodnotu.",
      "4": "Pro BV jsou důležité signed a unsigned operace porovnání."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "O ověřování ekvivalence dvou bitvektorových výrazů P(x), Q(x) pomocí SMT platí:",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "27",
    "aiTopic": "Kontrapříklad a validita",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Důkaz platí v přesně určeném modelu, například pro danou bitovou šířku a další předpoklady. <i>Zdroj: ANI-KOP05.pdf, s. 27.</i>",
    "answers": {
      "1": "Hledáme protipříklad omezením P(x)≠Q(x).",
      "2": "Výsledek unsat pro negaci rovnosti znamená ekvivalenci v dané modelované doméně.",
      "3": "Výsledek sat při P≠Q udává potenciální konkrétní protipříklad.",
      "4": "Stačí ověřit jednu libovolnou hodnotu x."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Které výroky o UNSAT core jsou správné?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "20–23",
    "aiTopic": "UNSAT core",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Unsat core nemusí být minimální ani minimum-cardinality; získává se pro nesplnitelné omezení. <i>Zdroj: ANI-KOP05.pdf, s. 20–23.</i>",
    "answers": {
      "1": "Je to podmnožina omezení, která je sama nesplnitelná.",
      "2": "Každé vrácené UNSAT core musí být nejmenší možné.",
      "3": "Pomáhá odhalit skupinu vzájemně konfliktních omezení.",
      "4": "Z jednoho nalezeného modelu automaticky získáme UNSAT core."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Optimization Modulo Theories (OMT):",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "28",
    "aiTopic": "OMT",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. OMT rozšiřuje hledání přípustného modelu o výběr nejlepších podle kritéria. <i>Zdroj: ANI-KOP05.pdf, s. 28.</i>",
    "answers": {
      "1": "Přidává k omezením i optimalizační kritérium.",
      "2": "Je totéž co standardní příkaz `check-sat` bez cílové funkce.",
      "3": "Může např. minimalizovat celočíselnou veličinu při dodržení SMT omezení.",
      "4": "Ve výkladu přednášky se odlišuje od základního SMT zaměřeného na satisfiability."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Které přiřazení standardního SMT-LIB fragmentu k doméně dává smysl?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "24–30",
    "aiTopic": "Výběr teorie",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Název logiky říká, jaké teorie a omezení se používají. UF jsou neinterpretované funkce. <i>Zdroj: ANI-KOP05.pdf, s. 24–30.</i>",
    "answers": {
      "1": "QF_LIA → celočíselná lineární aritmetika bez kvantifikátorů.",
      "2": "QF_NIA → celočíselná nelineární aritmetika bez kvantifikátorů.",
      "3": "QF_BV → bitové vektory pevné šířky bez kvantifikátorů.",
      "4": "UF → konkrétní předem pevně určená násobicí funkce."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Proč nestačí v SMT ověřit pouze booleovskou abstrakci `x≥4 ∧ (x>5 ∨ x<3)`?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "20–23",
    "aiTopic": "Vysvětlení teoriového konfliktu",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Jde o ústní vysvětlení principu SMT, žádný kód není třeba psát. <i>Zdroj: ANI-KOP05.pdf, s. 20–23.</i>",
    "answer": "Booleovská abstrakce připouští kombinace pravdivostí atomů, které nelze realizovat žádnou hodnotou x. Například A=true, B=false, C=true by vyžadovalo x≥4 a x<3 zároveň. Teoretický řešič takové přiřazení odmítne; zde existuje model x=6, takže celá formule je sat."
  },
  {
    "question": "Vysvětlete rozdíl mezi logickou ekvivalencí a ekvisplnitelností při Tseitinově transformaci.",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "5–6",
    "aiTopic": "Tseitin: přenos splnitelnosti",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Důležitý rozdíl pro otázky s více správnými tvrzeními. <i>Zdroj: ANI-KOP05.pdf, s. 5–6.</i>",
    "answer": "Ekvivalentní formule mají shodnou pravdivost pro každé ohodnocení společných proměnných. Tseitinova formule používá nové pomocné proměnné a zajišťuje, že původní F je splnitelná právě tehdy, když existuje splňující rozšíření její CNF. Není to identická funkce nad totožným souborem proměnných. Kořenová pomocná proměnná musí být asertována."
  },
  {
    "question": "V oficiální úloze s věkem tří osob vysvětlete, proč A=32,B=18,C=50 tvoří model a proč se používá QF_NIA.",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "15–19",
    "aiTopic": "Interpretace modelu",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Pozor na logickou implikaci s nepravdivou podmínkou a na rozdíl mezi lineární a nelineární teorií. <i>Zdroj: ANI-KOP05.pdf, s. 15–19.</i>",
    "answer": "Všichni mají alespoň 18 let a součet 32+18+50=100. A>B je pravda a součin 32·18=576; B>C je nepravda, proto druhá implikace není porušena. Disjunkce A>B∨B>C je pravdivá. Kódování je bez kvantifikátorů nad Int, ale obsahuje součiny dvou proměnných, takže se používá QF_NIA, nikoli QF_LIA."
  },
  {
    "question": "Co znamenají výsledky sat, unsat a unknown při řešení SMT omezení?",
    "aiGenerated": true,
    "lecture2026": 5,
    "sourceSlides": "ANI-KOP05.pdf",
    "sourcePages": "17–23",
    "aiTopic": "Čtení výsledků řešiče",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L5.</b> Tréninková otázka sestavená na základě prezentace; nejde o skutečné zadání. Neslučujte nerozhodnutý výsledek se zápornou odpovědí na splnitelnost. <i>Zdroj: ANI-KOP05.pdf, s. 17–23.</i>",
    "answer": "sat znamená, že existuje splňující model. unsat znamená dokázanou nemožnost splnit všechna omezení současně. unknown znamená, že solver nerozhodl (např. pro danou teorii nebo omezení zdrojů) a nelze jej interpretovat jako unsat. Pokud model existuje, může být více řešení."
  }
];
