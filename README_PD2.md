# pd2calc
Payday2 EXP calculator
---
HOW TO CALCULATE EXP
---
– %bonus from LVL
– %bonus from RiskBonus (Difficulty)
– %bonus from PerkDeck
– %bonus from TeamBoost
– %bonus from collecting all Gage packages
– %bonus from Crew
– %bonus from Stealth

---LVL---
Lv : %bonus :   sum
1  : 5%     :   5%
2  : 10%    :   15%
3  : 5%     :   20%
4  : 10%    :   30%
5  : 5%     :   35%
6  : 10%    :   45%
7  : 5%     :   50%
8  : 10%    :   60%
9  : 5%     :   65%
10 : 10%    :   75%
11 : 7.5%   :   82,5%
12 : 10%    :   92,5%
13 : 7.5%   :   100%
14 : 10%    :   110%
15 : 7.5%   :   117,5%
16 : 10%    :   127,5%
17 : 7.5%   :   135%
18 : 10%    :   145%
19 : 7.5%   :   152,5%
20 : 10%    :   162,5%
21 : 7.5%   :   170%
22 : 10%    :   180%
23 : 7.5%   :   187,5%
24 : 10%    :   197,5%
25 : 7.5%   :   205%
---LVL---

---RISK---
Normal  :   x1
Hard    :   x2
vHard   :   x5
OverK:  :   x10
Mayhem  :   x11,5
DW      :   x13
DS      :   x14
---RISK---
$default = $classic - $penalty

$risk = $default * $modifier;
$perkBonus = ($default + $risk) * (0.45 + $teamboosts);
$infamy = ($default + $risk) * lvl(0 - 2.05);
$crew = ($default + $risk) * $amount(0 - 0.3);
$gage = ($default + $risk) * 0.05;


$default + $risk + $perkBonus + $infamy + $crew + $gage + $bonus

Test data: {
    {
        Jewellery Store (normal) (+15% Stealth Bonus; +45% perkdeck; 205% LVL)
        Default: 2000;
        Skill bonus: 900; (45% perk [Default * 0.45])
        Infamy bonus: 4100; (LVL [Default * 2,05])
        Stealth bonus 1050; (15% [Wszystko do góry * 0.15])
    },
    {
        Jewellery Store (normal) (+5% Stealth Bonus; +45% perkdeck; 205% LVL)
        Default: 2000;
        Skill bonus: 900; (perkdeck)
        Infamy bonus: 4100; (LVL)
        Stealth bonus 350; (5%)
    },
    {
        Jewellery Store (hard) (+5% Stealth Bonus; +45% perkdeck; 205% LVL)
        Default: 2000;
        Risk bonus: 4000;
        Skill bonus: 2700; (perkdeck)
        Infamy bonus: 12300; (LVL)
        Stealth bonus 1050; (5% [Wszystko do góry * 0.05])
    },
    {
        Jewellery Store (DS) (+5% Stealth Bonus; +45% perkdeck; 205% LVL; +5% gage; +20% crew)
        Default: 6000;
        Penalty: -
        Risk bonus: 84 000;
        Custody –
        Crew alive: 18 000;
        Skill bonus: 40 500;
        Infamy bonus: 184 500;
        Gage: 4500;
        Stealth bonus: 16875;
        Heat System: –
    },
    {
        Golden Grin Casino (DS) (+10%, +45% perkdeck; 205% LVL; +10% Crew)
        Default: 39 250;
        Penalty: 3925 (10%);
        Risk bonus: 494 550;
        Custody –
        Crew bonus: 52 988 (52 987,5)
        Skill bonus: 254 340
        Infamy: 1 086 244;
        Gage: –
        Stealth bonus: 192 345;
        Heat System: –
    },
    {
        Shadow Raid (DS)
        Default: 14 500;
        Penalty: –
        Risk bonus: 203 000
        Custody: -65 250

        152250

        Crew alive: 30 450 = 152 250 * 0.2;
        Skill bonus: 73 080;
        Infamy: 312 113;
        Gage: 761 (152250 * 0,005 [1/10 bags])
        Stealth bonus: –
        Heat System: –
    },
    {
        Jewellery Store (Normal)
        Default: 2000;
        Penalty –
        Risk –
        Custody –
        
        Crew: –
        Skill: 960;
        Infamy: 4100;
        Gage: 50 (2000 * 0,025 [1/2 bags]);
    },
    {
        Ukrainian Prisoner (DS, +15%, 1% gage)
        Default: 44 500;
        Penalty: –
        Risk bonus: 623 000
        Custody: –

        → 667 500

        Crew: –
        Skill bonus: 340 425;
        Infamy: 1 368 375;
        Gage: 6675 [2/10];
        Stealth bonus: 357 446
        Overheat: –
    },
    {
        Stealing XMAS (Overkill, +10%, 3/10 gage)
        Default: 23 800;
        Penalty: –
        Risk bonus: 238 000;
        Custody –

        → 261 800

        Crew: –
        Skill bonus: 117 810;
        Infamy: 536 690;
        Gage: 4909;
        Stealth: 92121;
        Boost: 131733;
    },
    {
        Bank Heist (+15%, 4 crew)
        Default: 12 000;
        Penalty: –
        Risk bonus: 168 000;
        Custody –

        → 

        Crew: –
        Skill bonus: ;
        Infamy: ;
        Gage: ;
        Stealth: ;
        Boost: ;
    },
    {
        Ukrainian Prisoner (+5%, crew 3)
        Default: 45 000;
        Penalty: –
        Risk: 567 000;
        
        → 607 500
        
        Crew: 121 500;
        Skill: 328 050;
        Infamy: 1 245 375;
        Gage: 3038;
        Stealth: 115 273;   
    }
}

            def: null,
            penalty: null,
            risk: null,
            custody: null,
            crew: null,
            skill: null,
            infamy: null,
            gage: null,
            stealth: null,
            heat: null

