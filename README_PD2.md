# pd2calc

## Payday2 EXP calculator

## HOW TO CALCULATE EXP

– %bonus from LVL
– %bonus from RiskBonus (Difficulty)
– %bonus from PerkDeck
– %bonus from TeamBoost
– %bonus from collecting all Gage packages
– %bonus from Crew
– %bonus from Stealth

<!-- prettier-ignore -->
---LVL---
Lv  : %bonus    : sum
1   : 5%        : 5%
2   : 10%       : 15%
3   : 5%        : 20%
4   : 10%       : 30%
5   : 5%        : 35%
6   : 10%       : 45%
7   : 5%        : 50%
8   : 10%       : 60%
9   : 5%        : 65%
10  : 10%       : 75%
11  : 7.5%      : 82,5%
12  : 10%       : 92,5%
13  : 7.5%      : 100%
14  : 10%       : 110%
15  : 7.5%      : 117,5%
16  : 10%       : 127,5%
17  : 7.5%      : 135%
18  : 10%       : 145%
19  : 7.5%      : 152,5%
20  : 10%       : 162,5%
21  : 7.5%      : 170%
22  : 10%       : 180%
23  : 7.5%      : 187,5%
24  : 10%       : 197,5%
25  : 7.5%      : 205%
---LVL---

<!-- prettier-ignore -->
---RISK---
Normal  : x1
Hard    : x2
vHard   : x5
OverK:  : x10
Mayhem  : x11,5
DW      : x13
DS      : x14
---RISK---

