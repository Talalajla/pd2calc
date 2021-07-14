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
Penalty (JC → LVL):  – ✓
Risk:                ✓ ✓
Custody:             ✓ ✓
Crew:                ✓ ✓
Skill bonus:         ✓ ✓
Infamy (LVL):        – ✓
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