TODO:
Default:             ✓ ✓
Penalty (JC → LVL):  ✓ ✓
Risk:                ✓ ✓
Custody:             ✓ ✓
Crew:                ✓ ✓
Skill bonus:         ✓ ✓
Infamy (LVL):        ✓ ✓
Gage:                ✓ ✓
Stealth:             ✓ ✓
Overheat:            ✓ ✓

--- GAGES ---
N  :  H  :  V  :  O  :  MH  :  DW  :  DS 
2  :  4  :  6  :  8  :  10  :  10  :  10
--- GAGES ---

--- JC ---
11+ → PENALTY
--- JC ---

BASE CALC:

{
    Ukrainian 41 500 (0 bags; keycard)
    Ukrainian 37 000 (2 bags; weird code)
    Ukrainian 36 000 (0 bags; weird code)
    Ukrainian 35 500 (0 bags; rotating code)
    Ukrainian ? (0 bags; kc)
    chyba 4150~
    
}

Bulucs:

23k hack + heli
25k bomb + heli
25k hack + car
27k bomb + car

// FF1: 2 zostały 11500;
// FF2: 3500 (3bags);
// FF2 ESCAPE:  8000 (3bags);
// NC ESCAPE:   8000 (7bags);
// RATS (Garage) escape: 4000 (all bags);
// FF3: 24000 (3bags);

// GoBank opened Vault loud
21k / 9
14k / 9

// GGC:
59250xp

// Heli + Van no c4
58250xp

// c4 start + Van esc
44250XP

// 
75250xp

// Goat
Day1: 33000
Day2: 93500 (15 cages)

// GREEN 
27000 (3bags)

// COCK
42k /8[6] (x2 hack + archeo)
40k /7[5] (x2 weap + bio)
42k /8[6] (x3 hack + bio)

//MIAMI1
38500 /10
36000 /11
26+10+2.5
34000 /9 (6 meth)
38500 /10 (5 meth, 3 money, 2 weaps)
39500 /14 (7 meth + 2 coke + 5 money)
42000 /13 (6 meth)

26000 /22

//HOXTON B/O
d1: 18400
d2: 38000

//HOXTON REV
24000 /8
Stealth 1/2: 26000 /8


2 299 080

//LAB RATS
50000 /18 (x2 meth);

//RWD
Day 2[1]: 20000
          18500 (3grg / 6b)
Day 1[2]: 30500 /21

//SMB
32,000
40,000 (4 + stealth early)

//Santa's Work
28000 /12

//SCARFACE
32,000

//PIGS
40,000 /10