---MULTIPLIERS---
BASE (basic EXP from each heist completed),
PENALTY: (loss EXP cause of LVL [10+ lower player's LVL than JC on map]),
RISK: (bonus EXP dependable on heist difficulty),
CUSTODY: (loss EXP if player was in custody when heist finished),
CREW: (bonus EXP for each player excluding host),
BONUS: (bonus EXP for each TEAMBOOST applied on weapon & perkdeck bonus),
INFAMY: (bonus for each infamy LVL [max XXV]),
GAGE: (bonus EXP for each gage package found),
STEALTH: (bonus EXP if last heist was completed in stealth),
HEAT: (bonus or loss EXP depending on the frequency of finishing particular heist)
---MULTIPLIERS---

---FORMULA---
RESULT = (BASE - PENALTY + RISK) + CREW + BONUS + INFAMY + GAGE + STEALTH + HEAT
RESULT (in custody) = (BASE - PENALTY + RISK - CUSTODY) + CREW + BONUS + INFAMY + GAGE + STEALTH + HEAT
---FORMULA---

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
Default: ✓ ✓
Penalty (JC → LVL): ✓ ✓
Risk: ✓ ✓
Custody: ✓ ✓
Crew: ✓ ✓
Skill bonus: ✓ ✓
Infamy (LVL): ✓ ✓
Gage: ✓ ✓
Stealth: ✓ ✓
Overheat: ✓ ✓

--- GAGES ---
N : H : V : O : MH : DW : DS
2 : 4 : 6 : 8 : 10 : 10 : 10
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
// FF2 ESCAPE: 8000 (3bags);
// NC ESCAPE: 8000 (7bags);
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

toy(shop) -> 800
toy(out) -> 2800
shoe(door) -> 4500
shoe(cage) -> 1500
wine -> 800
VR -> 6500
Jew -> 2000

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
[1000] (hack card reader)
[2500] (hack security door)
[1000] (get the keys)
[500] (open shutter)
[2000] (pick up drill bag)
[1000] (use drill bag)
[1000] (turn off gas) // SKIPPABLE
[3000] (drill finished)
[1000] (cut doors)
[1000] (secure bag loud)
[3000] (loud ESCAPE)

    base: 28,750;

}
{
[1000] (turn off alarm)
[1000] (find basement)
[1000] (find keycard)
[1000] (enter the warehouse)
[500] (locate vault)
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
3530 -> 3530
3530 -> 7060
1765 -> 8825
7060 -> 15885
3530 -> 19415
3530 -> 22945
10590 -> 33535
8825 -> 42360
3530 -> 45850
7060 -> 52950 [2 bags]
10590 -> 63540

(Normal STEALTH)
[1000] - basement
[1000] - alarm
[1000] - get kc
[1000] - enter warehouse
[500] - find vault
[2000] - find and use kc
[3000] - get into auction hall
[1000] - timelock finished
[1000] - cut correct wires
[1000] - use keychain to enter the vault
[1000] - hack PC to get number // SKIPPABLE
[1000] - find dragon
[2000] - secure dragon
[1000*14] - 14 bags
[1000] - stealth escape
base: 31500

    MIN: 12500

BLACK CAT:

// -- STEALTH --
/
BASE | NORMAL | DS/OD (both with 51% EXP Boost & 15 Stealth boost)
2000 [8188] [122.820] - talk to triad
2000 [8188] [122.820] - pick up gear
1000 [4094] [61.410] - find li deng (spa)
2000 [8188] [122.820] - find li deng's safe
2000 [8188] [122.820] - open safe
4000 [16376] [245.640] - enter the casino (find second guy)
4000 [16376] [SKIPPED] - plant and listen bug [can be skipped by picking up card before this even happens]
2000 [8188] [122.820] - pick up card in his room
2000 [8188] [122.820] - pick up fingerprint/hand
2000 [8188] [122.820] - find the vault
1000 [4094] [61.410] - hack slots
2000 [8188] [122.820] - disable lasers/cut wires
1000 [4094] [61.410] - open the vault
--- 27.000 BASE (23.000 with skipped bug) ---
1000 [4094] [61.410] - secure required money bags
up to 16x500 [2047x4] [30.705x12] - secured money bags (vault)
up to 7x500 [random] [random] - secured optional bags (x3 coke; x2 weaps; x1 money; x1 tea set)
  2000 [8188] - plant ink-bomb in vault (lose at least 1 money bag)
   or
  2000 [8188] [122.820] - fully loot vault  
1000 [4094] [61.410] - lower boat

    // overall 41,500 (bug; full loot)
    // overall 33,000 (bug; 4xMoney; destroyed rest)
    // overall DS 37,500 (skipped bug; full loot)
    // overall 41,000 (15 vault bags + bomb & 5 opt. lootbags (16/17 moneyBags))
    // overall 40,500 (14 vault bags + bomb & 5 opt. lootbags (15/17 moneyBags))

-- 148.919 (14 vault money + 1 from safe)
-- 158.847 (15 vault money + 1 from safe)

// -- LOUD --
/
BASE | OVk // 6197 code | 4070 code
2000 [79.260] - talk to triad // 6052
2000 [79.260] - pick up gear // 6052
2000 [19.815] - find Li Deng (spa) // 6052
500 [79.260] - find Li Deng's safe // 1513
2000 [79.260] - open safe // 6052
500 [19.815] - find Xun Kang // 1513
500 [19.815] - shoot glass // 1513
500 [19.815] - thermite finished // 1513
4000 [158.520] - get handprint // 12105 // +1513 (safe moneybag)
4000 [158.520] - get to the vault // 12104
// C4 Path (30.000 BASE):
2000 [79.260] - blow wall with C4 // 6052
9000 [356.670] - finished sawing // 27234
3000 [118.890] - set the winch // 9078
6000 [237.780] - finish winching // 18156
5000 [198.150] - kill the snipers // 15130
3000 [118.890] - heli arrives // 9078
1000 [39.630] - secure the vault // 3026
1000 [39.630] - escape available // 3026 - OR -
// Override Path (18.000-24.000 BASE):
500 [19.815] - find control panel // 1513
3000 [118.890] - disable firewall // 9078
3000 [118.890] - finish hacking // 9078
500 [19.815] - open the vault // 1513
500 [19.815] - each secured bag // 1513\*bags
500 [19.815] - secure required bags // 1513 (83.215 XP 4/16; 101.371 XP 16/16)
2000 [79.260] - secured 16 money bags // 6052 (107.423)
500 [19.815] - signal heli // 1513
6000 [237.780] - heli arrived // 18156
500 [19.815] - each secured opt. bag // 1513 (max 5)

loud/stealth entrance (NOT default)

- 500 - fetch info

* 2000 - talk to triad
* 2000 - pick up gear

casino [Xun Kang] before spa [Li Deng] (STEALTH default start):

- 4000 - bug?
  {
  enter the casino >> 1000 XP out of 4000 XP;
  find spa >> 0 XP out of 1000 XP;
  }

spa [Li Deng] before casino [Xun Kang] (LOUD default start):

- 1500 - bug?
  {
  enter the casino >> 500 XP out of 2000 XP;
  }

* 2000 - bug?
  {
  enter spa 2000 XP out of 9 XP;
  }

MIN EXP:
23.500 (stealth entrance, skipped planting bug, normal diff [4 bags only], ink bomb, stealth escape, casino first bug);
MAX EXP:
51.000 (default entrance, loud, c4, x6 optional loot (with hidden safe), spa before casino)

loud first casino:
2k eq
2k talk
2k casino
.5k shoot
.5k thermite
4k hand
.5k safe
2k open safe
4k get to the vault

overall (normal, default start; Override Path, 1 opt. bag, full loot)
base: 42.500

MOUNTAIN MASTER:

// -- STEALTH --
/

<!-- 42.500 -->
<!-- 38.000 (no tea, 4 gold) -->

BASE | NORMAL | (51% EXP Boost & 15 Stealth boost)
1000 [45.034] - enter backside
4000 [180.136] - pull 3 leavers
2000 [90.068] - call elevator from the basement
2000 [90.068] - rewire fusebox
3000 [135.102] - access the elevator shaft
2000 [90.068] - cut the glass
3000 [135.102] - find hidden server room
2000 [90.068] - steal HDD
6000 [270.204] - decrypt and secure HDD
1000 [4.000] - trigger fire alarm
4000 [16.376] - kill the triad leader
4x500 [26.700] - basic gold bag
// Additional loot
500 [26.700] - tea set secured
4x1000 [53.400] - each additional gold bag

// -- LOUD --
/

<!-- 42.500 -->

BASE | NORMAL | (51% EXP Boost & 15 Stealth boost)
5000 [17.622] - hack electicity
1000 [3.524] - call the elevator from the basement
1000 [3.525] - rewire fusebox
2000 [7.049] - access the elevator shaft
2000 [7.048] - call elevator to the top
2000 [7.049] - break the doors
2000 [7.049] - find hidden server room
8000 [28.195] - steal HDD // 23k overall
7000 [24.675] - car path // 30k overall
5000 [17.622] - thermite path // 28k overall
2000 [7.049] - trigger fire alarm
3000 [14.098] - kill the triad leader
4x500 [1.762] - basic gold bag
// Additional loot
500 [1.762] - tea set secured
4x1000 [3525] - each additional gold bag

<!-- prettier-ignore -->
Midland Ranch:
// -- STEALTH --
/
BASE | NORMAL | (51% EXP Boost & 15 Stealth boost)++
1000 - reach ranch
(house)
2000 - open office
2000 - collect fingerprints / voice samples
2000 - reboot alarm and clone HDD
1000 - reach gate
1000 - open the gate
(weaps)
2000 - pick up weapons
7000 - secure (6/8) bags
2000 - make sabotage
2000 - escape (stealth?)

1000 - each bag secured (max 17)

Normal 6 bags (min) with sabotage & voice samples -> 28'000

// ERRORS:

Goat sim:
Ilość kóz + cage;

✓ Henry's cock:
✓ max&min 2 paths;

Hoxton Revenge:
Minimalna ilość dowodów

Rats (1)
nie mogą się endingi nakładać


HOSTILE TAKEOVER [STEALTH]:
JC 30

21 BASE + 6 bags;


{12 paintings, 1 coke, 1 neo, 6 papers [4 min]}
bag = 500