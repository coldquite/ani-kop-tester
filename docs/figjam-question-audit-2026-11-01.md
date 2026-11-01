# Úplná kontrola FigJam NI-KOP zápočet vůči testeru – 1. 11. 2026

> **DOKONČENO: 112/112 obrázků bylo prohlédnuto.** Předchozí částečná kontrola přes Figma se zastavila po 71 obrázcích. Zbývajících 41 je nyní prohlédnuto v původním rozlišení z PDF exportu `NI-KOP zápočet (Copy) (1).pdf`. Jedná se o tematickou deduplikaci obrázků; nevylučuje odlišnosti jednotlivých výroků a historických odpovědí.

## Metodika

- [Původní FigJam](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-); PDF export je jedna mimořádně velká stránka, která uchovává všech 112 snímků jako samostatné obrázky (v PDF též technické překryvné vrstvy).
- [Repozitář testeru](https://github.com/coldquite/ani-kop-tester), hlavní větev `master`.
- Stav **TÉMATICKY POKRYTO** znamená, že obdobné zadání nebo jednotlivá tvrzení již v testeru jsou, nikoli že znění nebo všechny odpovědní možnosti jsou shodné.
- Stav **PŘIDÁNO** znamená samostatnou novou otázku s česky ověřenou odpovědí a uvedeným zdrojem.
- Stav **DUPLIKÁT VE FIGJAMU** znamená opakované vyobrazení nové otázky. Žádné otázky se z tohoto důvodu neduplikují.
- **VÝUKOVÝ SNÍMEK** není testová otázka.
- U historických ručně vyplněných testů nebylo přebíráno tužkou označené hodnocení jako autoritativní klíč.

## Výsledná statistika

| Metrika | Počet |
|---|---:|
| Obrázky na dosce / v PDF | **112** |
| Prohlédnuto | **112 (100 %)** |
| Tematicky pokryto stávajícími otázkami | **97** |
| Obrázky s novým samostatným zadáním | **8** |
| Duplicitní vyobrazení nové otázky | **2** |
| Výukové snímky | **5** |
| Unikátní otázky doplněné z FigJam celkem | **8** |
| Z první kontroly (obrázky 1–71) | **6: A103–A108** |
| Z doplněné kontroly (obrázky 72–112) | **2: A155–A156** |
| Celkový počet otázek před prvním FigJam porovnáním | 196 |
| Doplňky ze staršího PDF, mezitím zpracované samostatně | +46 |
| **Počet otázek po dokončení** | **250** |
| Průběžný test · P1–P6 | **109** |
| Druhá část · P7–P12 | **105** |
| Archiv starších témat | **36** |
| Aktuální témata · P1–P12 | **214** |

**Pozor:** statistika 112 je podle obrázků, ne podle jedinečných otázek. Jeden obrázek může obsahovat více výroků i několik zadání. Některé screenshoty zobrazují totéž zadání jinými slovy; status „tematicky pokryto“ není potvrzení totožnosti všech možností.

## Nově doplněná zadání

| FigJam obrázky | Tester | Obsah | Přednáška |
|---|---|---|---|
| 11 | A103 | Dva principy důkazu nečlenství v P | P3 |
| 18 | A104 | Souvislý symetrický stavový prostor Minimum Bin Packing | P4 |
| 21 | A105 | NP-úplná rozhodovací verze CLIQUE | P3 |
| 38 | A106 | Stavový prostor Minimum Multiprocessor Scheduling | P4 |
| 49 | A107 | co-NP-úplná varianta CLIQUE | P3 |
| 53, 63 | A108 | CLIQUE ∈ NP: proměnné, omezení, ověření certifikátu | P3 |
| 86 | **A155** | Rozhodovací TSP ∈ NP: tři části (konfigurace, omezení, důkaz) | P2 |
| 90, 98 | **A156** | Optimalizační verze CNF-SAT: MAX-SAT a důkaz NP-těžkosti | P3 |

Čísla A109–A154 obsadily otázky přidané mezitím z historického `NI-KOP uzavřené otázky.pdf`. Stávající 248 otázek se nepřepisovalo.

## Kontrola každého obrázku (112 položek)

| Obr. | Stav | Tester | Odkaz na FigJam | Obsah |
|---:|---|---|---|---|
| 1 | TÉMATICKY POKRYTO | A16 | [`1:11`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-11) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 2 | TÉMATICKY POKRYTO | A7 | [`1:21`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-21) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 3 | TÉMATICKY POKRYTO | A93 | [`1:25`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-25) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 4 | TÉMATICKY POKRYTO | A100 | [`1:37`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-37) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 5 | TÉMATICKY POKRYTO | A89 | [`1:41`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-41) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 6 | VÝUKOVÝ SNÍMEK | — | [`1:46`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-46) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 7 | TÉMATICKY POKRYTO | A9 | [`1:60`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-60) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 8 | TÉMATICKY POKRYTO | A30 | [`1:66`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-66) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 9 | TÉMATICKY POKRYTO | A26–27 | [`1:70`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-70) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 10 | TÉMATICKY POKRYTO | A99 | [`1:84`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-84) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 11 | PŘIDÁNO | A103 | [`1:93`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-93) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 12 | TÉMATICKY POKRYTO | A22 | [`1:99`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=1-99) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 13 | TÉMATICKY POKRYTO | A90–92 | [`2:6`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-6) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 14 | TÉMATICKY POKRYTO | A90–92 | [`2:10`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-10) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 15 | VÝUKOVÝ SNÍMEK | — | [`2:14`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-14) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 16 | TÉMATICKY POKRYTO | A90–92 | [`2:24`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-24) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 17 | TÉMATICKY POKRYTO | A57/93 | [`2:31`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-31) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 18 | PŘIDÁNO | A104 | [`2:35`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-35) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 19 | TÉMATICKY POKRYTO | A57/93 | [`2:39`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-39) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 20 | TÉMATICKY POKRYTO | A96 | [`2:47`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-47) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 21 | PŘIDÁNO | A105 | [`2:53`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-53) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 22 | TÉMATICKY POKRYTO | A6/63 | [`2:62`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-62) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 23 | TÉMATICKY POKRYTO | A7/100 | [`2:66`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-66) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 24 | VÝUKOVÝ SNÍMEK | — | [`2:73`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-73) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 25 | VÝUKOVÝ SNÍMEK | — | [`2:77`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-77) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 26 | VÝUKOVÝ SNÍMEK | — | [`2:81`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-81) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 27 | TÉMATICKY POKRYTO | A26–27 | [`2:85`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-85) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 28 | TÉMATICKY POKRYTO | A13 | [`2:89`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-89) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 29 | TÉMATICKY POKRYTO | A10 | [`2:93`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-93) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 30 | TÉMATICKY POKRYTO | A13/33 | [`2:97`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-97) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 31 | TÉMATICKY POKRYTO | A13/33 | [`2:101`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-101) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 32 | TÉMATICKY POKRYTO | A62 | [`2:105`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-105) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 33 | TÉMATICKY POKRYTO | A21 | [`2:114`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-114) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 34 | TÉMATICKY POKRYTO | A90–92 | [`2:120`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-120) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 35 | TÉMATICKY POKRYTO | A35–36 | [`2:129`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-129) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 36 | TÉMATICKY POKRYTO | A90–92 | [`2:133`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-133) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 37 | TÉMATICKY POKRYTO | A100 | [`2:137`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-137) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 38 | PŘIDÁNO | A106 | [`2:143`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-143) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 39 | TÉMATICKY POKRYTO | A93 | [`2:148`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-148) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 40 | TÉMATICKY POKRYTO | A96 | [`2:155`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-155) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 41 | TÉMATICKY POKRYTO | A70 | [`2:159`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-159) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 42 | TÉMATICKY POKRYTO | A6/7/93 | [`2:163`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-163) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 43 | TÉMATICKY POKRYTO | A13/26/99 | [`2:170`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-170) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 44 | TÉMATICKY POKRYTO | A31/43 | [`2:174`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-174) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 45 | TÉMATICKY POKRYTO | A18 | [`2:178`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-178) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 46 | TÉMATICKY POKRYTO | A90–92 | [`2:182`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-182) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 47 | TÉMATICKY POKRYTO | A100 | [`2:189`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-189) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 48 | TÉMATICKY POKRYTO | A59 | [`2:196`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-196) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 49 | PŘIDÁNO | A107 | [`2:200`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-200) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 50 | TÉMATICKY POKRYTO | A6/7/93 | [`2:204`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-204) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 51 | TÉMATICKY POKRYTO | A13/89/99 | [`2:208`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-208) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 52 | TÉMATICKY POKRYTO | A34 | [`2:212`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-212) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 53 | PŘIDÁNO | A108 | [`2:216`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-216) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 54 | TÉMATICKY POKRYTO | A90–92 | [`2:220`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-220) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 55 | TÉMATICKY POKRYTO | A96 | [`2:224`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-224) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 56 | TÉMATICKY POKRYTO | A16 | [`2:228`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-228) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 57 | TÉMATICKY POKRYTO | A8 | [`2:232`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-232) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 58 | TÉMATICKY POKRYTO | A7/93/99 | [`2:236`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-236) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 59 | TÉMATICKY POKRYTO | A9 | [`2:240`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-240) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 60 | TÉMATICKY POKRYTO | A26 | [`2:244`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-244) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 61 | TÉMATICKY POKRYTO | A89 | [`2:251`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-251) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 62 | TÉMATICKY POKRYTO | A13 | [`2:260`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-260) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 63 | DUPLIKÁT VE FIGJAMU | #53 → A108 | [`2:264`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-264) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 64 | TÉMATICKY POKRYTO | A90–92 | [`2:268`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-268) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 65 | TÉMATICKY POKRYTO | A93 | [`2:272`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-272) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 66 | TÉMATICKY POKRYTO | A59 | [`2:276`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-276) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 67 | TÉMATICKY POKRYTO | A100 | [`2:280`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-280) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 68 | TÉMATICKY POKRYTO | A93 | [`2:289`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-289) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 69 | TÉMATICKY POKRYTO | A6/7 | [`2:293`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-293) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 70 | TÉMATICKY POKRYTO | A6/63 | [`2:300`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-300) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 71 | TÉMATICKY POKRYTO | A26/27 | [`2:304`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-započet--Copy-?node-id=2-304) | Podobné zadání či výrok; klasifikace z první kontroly. |
| 72 | TÉMATICKY POKRYTO | A26/A33 | [`2:308`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-308) | NPH a NP, certifikáty |
| 73 | TÉMATICKY POKRYTO | A9/A32 | [`2:312`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-312) | NPC a certifikát |
| 74 | TÉMATICKY POKRYTO | A29 | [`2:321`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-321) | Nečlenství v NPC |
| 75 | TÉMATICKY POKRYTO | A35/A90–92 | [`2:325`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-325) | Redukce Karp/Cook |
| 76 | TÉMATICKY POKRYTO | A90–92 | [`2:329`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-329) | Turingova redukce |
| 77 | TÉMATICKY POKRYTO | E4 | [`2:333`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-333) | Nejkratší plán robota / Graph Motion Planning |
| 78 | TÉMATICKY POKRYTO | A93/A98 | [`2:337`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-337) | FPTAS není obecně NPH |
| 79 | TÉMATICKY POKRYTO | A93/A100 | [`2:341`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-341) | APX je podmnožina NPO |
| 80 | TÉMATICKY POKRYTO | A59/A96 | [`2:345`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-345) | Konfigurační proměnné |
| 81 | TÉMATICKY POKRYTO | A70 | [`2:349`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-349) | Rozhodovací Vertex Cover |
| 82 | TÉMATICKY POKRYTO | A6/A7/A93 | [`2:353`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-353) | Komplexitní inkluze a aproximace |
| 83 | TÉMATICKY POKRYTO | A9/A13/A26 | [`2:360`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-360) | Certifikáty NP/NPC/NPH |
| 84 | TÉMATICKY POKRYTO | A99 | [`2:369`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-369) | NPI třída |
| 85 | TÉMATICKY POKRYTO | A34 | [`2:384`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-384) | Důkaz NP-úplnosti |
| 86 | PŘIDÁNO | A155 | [`2:388`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-388) | TSP ∈ NP: proměnné, omezení, certifikát |
| 87 | TÉMATICKY POKRYTO | A35/A90–92 | [`2:392`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-392) | Redukce |
| 88 | TÉMATICKY POKRYTO | A93/A100 | [`2:396`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-396) | APX a PTAS |
| 89 | TÉMATICKY POKRYTO | A93/A100 | [`2:400`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-400) | NPO a aproximace |
| 90 | PŘIDÁNO | A156 | [`2:409`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-409) | MAX-SAT z CNF-SAT |
| 91 | TÉMATICKY POKRYTO | A6/A7/A93 | [`2:413`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-413) | Vztahy tříd |
| 92 | TÉMATICKY POKRYTO | A9/A13/A26 | [`2:417`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-417) | NP/NPC/NPH |
| 93 | TÉMATICKY POKRYTO | A34 | [`2:421`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-421) | Důkaz NPC |
| 94 | TÉMATICKY POKRYTO | A35/A90–92 | [`2:428`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-428) | Redukce |
| 95 | TÉMATICKY POKRYTO | A93/A100 | [`2:435`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=2-435) | APX/PTAS |
| 96 | TÉMATICKY POKRYTO | A93/A100 | [`4:457`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=4-457) | NPO/APX |
| 97 | TÉMATICKY POKRYTO | A93/A97 | [`4:461`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=4-461) | PTAS |
| 98 | DUPLIKÁT VE FIGJAMU | A156 (opakování #90) | [`303:2`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-2) | Další řešení stejného zadání MAX-SAT (Max-Ones) |
| 99 | TÉMATICKY POKRYTO | A90–92 | [`303:15`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-15) | Turingova redukce |
| 100 | TÉMATICKY POKRYTO | A35/A90–92 | [`303:24`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-24) | Redukce na NPH |
| 101 | TÉMATICKY POKRYTO | A7/A61 | [`303:34`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-34) | NP∩coNP |
| 102 | TÉMATICKY POKRYTO | A35/A36 | [`303:41`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-41) | Karpova redukce versus exponenciální převod |
| 103 | TÉMATICKY POKRYTO | A6/A7/A93 | [`303:48`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-48) | Fotografie staršího testu: inkluze |
| 104 | TÉMATICKY POKRYTO | A9/A13/A61 | [`303:56`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-56) | Fotografie staršího testu: certifikáty |
| 105 | TÉMATICKY POKRYTO | A9/A26/A27 | [`303:60`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-60) | Fotografie staršího testu: NPC |
| 106 | TÉMATICKY POKRYTO | A6/A7/A61–63 | [`303:64`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-64) | Fotografie staršího testu: inkluze |
| 107 | TÉMATICKY POKRYTO | A35/A36 | [`303:78`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-78) | Fotografie staršího testu: redukce |
| 108 | TÉMATICKY POKRYTO | A6/A7/A61–63/A93 | [`303:82`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-82) | Fotografie staršího testu: vztahy tříd |
| 109 | TÉMATICKY POKRYTO | A99 | [`303:86`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-86) | NPI |
| 110 | TÉMATICKY POKRYTO | A90–92 | [`303:90`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=303-90) | Turingova redukce |
| 111 | TÉMATICKY POKRYTO | A6/A7/A61–63 | [`480:3`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=480-3) | Vztahy tříd |
| 112 | TÉMATICKY POKRYTO | E20 | [`1704:21`](https://www.figma.com/board/UOZuUlXP2BWC1HfHHwJOOY/NI-KOP-z%C3%A1po%C4%8Det--Copy-?node-id=1704-21) | Evoluční programování nad automatem |

## Rozhodnutí a upozornění

1. **Obrázek 77:** Graph Motion Planning je již tematicky pokryt úlohou **E4** „Problém nejkratšího plánu robota“ (robot a přemisťování překážek). Nevkládá se znovu.
2. **Obrázek 86:** na rozdíl od A16/A18 (formulace TSP) žádá i úplný důkaz rozhodovacího TSP ∈ NP; proto **A155**.
3. **Obrázky 90 a 98:** stejné zadání, odlišné studentské varianty. Pro **A156** byla zvolena přirozená a správná verze **MAX-SAT**, maximalizace splněných klauzulí. Alternativa maximalizace pravdivých proměnných v *již splňujícím ohodnocení* má jiné podmínky a je popsána v odpovědi.
4. **Obrázky 103–111:** fotografie historických tištěných testů, jejichž tvrzení se do značné míry překrývají s A6–A9, A26–A27, A35–A36, A61–A63, A90–A93 a A99. Hodnocení propiskou není automaticky autoritativní.
5. **Obrázek 112:** evoluční programování pracující s automaty je již v **E20**.
6. **Omezení:** dokončeno po obrázcích a tematických úlohách, nikoli jako důkaz úplné doslovné shody *všech* variant a formálně správných historických odpovědních klíčů. Testování aplikace v prohlížeči nebylo provedeno.
