/* AI-generated practice questions; not actual assessment questions. */
window.aiGeneratedQuestionSets=window.aiGeneratedQuestionSets||{};
window.aiGeneratedQuestionSets[2]=[
  {
    "question": "Která tvrzení o velikosti vstupu a časové složitosti jsou správná?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "13–17, 63",
    "aiTopic": "Velikost instance",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. O(m) je exponenciální vzhledem k log m. U explicitní matice n² položek jsou polynomiální závislosti na n ekvivalentní polynomiálním závislostem na délce reprezentace. <i>Zdroj: ANI-KOP02.pdf, s. 13–17, 63.</i>",
    "answers": {
      "1": "Číslo m zapsané binárně má délku Θ(log₂(m+1)) bitů.",
      "2": "Algoritmus běžící v čase O(m) musí mít polynomiální složitost vzhledem k délce binárního zápisu m.",
      "3": "Při posuzování polynomiálnosti záleží na zvolené rozumné reprezentaci vstupu.",
      "4": "Počet měst n lze u běžné explicitní matice vzdáleností považovat za parametr velikosti instance."
    },
    "correct": {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Pro rozhodovací problém Π v třídě P platí:",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "11–17, 42–51, 53",
    "aiTopic": "P a determinismus",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. P⊆NP a P je uzavřena na doplněk. NP-úplnost rozhodně neplyne z P. <i>Zdroj: ANI-KOP02.pdf, s. 11–17, 42–51, 53.</i>",
    "answers": {
      "1": "Existuje deterministický algoritmus rozhodující Π v polynomiálním čase.",
      "2": "Π také patří do NP.",
      "3": "Π musí být NP-úplný.",
      "4": "Doplňkový jazyk rozhodovacího problému Π je rovněž v P."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jak rozumět nedeterministickému stroji při rozhodování jazyka?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "19–38, 42–45",
    "aiTopic": "NDT a větve",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Nedeterministická sémantika je existenční nad výpočetními větvemi; není to Monte Carlo se šancí chyby. <i>Zdroj: ANI-KOP02.pdf, s. 19–38, 42–45.</i>",
    "answers": {
      "1": "U ANO-instance stačí existence jedné přijímající výpočetní větve.",
      "2": "U NE-instance nesmí existovat žádná přijímající větev.",
      "3": "Nedeterminismus znamená, že implementace náhodně zvolí jednu větev a občas se zmýlí.",
      "4": "Polynomiální nedeterministický čas se měří podle délky každé výpočetní větve."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Které výroky o NP-certifikátu jsou správné?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "42–48",
    "aiTopic": "Certifikát NP",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Certifikát dokazující existenci přípustného řešení není povinen dokazovat optimalitu. <i>Zdroj: ANI-KOP02.pdf, s. 42–48.</i>",
    "answers": {
      "1": "Certifikát ANO-instance musí mít délku polynomiální ve velikosti vstupu.",
      "2": "Ověřovač certifikátu je deterministický a běží v polynomiálním čase.",
      "3": "Certifikát musí být také optimálním řešením nějaké optimalizační úlohy.",
      "4": "Pro rozhodovací SAT může být certifikátem úplné ohodnocení booleovských proměnných."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Co správně vyjadřuje co-NP?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "53–62",
    "aiTopic": "co-NP a doplněk",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. NP i co-NP obsahují P; jejich rovnost není obecně vyřešena. Uvažujeme komplement ANO/NE-instance stejného rozhodovacího jazyka. <i>Zdroj: ANI-KOP02.pdf, s. 53–62.</i>",
    "answers": {
      "1": "Jazyk L je v co-NP právě tehdy, když jeho doplněk je v NP.",
      "2": "V co-NP mají záporné instance původního problému polynomiálně ověřitelné svědky v doplňkovém problému.",
      "3": "Je prokázáno, že co-NP a NP jsou disjunktní.",
      "4": "Každý jazyk v P náleží také do co-NP."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Formule F je zadaná a otázka zní: Je F nesplnitelná? Co platí?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "53–59",
    "aiTopic": "UNSAT a svědci",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Jedno zamítající ohodnocení nedokazuje neexistenci všech splňujících ohodnocení. <i>Zdroj: ANI-KOP02.pdf, s. 53–59.</i>",
    "answers": {
      "1": "Je to doplňkový problém k SAT.",
      "2": "Patří do co-NP.",
      "3": "Pouhé uvedení jednoho ohodnocení, které F nesplňuje, dokazuje nesplnitelnost F.",
      "4": "Pokud je F splnitelná, existuje ohodnocení dokazující, že odpověď na tuto otázku je NE."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Pro formule s univerzálním kvantifikátorem ∀Y F(Y) jsou správné závěry:",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "53–61, 65–67",
    "aiTopic": "Existenční versus univerzální",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Záměna ∃ a ∀ mění rozhodovací problém; pro nepravdivé ∀ existuje konkrétní protipříklad. <i>Zdroj: ANI-KOP02.pdf, s. 53–61, 65–67.</i>",
    "answers": {
      "1": "K vyvrácení stačí jediné ohodnocení Y s F(Y)=0.",
      "2": "K potvrzení obecně nestačí ukázat jeden pravdivý příklad.",
      "3": "Jde o stejnou otázku jako ∃Y F(Y).",
      "4": "Univerzální kvantifikace převrací charakter přirozeného krátkého svědka."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Která tvrzení o polynomiální hierarchii odpovídají obvyklým definicím?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "65–80",
    "aiTopic": "Polynomiální hierarchie",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Dvě alternace úrovní se vyjadřují střídajícími se kvantifikátory. Rovnost vyšších tříd s P se nepředpokládá. <i>Zdroj: ANI-KOP02.pdf, s. 65–80.</i>",
    "answers": {
      "1": "Σ₀ᵖ = Π₀ᵖ = P.",
      "2": "Σ₁ᵖ = NP a Π₁ᵖ = co-NP.",
      "3": "Σ₂ᵖ zahrnuje problémy typu ∃Y₁ ∀Y₂ R(I,Y₁,Y₂) s polynomiálním predikátem R.",
      "4": "Π₂ᵖ je totožná s P podle definice."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro QSAT₂ ve tvaru ∃Y₁ ∀Y₂ F(Y₁,Y₂) platí:",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "65–68",
    "aiTopic": "QSAT₂",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Po zafixování Y₁ potřebujeme důkaz pro všechna Y₂; obyčejné ověření jediného úplného ohodnocení nestačí. <i>Zdroj: ANI-KOP02.pdf, s. 65–68.</i>",
    "answers": {
      "1": "Volba Y₁ je kandidátní existenční svědek.",
      "2": "Po fixaci Y₁ je ještě potřeba prověřit univerzální podmínku pro všechna Y₂.",
      "3": "Stačí ověřit F(Y₁,Y₂) pro jednu libovolnou volbu Y₂.",
      "4": "Alternace kvantifikátorů je důvodem, proč je úloha přirozeným příkladem druhé úrovně hierarchie."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Které logické vztahy mezi třídami jsou známé bez předpokladu P ≠ NP?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "68–84",
    "aiTopic": "Známé inkluze",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Zda NP=co-NP, zda P=NP a další některé vztahy zůstávají otevřené; známé inkluze nevyžadují P≠NP. <i>Zdroj: ANI-KOP02.pdf, s. 68–84.</i>",
    "answers": {
      "1": "P ⊆ NP.",
      "2": "NP ⊆ PSPACE.",
      "3": "PSPACE ⊆ EXPTIME.",
      "4": "NP ≠ co-NP."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Na příkladu TSP je korektní rozlišit:",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "3–4, 19–21, 35–48",
    "aiTopic": "TSP: hledání a ověření",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Přijímací větve NDTM odpovídají volbám kandidátů; neexistuje obecný známý převod polynomiálního ověřovače na polynomiální hledací algoritmus. <i>Zdroj: ANI-KOP02.pdf, s. 3–4, 19–21, 35–48.</i>",
    "answers": {
      "1": "Ověření délky předloženého okruhu je výpočetně jiné zadání než nalezení nejkratšího okruhu.",
      "2": "Počet možných pořadí měst může růst faktoriálně.",
      "3": "Rychlá kontrola certifikátu automaticky dává rychlý algoritmus, který certifikát najde.",
      "4": "Nedeterministický model může hádat kandidátní okruh a poté zkontrolovat omezení."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Co je rozumné tvrdit o třídách NP a co-NP bez dalšího důkazu?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "49–62, 81–84",
    "aiTopic": "Co lze a nelze tvrdit",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Rozlišujte otevřené vztahy tříd od prokázaných důsledků definic. <i>Zdroj: ANI-KOP02.pdf, s. 49–62, 81–84.</i>",
    "answers": {
      "1": "Jejich průnik obsahuje P.",
      "2": "Z tvrzení 'neznáme polynomiální algoritmus' ještě neplyne, že problém leží mimo P.",
      "3": "NP = co-NP je obecně dokázáno.",
      "4": "Znát polynomiální certifikát ANO-instance neznamená automaticky znát takový certifikát NE-instance."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Zkonstruujte certifikát rozhodovacího problému batohu: existuje výběr s váhou nejvýše M a hodnotou alespoň K? Uveďte jeho délku a algoritmus ověření.",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "35–48",
    "aiTopic": "Certifikát batohu",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Nestačí napsat 'ověříme výsledek'; u testu je vhodné popsat podmínky i velikost certifikátu. <i>Zdroj: ANI-KOP02.pdf, s. 35–48.</i>",
    "answer": "Certifikát je bitový vektor x∈{0,1}ⁿ. Ověřovač spočítá Σ_i w_i x_i a Σ_i c_i x_i a přijme právě tehdy, když první součet ≤ M a druhý ≥ K. Certifikát má n bitů a aritmetika nad vstupními binárně zadanými čísly je polynomiální v délce vstupu."
  },
  {
    "question": "Vysvětlete, proč z existence polynomiálního ověřovače ještě nelze odvodit polynomiální algoritmus hledající svědka.",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "42–50",
    "aiTopic": "Verification vs finding",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Uvažujte rozdíl mezi složitostí kontroly daného kandidáta a prostorem všech kandidátů. <i>Zdroj: ANI-KOP02.pdf, s. 42–50.</i>",
    "answer": "Ověřovač dostane kandidáta jako další vstup a pouze kontroluje, zda splňuje podmínky. Vyhledávací algoritmus musí přípustného svědka samostatně nalézt mezi potenciálně exponenciálně mnoha možnostmi. Tvrzení o obecném polynomiálním hledání by u standardních NP-úplných úloh implikovalo P=NP; to není prokázáno."
  },
  {
    "question": "Porovnejte SAT, UNSAT a TAUTOLOGY pomocí kvantifikátorů a tříd složitosti.",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "53–61",
    "aiTopic": "SAT, UNSAT, TAUT",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Všechny odpovědi musí používat stejnou interpretaci booleovských ohodnocení. <i>Zdroj: ANI-KOP02.pdf, s. 53–61.</i>",
    "answer": "SAT: ∃Y F(Y)=1, patří do NP. UNSAT: ∀Y F(Y)=0, je doplňkem SAT a patří do co-NP. TAUTOLOGY: ∀Y F(Y)=1, také typický problém v co-NP. UNSAT a TAUTOLOGY nejsou totožnou otázkou nad stejnou formulí: UNSAT(F) znamená TAUTOLOGY(¬F)."
  },
  {
    "question": "Vysvětlete rozdíl mezi ∃X ∀Y R(X,Y) a ∀X ∃Y R(X,Y). Mohou mít pro stejný predikát různou pravdivostní hodnotu?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "65–68",
    "aiTopic": "Alternace kvantifikátorů",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Pořadí kvantifikátorů je významové, nejde jen o stylistickou výměnu symbolů. <i>Zdroj: ANI-KOP02.pdf, s. 65–68.</i>",
    "answer": "Ano. V prvním případě existuje jediná volba X, která funguje pro všechna Y. Ve druhém případě lze Y vybrat zvlášť pro každé X. Například pro X,Y∈{0,1} a R(X,Y)≡(X=Y) je ∃X∀Y R nepravda, ale ∀X∃Y R pravda."
  },
  {
    "question": "Proč samotný přirozený certifikát Y₁ úlohy QSAT₂ není běžným polynomiálně ověřitelným certifikátem NP?",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "65–80",
    "aiTopic": "QSAT₂ a ověřování",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Poznámka ke snímku: jeho neformální věta 'QSAT₂ cannot be in NP' není obecně dokázaná bez předpokladů o hierarchii. <i>Zdroj: ANI-KOP02.pdf, s. 65–80.</i>",
    "answer": "Po vybrání Y₁ je stále nutné ověřit ∀Y₂ F(Y₁,Y₂). Tato kontrola se netestuje jedním dosazením, ale globálním tvrzením o všech volbách Y₂ a typicky má složitost odpovídající co-NP podproblému. Z toho však bez dalších předpokladů nesmíme kategoricky vyvozovat neprokázané oddělení tříd: je to vysvětlení zařazení QSAT₂ do druhé úrovně PH."
  },
  {
    "question": "Ukažte, proč deterministický polynomiální rozhodovací algoritmus pro problém Π zároveň poskytuje polynomiální rozhodovací algoritmus pro komplement Π.",
    "aiGenerated": true,
    "lecture2026": 2,
    "sourceSlides": "ANI-KOP02.pdf",
    "sourcePages": "16–17, 49–62",
    "aiTopic": "Uzavřenost P na doplněk",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L2.</b> Nejde o otázku z autentického testu. Úvaha používá rozhodovací jazyky, nikoli negování optimalizační ceny. <i>Zdroj: ANI-KOP02.pdf, s. 16–17, 49–62.</i>",
    "answer": "Algoritmus spustíme na stejné instanci a prohodíme odpovědi ANO a NE. Výpočet trvá stejný polynomiální čas. Proto P=co-P a všechny jazyky v P jsou také v NP∩co-NP."
  }
];