//XMAS
`17,600 /12
16,800 /12 (wine[], jew[hack], shoe[klatka])
17,800 /3 (toy, tech[c4], shoe[drzwi])
  4 + 
  
13,300 /3 (jew[hack], wine[normal], tech[c4])
  4 + 0.8 + 2 + 6.5 = 13,3

8,600 /3 (toy[outside], shoe[klatka], wine)
  4 + 0.8 + 1.5 + 2.8 = 9,1

8,600 /3 (toy[insideBag], shoe[cage], wine)
  4 + 0.8 + 1.5 + x = 8,6

13,300 /3 (toy, tech, jew)
  4 + 1.5 + 6,5 + 800

toy(shop)   -> 800
toy(out)    -> 2800
shoe(door)  -> 4500
shoe(cage)  -> 1500
wine        -> 800
VR          -> 6500
Jew         -> 2000

// ALESSO (Loud/Ovk)
51,600

// Alesso (Stealth/DS)
52,000

//TBB (Loud/Ovk)
53,000 /23 [30+23]

//BIKER 
D1: 31,500
D1: 32,500 (0/9 bags)
 8bags + skull + garage + pipe
D2: 14,500
D2: 10,500
 
// DOCK
28,500

// TRAIN
39,500

//TD
39,000 (gas + 15bags)
43,000 (no gas + 15b)

//UKRAINIAN

41,000 (loud no bags);
46,000 (loud with bags);


---
# T.U.P Milestones
---

[500] (Enter area)
[4000] (enter server)
[500] (next doors)
[500] (find warehouse in PC)
[1000] (reach correct warehouse)
    [3500] (hack PC & open via powerbox) 
    or
    [2500] drill for gas, get and use keycard
[2000] (find correct container)
[500] (free Vlad)
[2000] (save Vlad's life)
[6000] (Vlad reaches connector's gate)
[1000] (player reaches connecto's gate)
    [3000] → (move container) 
    or
    [1000] ← (open gate)
[2000] (find server room)
[2000] (finish hack)
[1500] (get HDD)
[1000] (move gate up)
    [2500] → (reach and move pallete)
    [2500] ← (get through ship)

[2000] (find fireworks)
[500] (set up fireworks)
[2000] (boat arrives)
[500] (each bag)
[3000] (ESCAPE)

---
# Dragon heist Milestones
---
{
    [1000]          (hack card reader)
    [2500]          (hack security door)
    [1000]          (get the keys)
    [500]           (open shutter)
    [2000]          (pick up drill bag)
    [1000]          (use drill bag)
            [1000]  (turn off gas) // SKIPPABLE
    [3000]          (drill finished)
    [1000]          (cut doors)
    [1000]          (secure bag loud)
    [3000]          (loud ESCAPE)

    base: 28,750;
}
{
    [1000] (turn off alarm)
    [1000] (find basement)
    [1000] (find keycard)
    [1000] (enter the warehouse)
    [500]  (locate vault)
    [2000] (use keycard)
    [1000] (hack pc (crate number))
    [3000] (reach auction room)
    [1000] (timelock finished)
    [1000] (cut correct wires)
    [1000] (open doors)
    [1000] (find Dragon)
    [2000] (secure Dragon)
    [1000*8] (each bag secured)
    [1000] (ESCAPE)
    base: 31,500;
}

EXAMPLE DATA "DRAGON":
(Normal LOUD)
    3530  ->  3530
    3530  ->  7060
    1765  ->  8825
    7060  ->  15885
    3530  ->  19415
    3530  ->  22945
    10590 ->  33535
    8825  ->  42360
    3530  ->  45850
    7060  ->  52950 [2 bags]
    10590 ->  63540

(Normal STEALTH)
    [1000]         - basement
    [1000]         - alarm
    [1000]         - get kc
    [1000]         - enter warehouse
    [500]          - find vault
        [2000]     - find and use kc
        [3000]     - get into auction hall
    [1000]         - timelock finished
    [1000]         - cut correct wires
    [1000]         - use keychain to enter the vault
            [1000]     - hack PC to get number // SKIPPABLE
    [1000]         - find dragon
    [2000]         - secure dragon
        [1000*14]  - 14 bags
    [1000]         - stealth escape
    base: 31500

    MIN: 12500

















// ERRORS:

✓  GGC Loud:
✓  Nie można dwóch wstępów brać na raz.

Goat sim:
Ilość kóz + cage;

✓  Henry's cock:
✓  max&min 2 paths;

Hoxton Revenge:
Minimalna ilość dowodów

Rats (1)
nie mogą się endingi nakładać