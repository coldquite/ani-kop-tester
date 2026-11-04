/* Educational AI-generated L6 conceptual questions, not genuine exams. */
window.aiGeneratedQuestionSets=window.aiGeneratedQuestionSets||{};
window.aiGeneratedQuestionSets[6]=[
  {
    "question": "Čím se liší LP, ILP, MILP a binární ILP?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "3–4",
    "aiTopic": "Typy programování",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. ILP používá lineární omezení a lineární kritérium; součin dvou volných proměnných obecně lineární není. <i>Zdroj: KOP06.pdf, s. 3–4.</i>",
    "answers": {
      "1": "LP připouští reálné rozhodovací proměnné.",
      "2": "ILP omezuje rozhodovací proměnné na celá čísla.",
      "3": "MILP kombinuje celočíselné a reálné proměnné.",
      "4": "Binární ILP dovoluje hodnoty 0 nebo 1.",
      "5": "V ILP je každý součin dvou proměnných vždy lineární."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 0
    }
  },
  {
    "question": "U batohu s kapacitou 8 a předměty (váha,cena) α=(2,6), β=(3,8), γ=(4,9), δ=(5,10) platí:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "5–6",
    "aiTopic": "Batoh 0/1",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Kombinace α+β+γ váží 9, tedy více než 8. Oficiální optimum je 18. <i>Zdroj: KOP06.pdf, s. 5–6.</i>",
    "answers": {
      "1": "{β,δ} váží 8 a má hodnotu 18.",
      "2": "{α,β,γ} je přípustná.",
      "3": "Čtyři proměnné mohou být binární.",
      "4": "Kritérium maximalizuje součet cen vybraných předmětů."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "O LP relaxaci maximalizačního batohu platí:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "6",
    "aiTopic": "LP relaxace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Relaxace rozšiřuje přípustnou oblast, avšak zaokrouhlení nemusí být přípustné ani optimální. <i>Zdroj: KOP06.pdf, s. 6.</i>",
    "answers": {
      "1": "Může nabývat zlomkových hodnot xi∈[0,1].",
      "2": "Její optimum tvoří horní mez celočíselného optima.",
      "3": "V oficiálním příkladu má hodnotu 20,75 oproti ILP optimu 18.",
      "4": "Zaokrouhlení jejího řešení automaticky prokáže optimum."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Binární omezení xA≤xB znamená:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "7",
    "aiTopic": "Binární implikace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Jde o model logické implikace A⇒B. <i>Zdroj: KOP06.pdf, s. 7.</i>",
    "answers": {
      "1": "Je-li A pravda, musí být pravda B.",
      "2": "A je povinně pravda.",
      "3": "Při A=0,B=1 je podmínka splněna.",
      "4": "Při A=1,B=0 je podmínka porušena."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Jaká omezení odpovídají binární logice?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "7",
    "aiTopic": "Binární logika",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Všechny čtyři vztahy platí za předpokladu binárních proměnných. <i>Zdroj: KOP06.pdf, s. 7.</i>",
    "answers": {
      "1": "xA+xB=1 znamená právě jednu možnost.",
      "2": "xA+xB≤1 zakazuje současný výběr.",
      "3": "xA+xB≥1 vyžaduje alespoň jednu možnost.",
      "4": "z≤a,z≤b,z≥a+b−1 reprezentuje z↔(a∧b)."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Při větvení celočíselné proměnné s LP hodnotou x=2,4:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "8",
    "aiTopic": "B&B větvení",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Používají se floor a ceil zlomkové hodnoty. <i>Zdroj: KOP06.pdf, s. 8.</i>",
    "answers": {
      "1": "Jedna větev zavede x≤2.",
      "2": "Druhá větev zavede x≥3.",
      "3": "Obě větve společně pokryjí všechna celočíselná řešení.",
      "4": "Je nutné zavést x=2,4 do obou větví."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "V maximalizačním B&B je platná LP horní mez větve 23,5 a nejlepší přípustné řešení má cenu 24:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "6, 8",
    "aiTopic": "B&B ořez",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. U maximalizace bezpečně ořezáváme při UB≤LB. <i>Zdroj: KOP06.pdf, s. 6, 8.</i>",
    "answers": {
      "1": "Větev lze bezpečně oříznout.",
      "2": "LP horní mez už není lepší než incumbent.",
      "3": "Je potřeba větev rozvíjet, protože 23,5 není celé číslo.",
      "4": "Roli hraje korektnost odhadu horní meze."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Podmínku y=1 ⇒ aᵀx≤β lze zakódovat pomocí Big-M:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "9",
    "aiTopic": "Big-M",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Příliš velké M oslabuje LP relaxaci a může způsobit numerické potíže. <i>Zdroj: KOP06.pdf, s. 9.</i>",
    "answers": {
      "1": "aᵀx≤β+M(1−y).",
      "2": "Při y=1 zůstane původní omezení.",
      "3": "Při y=0 musí M uvolnit omezení pro povolené hodnoty x.",
      "4": "Libovolně obrovské M vždy zlepší numerickou stabilitu."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Při x∈[0,10] a y=1 ⇒ x≤3 použijeme x≤3+M(1−y). Které M jsou dostatečně velké?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "9",
    "aiTopic": "Volba Big-M",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Při y=0 musí být možné x=10, tedy M≥7. <i>Zdroj: KOP06.pdf, s. 9.</i>",
    "answers": {
      "1": "M=0.",
      "2": "M=5.",
      "3": "M=7.",
      "4": "M=100."
    },
    "correct": {
      "1": 0,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "V modelu TSP je právě jeden vstup a jeden výstup z každého města. Proč to nestačí?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "11–13",
    "aiTopic": "TSP a subtours",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Stupňové podmínky samy nezaručí spojitost a jedinou cestu všemi městy. <i>Zdroj: KOP06.pdf, s. 11–13.</i>",
    "answers": {
      "1": "Mohou vzniknout oddělené podcykly.",
      "2": "Je možné zvolit A→B→A a C→D→C.",
      "3": "Podmínky samy vylučují každý podcyklus.",
      "4": "Je třeba zajistit jeden propojený okruh."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Omezení SEC xAB+xBA≤1:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "13",
    "aiTopic": "SEC",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Obecně jsou potřeba omezení i pro jiné podmnožiny měst. <i>Zdroj: KOP06.pdf, s. 13.</i>",
    "answers": {
      "1": "Zakazuje dvouvrcholový cyklus A→B→A.",
      "2": "Je ukázkou odstranění podcyklu.",
      "3": "Samostatně řeší každý podcyklus v libovolné instanci.",
      "4": "Vyžaduje, aby nejvýše jeden ze dvou protisměrných oblouků byl vybrán."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "MTZ podmínka ui−uj+(n−1)xij≤n−2 pro i,j mimo start A:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "14–15",
    "aiTopic": "MTZ",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Kdyby se pořadové omezení vynucovalo kolem cyklu včetně startu, vznikl by spor i pro správné turné. <i>Zdroj: KOP06.pdf, s. 14–15.</i>",
    "answers": {
      "1": "Pokud je oblouk i→j vybrán, vyžaduje uj≥ui+1.",
      "2": "Brání cyklu mimo počáteční město.",
      "3": "Pro n=4 a xij=0 dává ui−uj≤2.",
      "4": "Musí být bez výjimky aplikována i na návrat do startovního města."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro vybrané oblouky C→D a D→C při MTZ:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "15",
    "aiTopic": "MTZ konflikt",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Pořadí nemůže růst ve dvou opačných směrech současně. <i>Zdroj: KOP06.pdf, s. 15.</i>",
    "answers": {
      "1": "Z C→D plyne uD≥uC+1.",
      "2": "Z D→C plyne uC≥uD+1.",
      "3": "Obě nerovnosti jsou neslučitelné.",
      "4": "Jde o chybu výhradně v cílové funkci."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "V oficiální TSP instanci čtyř měst je turné A–B–D–C–A:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "17–18",
    "aiTopic": "TSP cena a důkaz",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Cena 10 je optimum až po porovnání jiných turné nebo jiném úplném důkazu. <i>Zdroj: KOP06.pdf, s. 17–18.</i>",
    "answers": {
      "1": "Přípustné.",
      "2": "Délky 1+4+1+4=10.",
      "3": "Příklad nalezeného optimálního turné.",
      "4": "Důkaz optimality pouze tím, že známe jedno turné ceny 10."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Konečnědoménový CSP je trojice (X,D,C), kde:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "21",
    "aiTopic": "CSP definice",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. V CSP nejprve hledáme splnění všech omezení, bez nutnosti optimalizace. <i>Zdroj: KOP06.pdf, s. 21.</i>",
    "answers": {
      "1": "X jsou proměnné.",
      "2": "D určuje konečné domény hodnot.",
      "3": "C jsou omezení.",
      "4": "Řešení je úplné přípustné přiřazení všech proměnných."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "U CSP u,v,w∈{1,2,3}, omezení u≠v, w≠v, u<v, jsou přípustné konfigurace:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "21",
    "aiTopic": "CSP instance",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Druhá volba porušuje w≠v, čtvrtá u<v. <i>Zdroj: KOP06.pdf, s. 21.</i>",
    "answers": {
      "1": "u=1,v=2,w=1.",
      "2": "u=1,v=2,w=2.",
      "3": "u=2,v=3,w=1.",
      "4": "u=3,v=1,w=3."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Přečtěte MiniZinc deklaraci `var 18..100: A;`:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "27, 32",
    "aiTopic": "MiniZinc doména",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Interval určuje množinu možných hodnot jediné proměnné A. <i>Zdroj: KOP06.pdf, s. 27, 32.</i>",
    "answers": {
      "1": "A je rozhodovací proměnná.",
      "2": "Její doména zahrnuje všechna celá čísla 18 až 100.",
      "3": "A musí mít hodnotu přesně 18.",
      "4": "Syntaxe deklaruje 83 různých proměnných."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0
    }
  },
  {
    "question": "Jak správně interpretovat MiniZinc výrazy?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "28–30",
    "aiTopic": "MiniZinc výrazy",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. all_different vyžaduje párovou různost, nikoli rovnost. <i>Zdroj: KOP06.pdf, s. 28–30.</i>",
    "answers": {
      "1": "`forall(i in 1..n)(x[i]>=0)` vyžaduje podmínku pro každé i.",
      "2": "`exists(i in 1..n)(x[i]=1)` vyžaduje alespoň jedno takové i.",
      "3": "`sum(i in 1..n)(w[i]*x[i])<=cap` omezuje součet vah.",
      "4": "`all_different(x)` znamená, že všechna x[i] jsou stejná."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "`solve satisfy;` a `solve minimize cost;` znamenají:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "31",
    "aiTopic": "MiniZinc solve",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. První odpovídá CSP, druhý úloze s optimalizačním kritériem. <i>Zdroj: KOP06.pdf, s. 31.</i>",
    "answers": {
      "1": "První hledá libovolné přípustné řešení.",
      "2": "Druhý hledá přípustné řešení s minimální hodnotou cost.",
      "3": "První implicitně minimalizuje počet proměnných.",
      "4": "Model obsahuje právě jednu položku solve."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "O výpočtu věků A,B,C v MiniZinc je pravdivé:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "22–23, 32",
    "aiTopic": "CSP věk",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Součin rozhodovacích proměnných je nelineární vztah. <i>Zdroj: KOP06.pdf, s. 22–23, 32.</i>",
    "answers": {
      "1": "A,B,C mohou mít domény 18..100.",
      "2": "(A>B)->(A*B=576) je implikace.",
      "3": "A=32,B=18,C=50 je model všech uvedených omezení.",
      "4": "Násobení A*B je automaticky lineární aritmetika."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jak funguje běžný CSP solver?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "33",
    "aiTopic": "CSP solver",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Propagace, větvení a návraty tvoří základní mechanismus prohledávání. <i>Zdroj: KOP06.pdf, s. 33.</i>",
    "answers": {
      "1": "Propagací omezení omezuje domény.",
      "2": "Při prázdné doméně vzniká konflikt.",
      "3": "Při nerozhodnutých proměnných může větvit a použít backtracking.",
      "4": "Propagace vždy sama vyřeší libovolný CSP."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Co je pravda o MiniZinc a FlatZinc?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "24–27",
    "aiTopic": "MiniZinc compiler",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. MiniZinc odděluje model, případná data .dzn a zvolený solver. <i>Zdroj: KOP06.pdf, s. 24–27.</i>",
    "answers": {
      "1": "MiniZinc nabízí vysokoúrovňový jazyk modelů.",
      "2": "Compiler může převést model do FlatZinc.",
      "3": "Pro různé solverové backendy není nutné ručně přepsat všechny modely.",
      "4": "Každá instance musí mít data vložená pouze přímo do .mzn, nikoli do .dzn."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "V závěrečném srovnání SAT/SMT/ILP/CSP platí:",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "34",
    "aiTopic": "Srovnání solverů",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Každý formalismus je vhodný pro jiný typ proměnných a omezení. <i>Zdroj: KOP06.pdf, s. 34.</i>",
    "answers": {
      "1": "SAT pracuje s booleovskými tvrzeními.",
      "2": "SMT přidává logiku teorií.",
      "3": "ILP používá lineární omezení s celočíselnými proměnnými.",
      "4": "Finite-domain CSP používá konečné domény a obecnější vztahy."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Vysvětlete na batohu, proč zlomkové LP optimum 20,75 nedokazuje existenci celočíselného řešení hodnoty 20,75.",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "5–6",
    "aiTopic": "LP důkaz",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Základní otázka interpretace relaxace bez psaní modelu. <i>Zdroj: KOP06.pdf, s. 5–6.</i>",
    "answer": "Zlomkové LP připouští hodnoty x_i mezi 0 a 1, které v batohu 0/1 nepřipadají v úvahu. LP optimum je při maximalizaci horní mez. Oficiální celočíselné optimum má hodnotu 18; zaokrouhlením zlomkového řešení nemusíme získat ani přípustné, ani optimální řešení."
  },
  {
    "question": "Na příkladu čtyř měst vysvětlete, proč TSP potřebuje eliminaci podcyklů a jaký je význam MTZ pořadí.",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "11–15",
    "aiTopic": "TSP subtours",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Je důležité vysvětlit chybějící vlastnost modelu, ne vytvářet nová omezení zpaměti. <i>Zdroj: KOP06.pdf, s. 11–15.</i>",
    "answer": "Stupňové podmínky povolí dvě disjunktní kružnice, například A→B→A a C→D→C. Proměnné u_i udávají pořadí měst mimo start; zvolená hrana vyžaduje přísný nárůst pořadí. Na uzavřeném podcyklu by se pořadí muselo stále zvyšovat a vrátit na původní hodnotu, což je spor."
  },
  {
    "question": "Pro Big-M podmínku y=1⇒x≤3 s x∈[0,10] vysvětlete, proč minimální bezpečná hodnota M je 7.",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "9",
    "aiTopic": "Big-M slovně",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Požadovaná dovednost: porozumět zapínání a vypínání podmínky. <i>Zdroj: KOP06.pdf, s. 9.</i>",
    "answer": "Přepínač se zapíše x≤3+M(1−y). Pro y=1 musí x≤3. Pro y=0 nemá nové omezení vyloučit ani x=10, takže 10≤3+M a M≥7. Nejmenší bezpečná konstanta je 7; větší mohou oslabovat LP relaxaci."
  },
  {
    "question": "V čem se liší CSP od COP a jak to poznat na hotovém modelu?",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "21, 31",
    "aiTopic": "CSP a COP",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Není potřeba syntaxi aktivně psát, stačí vysvětlit již uvedené řádky. <i>Zdroj: KOP06.pdf, s. 21, 31.</i>",
    "answer": "CSP hledá úplné přiřazení z konečných domén splňující všechny podmínky. COP přidává cílovou funkci a hledá nejlepší přípustné řešení. V MiniZinc například `solve satisfy;` hledá libovolné řešení, kdežto `solve minimize cost;` optimalizuje."
  },
  {
    "question": "U MiniZinc `constraint (A > B) -> (A * B = 576);` vysvětlete výrok pro případy A>B a A≤B.",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "28, 32",
    "aiTopic": "Čtení implikace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Nejde o programování, ale o logickou interpretaci hotového příkazu. <i>Zdroj: KOP06.pdf, s. 28, 32.</i>",
    "answer": "Při A>B implikace vyžaduje A·B=576. Pokud A≤B, antecedent je nepravdivý a implikace nezavazuje k součinu 576. Tím neplyne, že A>B musí platit."
  },
  {
    "question": "Popište základní cyklus CSP solveru a reakci na prázdnou doménu.",
    "aiGenerated": true,
    "lecture2026": 6,
    "sourceSlides": "KOP06.pdf",
    "sourcePages": "33",
    "aiTopic": "CSP workflow",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L6.</b> Tréninková otázka, nikoli skutečný test. Stavový diagram přednášky na straně 33; implementace se nevyžaduje. <i>Zdroj: KOP06.pdf, s. 33.</i>",
    "answer": "Řešič nejprve propaguje omezení a redukuje domény. Jsou-li všechny proměnné určeny a omezení splněna, má řešení; jinak větví na vybrané proměnné. Pokud propagace vyprázdní doménu, daná větev je ve sporu, odřízne se a solver se vrací k jiné možnosti (backtracking)."
  }
];
