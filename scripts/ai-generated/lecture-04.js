/* AI-generated learning questions: ANI-KOP04.pdf (2026). Not authentic exam items. */
window.aiGeneratedQuestionSets = window.aiGeneratedQuestionSets || {};
window.aiGeneratedQuestionSets[4] = [
  {
    "question": "Co v přednášce tvoří stav algoritmu a stavový prostor?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "4–5",
    "aiTopic": "Stav, operátor, konfigurace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Stav popisuje i pracovní informace algoritmu. Není automaticky přípustný ani optimální; stavový prostor záleží také na operátorech. <i>Zdroj: ANI-KOP04.pdf, s. 4–5.</i>",
    "answers": {
      "1": "Stav je ohodnocení konfiguračních proměnných X a případných dalších proměnných algoritmu Z.",
      "2": "Stavový prostor je dvojice (S,Q): množina stavů a množina přechodových operátorů.",
      "3": "Stav musí vždy představovat optimální a přípustné řešení.",
      "4": "Akce je aplikace konkrétního operátoru q na daný stav s."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jak je v ANI-KOP04 definováno okolí a k-okolí stavu s?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "11, 14",
    "aiTopic": "Okolí a k-okolí",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Definice jsou dány dosažitelností v grafu stavového prostoru a operátory Q. Vrcholy vstupního grafu například u TSP nejsou stavy řešiče. <i>Zdroj: ANI-KOP04.pdf, s. 11, 14.</i>",
    "answers": {
      "1": "Okolí tvoří stavy dosažitelné jednou aplikací operátoru.",
      "2": "k-okolí obsahuje stavy dosažitelné alespoň jednou a nejvýše k aplikacemi operátorů.",
      "3": "K-okolí musí nutně obsahovat všechny vrcholy vstupního grafu instance.",
      "4": "Okolí závisí na zvolených operátorech, nejen na hodnotě optimalizačního kritéria."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Co rozlišuje vstupní graf instance TSP a graf stavového prostoru TSP?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "14, 19–20, 24–28",
    "aiTopic": "Vstupní graf vs. graf stavů",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Graf stavů je grafem kandidátních konfigurací; nesmí se zaměnit s grafem měst, který je součástí zadání. <i>Zdroj: ANI-KOP04.pdf, s. 14, 19–20, 24–28.</i>",
    "answers": {
      "1": "Vstupní graf má vrcholy měst a hrany možných spojení.",
      "2": "V grafu stavového prostoru může každý vrchol reprezentovat celou kandidátní trasu nebo permutaci.",
      "3": "Hrana mezi stavy vyjadřuje změnu trasy prostřednictvím operátoru, například 2-exchange.",
      "4": "Oba grafy musí mít stejný počet vrcholů."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Máme bitové konfigurace batohu (x1,x2,x3). Jaké důsledky má volba operátorů?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "6–10, 16–18",
    "aiTopic": "Souvislost a symetrie",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Swap zachovává počet jedniček a vytváří oddělené komponenty. Operátory add/remove mají inverzní akce a dovolují přejít přes libovolný bitový vektor. <i>Zdroj: ANI-KOP04.pdf, s. 6–10, 16–18.</i>",
    "answers": {
      "1": "Operátory přidání i odebrání libovolné položky umožňují změnit počet vybraných položek.",
      "2": "Pouhým prohozením hodnot dvou bitů nelze změnit počet jedniček.",
      "3": "Swap-operátory samy spojí konfiguraci (0,0,0) s konfigurací (1,0,0).",
      "4": "Pokud jsou oba směry změny jednotlivých bitů povoleny, lze mezi libovolnými dvěma bitovými stavy přejít."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "V oficiálním příkladu TSP se z trasy A–B–D–C–A provede 2-exchange. Co platí?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "19–23",
    "aiTopic": "TSP a 2-exchange",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Operátor mění spojení či pořadí, nikoli vstupní množinu měst. Na snímku je konkrétní přechod mezi celými kandidátními turné. <i>Zdroj: ANI-KOP04.pdf, s. 19–23.</i>",
    "answers": {
      "1": "Odstraní se zvolené dvě nesousední hrany a vloží se jiné dvě tak, aby zůstalo platné turné.",
      "2": "Na snímku se mění hrany (A,B) a (C,D) na (A,D) a (B,C).",
      "3": "Vznikne trasa A–D–B–C–A.",
      "4": "Operátor 2-exchange musí změnit množinu měst instance."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro batoh se 3 binárními proměnnými X a symbolem ? pro nerozhodnuté hodnoty platí:",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "29–33",
    "aiTopic": "State space vs. search space",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Znak ? může být 0 nebo 1, tedy z jednoho částečného ohodnocení získáme více dokončení. Konkrétní celkovou cenu obecně nelze určit. <i>Zdroj: ANI-KOP04.pdf, s. 29–33.</i>",
    "answers": {
      "1": "Prostor úplných ohodnocení má 2³=8 bodů.",
      "2": "Množina všech částečných ohodnocení nad {0,1,?} má 3³=27 bodů.",
      "3": "Stav (1,?,0) reprezentuje dvě úplné konfigurace.",
      "4": "Stav (1,?,0) už sám určuje jednu definitivní optimalizační cenu."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jak správně interpretovat prohledávací strom s částečnými přiřazeními?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "30–33",
    "aiTopic": "Kořen a větvení",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. V search space se rozhoduje postupně; částečný uzel je zástupce možných doplnění, ne nutně hotové řešení. <i>Zdroj: ANI-KOP04.pdf, s. 30–33.</i>",
    "answers": {
      "1": "Kořen může mít všechny proměnné nerozhodnuté.",
      "2": "Větev často nejprve vybere proměnnou a potom jednu z jejích hodnot.",
      "3": "Částečný uzel reprezentuje množinu úplných konfigurací.",
      "4": "Každý uzel musí být stejně dobrým přípustným řešením jako list."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Která tvrzení o úplných, systematických a informovaných strategiích jsou správná podle přednášky?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "35, 39–41",
    "aiTopic": "Úplnost a systematičnost",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Zcela obecné lokální zlepšování může uvíznout. Úplnost je záruka správného nalezení řešení či optima, systematičnost omezuje opakované návštěvy. <i>Zdroj: ANI-KOP04.pdf, s. 35, 39–41.</i>",
    "answers": {
      "1": "Úplná strategie navštíví stavy kromě těch, u nichž bylo prokázáno, že nemohou obsahovat požadované (optimální) řešení.",
      "2": "Systematická strategie je úplná a každý stav navštíví nanejvýš jednou.",
      "3": "Informovaná strategie využívá znalosti konkrétního problému k omezení počtu navštívených stavů.",
      "4": "Každá jednoduchá zlepšovací lokální heuristika je podle definice úplná."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "K čemu slouží množiny OPEN a CLOSED v obecném algoritmu procházení grafu stavů?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "42–44",
    "aiTopic": "OPEN/CLOSED",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Způsob výběru z OPEN určuje BFS/DFS/Best-first; samotná množina OPEN nemusí mít jedinou pevnou datovou strukturu. <i>Zdroj: ANI-KOP04.pdf, s. 42–44.</i>",
    "answers": {
      "1": "OPEN uchovává objevené stavy, které čekají na rozvinutí.",
      "2": "CLOSED uchovává stavy, které byly již prozkoumány.",
      "3": "Kontrola CLOSED umožňuje vyhnout se opakovanému zpracování cyklů.",
      "4": "OPEN je vždy zásobník, nezávisle na konkrétní strategii."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Jaký způsob výběru uzlu z OPEN odpovídá běžným strategiím?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "42–44, 57",
    "aiTopic": "BFS / DFS / Best-first",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Best-first volí z celé OPEN struktury, kdežto lokální Best Only vybírá nejlepšího zlepšujícího souseda právě aktuálního stavu. <i>Zdroj: ANI-KOP04.pdf, s. 42–44, 57.</i>",
    "answers": {
      "1": "BFS: fronta FIFO.",
      "2": "DFS: zásobník LIFO.",
      "3": "Best-first: prioritní výběr podle odhadované kvality stavu.",
      "4": "Best-first: vždy totožný s lokálním postupem Best Only."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro maximální cenu batohu 0/1 a jeho zlomkovou relaxaci jsou správná tvrzení:",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "45–47",
    "aiTopic": "Zlomkový batoh a mez",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Zlomková relaxace rozšiřuje přípustnou oblast. Seřazení podle c/w optimálně řeší zlomkovou, nikoli obecně celočíselnou variantu. <i>Zdroj: ANI-KOP04.pdf, s. 45–47.</i>",
    "answers": {
      "1": "Každé přípustné řešení původního 0/1 batohu je přípustné i ve zlomkové relaxaci.",
      "2": "Optimální cena zlomkového batohu je horní mezí ceny optimálního 0/1 batohu.",
      "3": "Ve zlomkovém batohu lze použít nenulový zlomek jedné z položek.",
      "4": "Greedy výběr podle poměru cena/váha je obecně optimální také pro 0/1 batoh."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Oficiální batoh: M=1000, c=(40,50,100,95,30), w=(200,314,198,500,300). Která tvrzení platí?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "49–53",
    "aiTopic": "Číselný příklad B&B",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Poměry c/w vedou k pořadí 3,1,4,2,5. Po položkách 3,1,4 činí cena 235 a zbylé místo 102; 235+50·102/314≈251,24. <i>Zdroj: ANI-KOP04.pdf, s. 49–53.</i>",
    "answers": {
      "1": "Výběr položek 1, 3 a 4 má hmotnost 898.",
      "2": "Výběr položek 1, 3 a 4 má hodnotu 235.",
      "3": "Po tomto výběru zbývá kapacita 102.",
      "4": "V zlomkové relaxaci lze přidat 102/314 položky 2 a dosáhnout horní meze přibližně 251,24."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1
    }
  },
  {
    "question": "Které ořezy jsou bezpečné u B&B pro maximalizaci?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "45–53",
    "aiTopic": "Bezpečné ořezávání",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Pouze bezpečná horní mez nebo důkaz nepřípustnosti umožňují zachovat úplnost. Podhodnocený odhad by mohl ztratit optimum. <i>Zdroj: ANI-KOP04.pdf, s. 45–53.</i>",
    "answers": {
      "1": "Větev má platnou horní mez UB nejvýše rovnou ceně nejlepšího známého přípustného řešení LB.",
      "2": "Částečná konfigurace nemůže být doplněna na žádné přípustné řešení.",
      "3": "Částečná cena je zatím nižší než cena nejlepšího známého řešení, ale možná dokončení mohou být lepší.",
      "4": "Pro odříznutí větve stačí libovolný podhodnocený odhad její nejlepší ceny."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0
    }
  },
  {
    "question": "Pro maximalizační lokální heuristiku s hodnotou stavu 10 a sousedy v pořadí 11, 15, 9 platí:",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "54–57",
    "aiTopic": "First Improvement vs. Best Only",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. First Improvement končí výběr po prvním zlepšení; Best Only vybere nejlepšího zlepšujícího souseda z prozkoumaného okolí. <i>Zdroj: ANI-KOP04.pdf, s. 54–57.</i>",
    "answers": {
      "1": "First Improvement v tomto pořadí přijme souseda s hodnotou 11.",
      "2": "Best Only vyhodnotí okolí a přijme souseda s hodnotou 15.",
      "3": "First Improvement musí vždy prohlédnout všechny sousedy.",
      "4": "Žádný z prvních dvou přechodů sám neprokazuje globální optimum."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Která tvrzení o postupu Kernighan–Lin v této přednášce jsou správná?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "58",
    "aiTopic": "Kernighan–Lin",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Metoda zkoumá sekvence akcí bez požadavku průběžného zlepšení v každém mezikroku. Tím rozšiřuje efektivní okolí, ne však na garantované globální optimum. <i>Zdroj: ANI-KOP04.pdf, s. 58.</i>",
    "answers": {
      "1": "Během vytváření složeného okolí se mohou dočasně provádět i nezlepšující akce.",
      "2": "Z vygenerované posloupnosti stavů se následně vybírá nejlepší.",
      "3": "Jde o automatický důkaz globální optimality.",
      "4": "Umožňuje posoudit delší sekvenci změn než jedno prosté zlepšení."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 1
    }
  },
  {
    "question": "Jak lze reagovat na uvíznutí lokální metody v lokálním optimu?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "59–63",
    "aiTopic": "Lokální optima a únik",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Lokální optimum je definováno vůči zvolenému okolí; z něj neplyne globální optimalita. Přednáška motivuje složitější heuristiky. <i>Zdroj: ANI-KOP04.pdf, s. 59–63.</i>",
    "answers": {
      "1": "Zkusit jiné či větší okolí.",
      "2": "Vrátit nevhodné rozhodnutí nebo začít od jiného stavu.",
      "3": "Povolit v odůvodněném postupu i dočasné zhoršení kritéria.",
      "4": "Usoudit, že už neexistuje žádná lepší přípustná konfigurace v celém stavovém prostoru."
    },
    "correct": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 0
    }
  },
  {
    "question": "Pro třípoložkový batoh navrhněte operátory tak, aby byl celý prostor 0/1 konfigurací silně souvislý, a vysvětlete, proč samotné prohazování dvou bitů nestačí.",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "6–18",
    "aiTopic": "Důkaz souvislosti a symetrie",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Důkaz se vztahuje ke všem úplným bitovým konfiguracím, nikoli automaticky ke grafu omezenému jen na přípustné stavy. <i>Zdroj: ANI-KOP04.pdf, s. 6–18.</i>",
    "answer": "Zaveďme pro každý bit operátory 0→1 (přidání) a 1→0 (odebrání), kdykoliv je daná změna definována. Libovolný vektor lze převést na (0,0,0) odebráním všech vybraných položek a pak vytvořit libovolný cílový vektor přidáním položek. Přechody jsou vratné, proto je graf silně souvislý. Naproti tomu swap jen přemísťuje jedničky a zachovává jejich počet, takže například (0,0,0) a (1,0,0) nejsou spojeny posloupností swapů. Pro úlohu s kapacitním omezením je nutné zvlášť rozhodnout, zda stavový prostor zahrnuje i nepřípustné konfigurace."
  },
  {
    "question": "Rozlište stavový prostor a prostor prohledávání pro tři binární proměnné batohu. Co přesně reprezentuje uzel (1,?,0)?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "29–33",
    "aiTopic": "2³ versus 3³",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Neztotožňujte počet všech možných částečných přiřazení s počtem uzlů libovolného konkrétního stromu, pokud se stanoví pevné pořadí rozhodování. <i>Zdroj: ANI-KOP04.pdf, s. 29–33.</i>",
    "answer": "Ve stavovém prostoru máme 2³=8 úplných konfigurací, každá rozhoduje všechny tři položky. V prostoru částečných ohodnocení nad {0,1,?} existuje 3³=27 různých zápisů. Uzel (1,?,0) představuje dvě dokončení: (1,0,0) a (1,1,0). V konstruktivním prohledávání lze větvit na x₂=0 a x₂=1; cena částečného uzlu není obecně konečnou cenou jednoznačně určeného řešení."
  },
  {
    "question": "Pro oficiální pětipoložkový batoh odvoďte přípustnou celočíselnou cenu a horní mez zlomkové relaxace. Je samotné porovnání mezí důkazem optimality?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "49–53",
    "aiTopic": "Numerická LP-relaxace",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Klíčové je odlišit nalezené dobré řešení, dolní mez a platný odhad horní meze. <i>Zdroj: ANI-KOP04.pdf, s. 49–53.</i>",
    "answer": "Kapacita M=1000, ceny c=(40,50,100,95,30) a váhy w=(200,314,198,500,300). Zvolíme položky 3,1,4: hmotnost 198+200+500=898 a cena 100+40+95=235. Jde o přípustný celočíselný kandidát a dolní mez LB=235. Zbývajících 102 jednotek vyplníme zlomkem 102/314 položky 2, což dá horní mez UB=235+50·102/314≈251,24. Samotné LB<UB nedokazuje OPT=235. K potvrzení optimality je potřeba dokončit bezpečné prohledávání nebo najít jiný úplný důkaz."
  },
  {
    "question": "Vysvětlete rozdíl mezi BFS, DFS, Best-first a lokální metodou Best Only. Proč samotný výběr z OPEN ještě nezaručuje globální optimum?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "39–44, 55–57",
    "aiTopic": "Best-first vs. Best Only",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Slovo 'best' v Best-first neznamená tentýž algoritmus jako Best Only. <i>Zdroj: ANI-KOP04.pdf, s. 39–44, 55–57.</i>",
    "answer": "BFS vybírá z OPEN jako z FIFO fronty, DFS ze zásobníku LIFO a Best-first podle priority/odhadu. Pracují s množinou objevených stavů a ve variantě pro grafy s CLOSED evidují již vyřízené stavy. Naproti tomu lokální Best Only vybírá nejlepšího zlepšujícího souseda právě aktuálního stavu a zpravidla neudržuje globální OPEN. Ani prioritní procházení, ani lokální volba sama neprokazuje optimum; potřebujeme úplnost a případné bezpečné ořezy."
  },
  {
    "question": "Vysvětlete na větvích a hranicích pro maximalizaci, proč nelze oříznout větev jen podle její dosavadní nízké ceny. Jak může pomoci dobré počáteční řešení?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "48–53",
    "aiTopic": "Meze a incumbent",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Přednáška přímo zmiňuje externí informaci o hodnotě přes 230; pro bezpečný ořez je zásadní skutečná nebo prokazatelná dolní mez. <i>Zdroj: ANI-KOP04.pdf, s. 48–53.</i>",
    "answer": "Dosavadní částečná cena se může zlepšit přidáním dalších položek. Větev lze vyřadit pro nepřípustnost, nebo když platná horní mez nejlepších dokončení UB nepřevýší nejlepší známou přípustnou cenu LB. Dobrý počáteční kandidát od jiné heuristiky zvýší LB dříve, takže se více větví dostane do situace UB≤LB a mohou být bezpečně odříznuty. Pokud známe pouze přibližný odhad bez důkazu přípustnosti, nesmíme ho používat jako certifikovanou mez."
  },
  {
    "question": "Jak se liší First Improvement, Best Only a Kernighan–Lin v zacházení se zhoršujícími mezikroky a co to znamená pro lokální optima?",
    "aiGenerated": true,
    "lecture2026": 4,
    "sourceSlides": "ANI-KOP04.pdf",
    "sourcePages": "54–63",
    "aiTopic": "Důvod složeného okolí",
    "aiNote": "<b>AI-generated · ANI-KOP 2026 L4.</b> Cvičná otázka vytvořená na základě prezentace; nejde o autentické zadání vyučujícího. Bez požadavku přímého zlepšení v každé podakci lze objevit kombinované tahy nepřístupné jediné lokální změně. <i>Zdroj: ANI-KOP04.pdf, s. 54–63.</i>",
    "answer": "First Improvement přijme první přímo zlepšující sousední stav a je citlivá na pořadí operátorů. Best Only prohlédne kandidáty okolí a vybere nejlepší přímé zlepšení. Obě základní verze mohou skončit bez zlepšujícího souseda v lokálním optimu vzhledem ke zvolenému okolí. Kernighan–Lin prozkoumává sérii operací i přes nezlepšující mezikroky a z celé sekvence vybírá nejlepší vytvořený stav. Tím vytváří širší složené okolí, ale sám o sobě nezaručuje globální optimum."
  }
];
