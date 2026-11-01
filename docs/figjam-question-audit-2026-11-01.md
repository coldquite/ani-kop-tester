# Kontrola otázek z FigJam vůči ANI-KOP testeru – 1. 11. 2026

> **NEÚPLNÁ KONTROLA.** Z 112 obrázků na desce bylo přes Figma přečteno pouze 71. Po zobrazení obrázku č. 71 Figma ohlásila limit volání pro Education plan. Obrázky 72–112 **nebyly přečteny ani porovnány**. Závěry níže se vztahují výhradně ke zkontrolované části.

## Zdroje a metodika

- [FigJam – NI-KOP zápočet](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-)
- GitHub: [coldquite/ani-kop-tester](https://github.com/coldquite/ani-kop-tester).
- Před změnou bylo v testeru **102** otázek Assessment a **94** otázek Exam, celkem **196**.
- Číslo obrázku je název objektu `image N` ve FigJamu, **nikoli číslo otázky z Moodle**. Jeden obrázek může obsahovat více otázek a stejné otázky se objevují na několika obrázcích.
- Stav **TÉMATICKY POKRYTO** označuje tematicky odpovídající položku v existujícím testeru, často v jiné formulaci nebo s více odpověďmi. Neznamená doslovnou shodu všech odpovědních možností.
- Stav **PŘIDÁNO** označuje novou, samostatnou úlohu vloženou do původní sady `questions.js`; `A103` znamená Assessment otázku č. 103 atd.
- Obrázky obsahující jen definici či schéma jsou vedeny jako **VÝUKOVÝ SNÍMEK**.
- U sporných či nesprávných odpovědí původního studentského materiálu jsou v nových odpovědích doplněna upozornění; nepovažujte snímky za autoritativní řešení.

## Statistika zpracování

| Ukazatel | Počet |
|---|---:|
| Obrázky na desce | 112 |
| Přečtené obrázky | 71 |
| Nepřečtené kvůli limitu | 41 |
| Tematicky pokryté existujícími otázkami | 59 |
| Nově přidané samostatné otázky | 6 |
| Duplicitní vyobrazení nově přidané otázky | 1 |
| Výukové snímky místo samostatných otázek | 5 |
| Celkový počet otázek v testeru po úpravě | 202 |
| Otázky pro první část (P1–P6) po úpravě | 105 |
| Druhá část / archiv | 80 / 17 (beze změny) |

## Nově přidané úlohy

| FigJam obrázek | Tester | Téma | Přednáška |
|---|---|---|---|
| 11 | A103 | Dva principy důkazu, že rozhodovací problém nepatří do P (s opravou zavádějící části vzorové odpovědi) | P3 |
| 18 | A104 | Souvislý symetrický stavový prostor pro Minimum Bin Packing | P4 |
| 21 | A105 | NPC rozhodovací formulace problému maximální kliky | P3 |
| 38 | A106 | Souvislý symetrický stavový prostor pro Minimum Multiprocessor Scheduling | P4 |
| 49 | A107 | co-NP-úplná rozhodovací varianta maximální kliky | P3 |
| 53, 63 | A108 | Konfigurační proměnné, omezení a důkaz CLIQUE ∈ NP | P3 |

## Kontrola po jednotlivých obrázcích

| Obr. | Stav | Nalezeno v testeru / doplněno | Uzel FigJam |
|---:|---|---|---|
| 1 | TÉMATICKY POKRYTO | A16 | [`1:11`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-11) |
| 2 | TÉMATICKY POKRYTO | A7 | [`1:21`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-21) |
| 3 | TÉMATICKY POKRYTO | A93 | [`1:25`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-25) |
| 4 | TÉMATICKY POKRYTO | A100 | [`1:37`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-37) |
| 5 | TÉMATICKY POKRYTO | A89 | [`1:41`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-41) |
| 6 | VÝUKOVÝ SNÍMEK | — | [`1:46`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-46) |
| 7 | TÉMATICKY POKRYTO | A9 | [`1:60`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-60) |
| 8 | TÉMATICKY POKRYTO | A30 | [`1:66`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-66) |
| 9 | TÉMATICKY POKRYTO | A26–27 | [`1:70`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-70) |
| 10 | TÉMATICKY POKRYTO | A99 | [`1:84`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-84) |
| 11 | PŘIDÁNO | A103 | [`1:93`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-93) |
| 12 | TÉMATICKY POKRYTO | A22 | [`1:99`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-99) |
| 13 | TÉMATICKY POKRYTO | A90–92 | [`2:6`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-6) |
| 14 | TÉMATICKY POKRYTO | A90–92 | [`2:10`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-10) |
| 15 | VÝUKOVÝ SNÍMEK | — | [`2:14`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-14) |
| 16 | TÉMATICKY POKRYTO | A90–92 | [`2:24`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-24) |
| 17 | TÉMATICKY POKRYTO | A57/93 | [`2:31`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-31) |
| 18 | PŘIDÁNO | A104 | [`2:35`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-35) |
| 19 | TÉMATICKY POKRYTO | A57/93 | [`2:39`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-39) |
| 20 | TÉMATICKY POKRYTO | A96 | [`2:47`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-47) |
| 21 | PŘIDÁNO | A105 | [`2:53`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-53) |
| 22 | TÉMATICKY POKRYTO | A6/63 | [`2:62`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-62) |
| 23 | TÉMATICKY POKRYTO | A7/100 | [`2:66`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-66) |
| 24 | VÝUKOVÝ SNÍMEK | — | [`2:73`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-73) |
| 25 | VÝUKOVÝ SNÍMEK | — | [`2:77`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-77) |
| 26 | VÝUKOVÝ SNÍMEK | — | [`2:81`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-81) |
| 27 | TÉMATICKY POKRYTO | A26–27 | [`2:85`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-85) |
| 28 | TÉMATICKY POKRYTO | A13 | [`2:89`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-89) |
| 29 | TÉMATICKY POKRYTO | A10 | [`2:93`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-93) |
| 30 | TÉMATICKY POKRYTO | A13/33 | [`2:97`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-97) |
| 31 | TÉMATICKY POKRYTO | A13/33 | [`2:101`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-101) |
| 32 | TÉMATICKY POKRYTO | A62 | [`2:105`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-105) |
| 33 | TÉMATICKY POKRYTO | A21 | [`2:114`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-114) |
| 34 | TÉMATICKY POKRYTO | A90–92 | [`2:120`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-120) |
| 35 | TÉMATICKY POKRYTO | A35–36 | [`2:129`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-129) |
| 36 | TÉMATICKY POKRYTO | A90–92 | [`2:133`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-133) |
| 37 | TÉMATICKY POKRYTO | A100 | [`2:137`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-137) |
| 38 | PŘIDÁNO | A106 | [`2:143`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-143) |
| 39 | TÉMATICKY POKRYTO | A93 | [`2:148`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-148) |
| 40 | TÉMATICKY POKRYTO | A96 | [`2:155`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-155) |
| 41 | TÉMATICKY POKRYTO | A70 | [`2:159`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-159) |
| 42 | TÉMATICKY POKRYTO | A6/7/93 | [`2:163`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-163) |
| 43 | TÉMATICKY POKRYTO | A13/26/99 | [`2:170`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-170) |
| 44 | TÉMATICKY POKRYTO | A31/43 | [`2:174`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-174) |
| 45 | TÉMATICKY POKRYTO | A18 | [`2:178`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-178) |
| 46 | TÉMATICKY POKRYTO | A90–92 | [`2:182`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-182) |
| 47 | TÉMATICKY POKRYTO | A100 | [`2:189`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-189) |
| 48 | TÉMATICKY POKRYTO | A59 | [`2:196`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-196) |
| 49 | PŘIDÁNO | A107 | [`2:200`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-200) |
| 50 | TÉMATICKY POKRYTO | A6/7/93 | [`2:204`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-204) |
| 51 | TÉMATICKY POKRYTO | A13/89/99 | [`2:208`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-208) |
| 52 | TÉMATICKY POKRYTO | A34 | [`2:212`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-212) |
| 53 | PŘIDÁNO | A108 | [`2:216`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-216) |
| 54 | TÉMATICKY POKRYTO | A90–92 | [`2:220`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-220) |
| 55 | TÉMATICKY POKRYTO | A96 | [`2:224`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-224) |
| 56 | TÉMATICKY POKRYTO | A16 | [`2:228`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-228) |
| 57 | TÉMATICKY POKRYTO | A8 | [`2:232`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-232) |
| 58 | TÉMATICKY POKRYTO | A7/93/99 | [`2:236`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-236) |
| 59 | TÉMATICKY POKRYTO | A9 | [`2:240`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-240) |
| 60 | TÉMATICKY POKRYTO | A26 | [`2:244`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-244) |
| 61 | TÉMATICKY POKRYTO | A89 | [`2:251`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-251) |
| 62 | TÉMATICKY POKRYTO | A13 | [`2:260`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-260) |
| 63 | DUPLIKÁT VE FIGJAMU | #53 → A108 | [`2:264`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-264) |
| 64 | TÉMATICKY POKRYTO | A90–92 | [`2:268`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-268) |
| 65 | TÉMATICKY POKRYTO | A93 | [`2:272`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-272) |
| 66 | TÉMATICKY POKRYTO | A59 | [`2:276`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-276) |
| 67 | TÉMATICKY POKRYTO | A100 | [`2:280`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-280) |
| 68 | TÉMATICKY POKRYTO | A93 | [`2:289`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-289) |
| 69 | TÉMATICKY POKRYTO | A6/7 | [`2:293`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-293) |
| 70 | TÉMATICKY POKRYTO | A6/63 | [`2:300`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-300) |
| 71 | TÉMATICKY POKRYTO | A26/27 | [`2:304`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-304) |
| 72 | NEPROVĚŘENO | — | — |
| 73 | NEPROVĚŘENO | — | — |
| 74 | NEPROVĚŘENO | — | — |
| 75 | NEPROVĚŘENO | — | — |
| 76 | NEPROVĚŘENO | — | — |
| 77 | NEPROVĚŘENO | — | — |
| 78 | NEPROVĚŘENO | — | — |
| 79 | NEPROVĚŘENO | — | — |
| 80 | NEPROVĚŘENO | — | — |
| 81 | NEPROVĚŘENO | — | — |
| 82 | NEPROVĚŘENO | — | — |
| 83 | NEPROVĚŘENO | — | — |
| 84 | NEPROVĚŘENO | — | — |
| 85 | NEPROVĚŘENO | — | — |
| 86 | NEPROVĚŘENO | — | — |
| 87 | NEPROVĚŘENO | — | — |
| 88 | NEPROVĚŘENO | — | — |
| 89 | NEPROVĚŘENO | — | — |
| 90 | NEPROVĚŘENO | — | — |
| 91 | NEPROVĚŘENO | — | — |
| 92 | NEPROVĚŘENO | — | — |
| 93 | NEPROVĚŘENO | — | — |
| 94 | NEPROVĚŘENO | — | — |
| 95 | NEPROVĚŘENO | — | — |
| 96 | NEPROVĚŘENO | — | — |
| 97 | NEPROVĚŘENO | — | — |
| 98 | NEPROVĚŘENO | — | — |
| 99 | NEPROVĚŘENO | — | — |
| 100 | NEPROVĚŘENO | — | — |
| 101 | NEPROVĚŘENO | — | — |
| 102 | NEPROVĚŘENO | — | — |
| 103 | NEPROVĚŘENO | — | — |
| 104 | NEPROVĚŘENO | — | — |
| 105 | NEPROVĚŘENO | — | — |
| 106 | NEPROVĚŘENO | — | — |
| 107 | NEPROVĚŘENO | — | — |
| 108 | NEPROVĚŘENO | — | — |
| 109 | NEPROVĚŘENO | — | — |
| 110 | NEPROVĚŘENO | — | — |
| 111 | NEPROVĚŘENO | — | — |
| 112 | NEPROVĚŘENO | — | — |

## Otevřené body a omezení

1. Neprohlédnuté obrázky 72–112 mohou obsahovat další unikátní otázky. **Nelze tvrdit, že byl zkontrolován celý board.**
2. U složených obrázků s více zadáními bylo ověřováno tematické pokrytí, ne doslovná shoda každé podotázky. Pro přesný audit všech variant odpovědí je vhodné provést ještě samostatnou kontrolu po jednotlivých výrocích.
3. Obrázek 11 ve studentské odpovědi nesprávně naznačuje, že z nemožnosti polynomiálně ověřit certifikát lze automaticky vyvodit nečlenství problému v P. Nová odpověď obsahuje matematicky korektní odlišné přístupy a výslovné upozornění.
4. Nové otázky obsahují česky formulované vysvětlení, odkazy na zdrojové číslo obrázku a byly zařazeny do tematických sad přednášek P3 a P4.
5. **Nebylo prováděno end-to-end testování v prohlížeči**, pouze strukturální kontrola přiřazení otázek a zachování původních správných odpovědí.
