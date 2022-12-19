import React, { Component, createRef } from "react";
import { Content, Main, Main2, Main3, Players, PhotoBox, DiffBox, ReqBox, Rest, BonusBox, Result, Desk, SendBox, Frame, InnerFrame, Send, TextBox, PC, PC_SCREEN, PC_LEG, PC_STAND, PC_DISPLAY,
    PC_POWER, PC_CLOSE, PC_BAR, PC_FILE, PC_FILE_TOP, PC_FILE_CONTENT, PC_FILE_TITLE, PC_FILE_EXP, PC_MORE_DETAILS, PC_FILE_DETAILS, PC_FILE_DETAILS_TITLE,
    PC_BACK_BTN, PC_FILE_DETAILS_DATA, PC_FILE_SPEC, PC_SPEC_COMPONENT, PC_ERROR, PC_ERROR_TITLE, PC_ERROR_TEXT, PC_BLUESCREEN, PC_BS_LEFT, PC_BS_RIGHT, PC_BS_FACE, PC_BS_TEXT, PC_BS_QR, PC_BS_LOGO, PC_BS_TIMER, PC_POST, PC_POST_TEXT, PC_DISPLAYS
} from "../styles/heist-main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faFileWord, faFileCode, faFileUpload, faFileAlt, faDesktop, faKey, faInfoCircle, faCalculator, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Requirements, Paper, Custody, Gage, ClipBoard, Polaroid, Bonus, Tablet, Infinite } from "./objects";
import cpu from "../images/cpu.svg";
import gpu from "../images/gpu.svg";
import mb from "../images/mb.svg";
import psu from "../images/psu.svg";
import ram from "../images/ram.svg";
import hdd from "../images/hdd.svg";
import dollar from "../images/dollar.svg";
import qr from "../images/qrcode.svg";


class HomeHeist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            inf: '',
            lvl: '',
            newLvl: '',
            newExp: '',

            difficulty: null,

            //Specific heist things:
            ovkPlus: false,
            showRed: false,
            ovkHells: false,
            fLootBonus: false,
            pigs: false,
            ovkGoats: false,

            //EXP Things
            gage: 10,
            infamyBonus: null,
            def: null,
            penalty: null,
            risk: null,
            custody: null,
            crew: null,
            skill: null,
            infamy: null,
            gages: null,
            stealth: null,
            heat: null,
            jailedEXP: null,
            EXP: null,
            pcScreen: false,
            lvlProg: 0,

            zindexVal: 1,
            zindexSpec: 1,
            zindexInfo: 1,
            zindexDetails: 1,
            zindexCalc: 1,
            showInfo: true,
            showDetails: false,
            showSpec: false,

            errorShow: false,
            errorNum: null,
            whatAboutBluescreen: false,
            bluescreenPerc: 0,
            runPost: false,
        };

        this.POST = createRef();
    }

    checkValues = (e) => {
        this.goBack();
        console.log("zmiana")

        if(this.props.imgName.includes("Black Cat") && this.props.isLoud) {
            const trContainer = e.target.parentElement.parentElement.parentElement.parentElement;
            if (e.target.name === "req4" && e.target.checked) {
                console.log(trContainer.children[5].querySelector("input[name=req5]"));
                trContainer.children[5].querySelector("input[name=req5]").disabled = true;
                trContainer.children[6].querySelector("input[name=req6]").disabled = true;
                trContainer.children[7].querySelector("select[name=req7]").disabled = true;
                trContainer.children[5].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[6].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                // e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll("td").forEach(td => td.style.textDecoration = "line-through");
            } else if (e.target.name === "req4" && !e.target.checked) {
                trContainer.children[5].querySelector("input[name=req5]").disabled = false;
                trContainer.children[6].querySelector("input[name=req6]").disabled = false;
                trContainer.children[7].querySelector("select[name=req7]").disabled = false;
                trContainer.children[5].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[6].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                // e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll("td").forEach(td => td.style.textDecoration = "none");
            }  else if (e.target.name === "req5" && e.target.checked) {
                trContainer.children[4].querySelector("input[name=req4]").disabled = true;
                trContainer.children[6].querySelector("input[name=req6]").disabled = true;
                trContainer.children[7].querySelector("select[name=req7]").disabled = true;
                trContainer.children[4].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[6].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
            } else if (e.target.name === "req5" && !e.target.checked) {
                trContainer.children[4].querySelector("input[name=req4]").disabled = false;
                trContainer.children[6].querySelector("input[name=req6]").disabled = false;
                trContainer.children[7].querySelector("select[name=req7]").disabled = false;
                trContainer.children[4].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[6].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
            } else if (e.target.name === "req6" && e.target.checked) {
                trContainer.children[4].querySelector("input[name=req4]").disabled = true;
                trContainer.children[5].querySelector("input[name=req5]").disabled = true;
                trContainer.children[7].querySelector("select[name=req7]").disabled = true;
                trContainer.children[4].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[5].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "line-through");
            } else if (e.target.name === "req6" && !e.target.checked) {
                trContainer.children[4].querySelector("input[name=req4]").disabled = false;
                trContainer.children[5].querySelector("input[name=req5]").disabled = false;
                trContainer.children[7].querySelector("select[name=req7]").disabled = false;
                trContainer.children[4].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[5].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
                trContainer.children[7].querySelectorAll('td').forEach(td => td.style.textDecoration = "none");
            }
        }
        
        const form = e.currentTarget;

        this.props.fLootBonus && form.req2.value === "8" ? this.setState({fLootBonus: true}) : this.setState({fLootBonus: false});
    }

    countGage = (item) => {
        this.setState({ difficulty: item }, () => {
            const strongRisk = ['Overkill', 'Mayhem', 'Death Wish', 'Death Sentence'];
            const dif = this.state.difficulty;
            strongRisk.includes(dif) ? this.setState({ovkPlus: true}) : this.setState({ovkPlus: false});

            //RED DIAMOND
            if (strongRisk.includes(dif) && this.props.redDiamond) { this.setState({ showRed: true }) } else { this.setState({ showRed: false })}
            //HELLS BONUS
            if (strongRisk.includes(dif) && this.props.ovkHells) { this.setState({ ovkHells: true }) } else { this.setState({ ovkHells: false })}
            //GOATS BONUS
            if (strongRisk.includes(dif) && this.props.ovkGoats) { this.setState({ ovkGoats: true }) } else { this.setState({ ovkGoats: false })}

            //SLAUGHTERHOUSE OVK+
            if (strongRisk.includes(dif) && this.props.pigs) this.setState({ pigs: 2 })
            else if (!strongRisk.includes(dif) && this.props.pigs)  this.setState({ pigs: 1 })
            else this.setState({ pigs: 0 })

        })

        switch(item) {
            case "Normal":
                this.setState({gage: 2});
                break;
            case "Hard":
                this.setState({gage: 4});
                break;
            case "Very Hard":
                this.setState({gage: 6});
                break;
            case "Overkill":
                this.setState({gage: 8});
                break;
            default:
                this.setState({gage: 10});
        }
    }

    infamyBoost = (item) => {
        switch(item) {
            case "I": this.setState({infamyBonus: 5}); break;
            case "II": this.setState({infamyBonus: 15}); break;
            case "III": this.setState({infamyBonus: 20}); break;
            case "IV": this.setState({infamyBonus: 30}); break;
            case "V": this.setState({infamyBonus: 35}); break;
            case "VI": this.setState({infamyBonus: 45}); break;
            case "VII": this.setState({infamyBonus: 50}); break;
            case "VIII": this.setState({infamyBonus: 60}); break;
            case "IX": this.setState({infamyBonus: 65}); break;
            case "X": this.setState({infamyBonus: 75}); break;
            case "XI": this.setState({infamyBonus: 82.5}); break;
            case "XII": this.setState({infamyBonus: 92.5}); break;
            case "XIII": this.setState({infamyBonus: 100}); break;
            case "XIV": this.setState({infamyBonus: 110}); break;
            case "XV": this.setState({infamyBonus: 117.5}); break;
            case "XVI":this.setState({infamyBonus: 127.5}); break;
            case "XVII": this.setState({infamyBonus: 135}); break;
            case "XVIII": this.setState({infamyBonus: 145}); break;
            case "XIX": this.setState({infamyBonus: 152.5}); break;
            case "XX": this.setState({infamyBonus: 162.5}); break;
            case "XXI": this.setState({infamyBonus: 170}); break;
            case "XXII":  this.setState({infamyBonus: 180}); break;
            case "XXIII": this.setState({infamyBonus: 187.5}); break;
            case "XXIV": this.setState({infamyBonus: 197.5}); break;
            case "XXV+": this.setState({infamyBonus: 205}); break;
            default: this.setState({infamyBonus: 0});
        }
    }

    setLvlProgress = (lvl) => this.setState({lvlProg: +lvl});

    numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    swapOn = (item) => {
        if (typeof item.value==="undefined" || item.checked===false) { return 0 };
        if (item.checked===true) { return 1 };

        return item.value;
    }

    writeTextTyper = (text) => {
        var contentArray = text.split(""),
            current = 0,
            elem = this.POST.current;
        setInterval(() => {
            if (current < contentArray.length) {  elem.textContent += contentArray[current++]; }
        }, 30);
    };

    bluescreenTime = () => {
        const timer = Math.round(Math.random() * (2000 - 500) + 500);
        const percents = Math.round(Math.random() * (20 - 3) + 3);
        if (this.state.bluescreenPerc + percents < 100) {
            const repeat = setInterval(() => {
                this.setState({bluescreenPerc: this.state.bluescreenPerc + percents});
                clearInterval(repeat);
                return this.bluescreenTime();
            }, timer);
            
        } else { 
            this.setState({bluescreenPerc: 100, runPost: true});
            const elem = this.POST.current; 
            setTimeout(() => elem.textContent = "» KEKWindowOS v1.51 Loading ...  Completed ", 0);
            setTimeout(() => this.writeTextTyper("\nnmap -sS -p- -PP -PE -PS80,443 -PA3389 -PU40125 -A -T4 -oA ic.files.talalajla.heists-%D 10.31.251.103", 50));
            setTimeout(() => this.writeTextTyper("\nStarting Nmap ( http://nmap.org )"), 3700);
            setTimeout(() => {
                elem.textContent += `\nNmap scan report for ic.files.fednet.agency (10.31.251.103) \n(The 65526 ports scanned but not shown below are in state: closed) \n \nPORT       STATE    SERVICE       VERSION \n22/tcp     filtered msrpc \n25/tcp     filtered heist \n53/tcp     filtered talabios-ns \n80/tcp     filtered talabios-dgm \n1002/tcp   open     kekwindow-ircp? \n16552/tcp  open     unknown \nDevice type: general purpose \nRunning: GoodForPeoplePC \nOS details: KEKWindow - PrivNet Fork w/KEKWindow Compatibility v1.51`;
            }, 4700);
            setTimeout(() => {
                elem.textContent += `\n\nHost script results: TalaBIOS name: Talalajla, TalaBIOS user: ${this.state.nickname ? this.state.nickname : 'unknown'},  TalaBIOS MAC: CB:B2:78:6C:93:B4 (IBM) \n|_smbv2-enabled: Server doesn't support SMBv2 protocol \n| smb-os-discovery:   \n|   OS: KEKWindow \n|_  Name: WORKGROUP\\Talalajla \n\n#`;
                elem.style.position = "absolute";
                elem.style.bottom = 0;
            }, 5500);
            setTimeout(() => this.writeTextTyper(" sshnuke 10.31.251.103 -rootpw-'741414J14' "), 6000);
            setTimeout(() => elem.textContent += `\nConnecting to 10.31.251.103:ssh ...`, 7000);
            setTimeout(() => elem.textContent += ` successful.`, 7500);
            setTimeout(() => elem.textContent += `\nAttempting to exploit SSNv1 CRC32 ...`, 8000);
            setTimeout(() => elem.textContent += ` successful.`, 8500);
            setTimeout(() => elem.textContent += `\nResetting root password to "741414J14"`, 9000);
            setTimeout(() => elem.textContent += `\n\n#`, 9300);
            setTimeout(() => this.writeTextTyper(" ssh 10.31.251.103 -l Com_S_Garrett."), 9700);
            setTimeout(() => elem.textContent += `\nTalalajla@10.31.251.103 password: `, 10300);
            setTimeout(() => this.writeTextTyper("*********"), 10500);
            setTimeout(() => elem.textContent += `Welcome back, Talalaja!\nLoading KEKWindow Interface ... `, 11200);
            setTimeout(() => elem.textContent += ` successful.`, 12000);
            setTimeout(() => this.setState({bluescreenPerc: 0, runPost: false, whatAboutBluescreen: false}), 12000);
            return;
        }
    
    }

    countEXP = (e) => {
        e.preventDefault();

        const randomNum = Math.round(Math.random()*100);
        if (randomNum === 1 || randomNum === 4 || randomNum === 7 || randomNum === 69 || randomNum === 96) this.setState({whatAboutBluescreen: true}, this.bluescreenTime);

        const form = e.currentTarget;
        
        // Players
        const playersArr = Array.from(form.crew);
        let players; // 1-4
        playersArr.forEach(item => item.checked ? players = item.value : '');
        // Players in jail
        const jailedArr = Array.from(form.jail);
        let jailed; // 0-3
        let custody = 0;
        jailedArr.forEach(item => item.checked ? jailed = item.value : '');
        if (jailed > 0) { custody=0.3 };
        // Crew Aive
        const crew = (players - jailed - 1) / 10 // %crew as 0.1 etc.
        // Gage packages
        const gage = parseInt(form.gage.value); // amount
        const gageMax = this.state.gage; // max on map
        // Additional bags
        let addBags = 0;
        let scale = 0;
        if (this.props.scaling) { scale = this.props.scaling };
        if (this.props.infinite) { addBags = form.additional.value };
        // Default
        let r0, r1, r2, r3, r4, r5, r6, r7, r8;
        r0 = r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = 0;
        const val = this.props.values;
        if (form.req1!==undefined) r0 = this.swapOn(form.req1) * parseInt(val[0]);
        if (form.req2!==undefined) r1 = this.swapOn(form.req2) * parseInt(val[1]);
        if (form.req3!==undefined) r2 = this.swapOn(form.req3) * parseInt(val[2]);
        if (form.req4!==undefined) r3 = this.swapOn(form.req4) * parseInt(val[3]);
        if (form.req5!==undefined) r4 = this.swapOn(form.req5) * parseInt(val[4]);
        if (form.req6!==undefined) r5 = this.swapOn(form.req6) * parseInt(val[5]);
        if (form.req7!==undefined) r6 = this.swapOn(form.req7) * parseInt(val[6]);
        if (form.req8!==undefined) r7 = this.swapOn(form.req8) * parseInt(val[7]);
        if (form.req9!==undefined) r8 = this.swapOn(form.req9) * parseInt(val[8]);
        
        if(this.props.imgName.includes("Slaughterhouse") && this.state.ovkPlus)
            r1 *= 0.8;

        // Reset XP from bags when C4 was used
        if(this.props.imgName.includes("Black Cat") && this.props.isLoud && (r3 !== 0 || r4 !== -0 || r5 !== 0))
            r6 = 0;

        let classic = parseInt(addBags) * parseInt(scale) + r0 + r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8;
        // console.log(r0, r1, r2, r3, r4, r5, r6, r7, r8);

        // BASE addition
        if(this.props.imgName.includes("Henry's Rock") && r4!==0) 
            classic+=2000
        // Difficulty
        const diffArr = Array.from(form.diff);
        let risk; // 0-14
        diffArr.forEach(item => item.checked ? risk = item.value : '');
        // Boosts
        let bonus = 0;
        const teamboosts = form.boost.value;
        let perkdeck = form.perk.checked;
        if (perkdeck) { bonus = 45 }
        bonus += teamboosts*3;
        // Stealth bonus
        const stealth = form.stealth.value;
        // Heat bonus
        const heat = form.heat.value;
        let heatBool = true;
        if (heat < 0) { heatBool = false };

        // Infamy bonus
        const infamy = this.state.infamyBonus; // %bonus
        // LVL & JC
        const lvl = form.lvl.value;
        const JC = this.props.jc;
        const difference = JC - lvl;
        let penalty = 0; // %penalty
        if (difference > 10 && difference <= 20) { penalty = 10 };
        if (difference > 20 && difference <= 30) { penalty = 20 };
        if (difference > 30 && difference <= 40) { penalty = 30 };
        if (difference > 40 && difference <= 50) { penalty = 40 };
        if (difference > 50 && difference <= 60) { penalty = 50 };
        if (difference > 60 && difference <= 70) { penalty = 60 };

        const ExpPenalty = classic * penalty / 100;
        const ExpRisk = (classic - ExpPenalty) * risk;
        const ExpCustody = (classic - ExpPenalty + ExpRisk) * custody;
        const basic = classic - ExpPenalty + ExpRisk;
        const ExpCrew = Math.round(basic * crew);
        const ExpBonus = Math.round(basic * bonus / 100);
        const ExpInfamy = Math.round(basic * infamy / 100);
        const ExpGage = Math.round(basic * (5 * gage/gageMax) / 100);
        const ExpStealth = Math.round((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage) * (stealth / 100));
        let ExpHeat;
        if (heatBool) { ExpHeat = Math.round((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth) * (heat / 100)) }
        else { ExpHeat = Math.round(-((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth) * (-heat / 100))) }
        if (ExpCustody > 0) {
            const jailedBasic = classic - ExpPenalty + ExpRisk - ExpCustody;
            const jailedXP = Math.round(jailedBasic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth);
            let jailedExpHeat;
            if (heatBool) { jailedExpHeat = Math.round(jailedXP * (heat / 100)) }
            else { jailedExpHeat = Math.round(-(jailedXP * (-heat / 100))) }
            const jailedResult = Math.round(jailedXP + jailedExpHeat);
            this.setState({ jailedEXP: this.numberWithCommas(jailedResult) });
        }

        const result = Math.round(basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth + ExpHeat);


        // ERRORS
        if (crew < 0) {  
            this.setState({errorShow: true, errorNum: 1});
            setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
            return;
        };

        if (this.props.imgName.includes("Henry's Rock")) {
            let amount = 0;
            if (r1!==0) amount++;
            if (r2!==0) amount++;
            if (r3!==0) amount++;
            if (r4!==0) amount++;
            if (amount !== 2) {
                this.setState({errorShow: true, errorNum: 3});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        if (this.props.imgName.includes('Stealing Xmas') || this.props.imgName.includes("The Biker Heist (day 1)")) {
            let amount = 0;
            if (r1!==0 && this.props.imgName.includes('Stealing Xmas')) amount++;
            if (r2!==0) amount++;
            if (r3!==0) amount++;
            if (r4!==0) amount++;
            if (r5!==0) amount++;
            if (r6!==0) amount++;
            if (r7!==0) amount++;
            if (amount !== 3) {
                if(this.props.imgName.includes('Stealing Xmas'))
                    this.setState({errorShow: true, errorNum: 4});
                if(this.props.imgName.includes('The Biker Heist (day 1)'))
                    this.setState({errorShow: true, errorNum: 6});
    
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }

            if (((r4!==0 && r5!==0) || (r6!==0 && r7!==0)) && this.props.imgName.includes('Stealing Xmas')) {
                this.setState({errorShow: true, errorNum: 5});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        if (this.props.imgName.includes("The Ukrainian Prisoner") && this.props.tr12 === "35500") {
            let amount = 0;
            if (r1 !== 0) amount++;
            if (r2 !== 0) amount++;
            if (amount === 2) {
                this.setState({errorShow: true, errorNum: 7});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        if (this.props.imgName.includes("Carshop") && (players - jailed) < r1/1000) {
            this.setState({errorShow: true, errorNum: 8});
            setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
            return;
        }

        if (this.props.imgName.includes("Golden Grin Casino") && this.props.tr12 === "59250") {
            let amount = 0;
            if(r1 !== 0) amount++;
            if(r2 !== 0) amount++;
            if(r3 !== 0) amount++;
            if (amount >= 2) {
                this.setState({errorShow: true, errorNum: 9});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        if (this.props.imgName.includes("Lab Rats")) {
            let amount = 0;
            if (r2 !== 0) amount++;
            if (r3 !== 0) amount++;
            if (r4 !== 0) amount++;
            if (amount > 1) {
                this.setState({errorShow: true, errorNum: 10});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        if (this.props.imgName.includes("Rats (day 1)")) {
            if (r1 !== 0 && r2 !== 0) {
                this.setState({errorShow: true, errorNum: 11});
                setTimeout(function() { this.setState({ errorShow: false })}.bind(this), 5000);
                return;
            }
        }

        // ↓ SHOW RESULT ↓

        this.setState({
            def: this.numberWithCommas(classic),
            penalty: this.numberWithCommas(ExpPenalty),
            risk: this.numberWithCommas(ExpRisk),
            custody: this.numberWithCommas(ExpCustody),
            crew: this.numberWithCommas(ExpCrew),
            skill: this.numberWithCommas(ExpBonus),
            infamy: this.numberWithCommas(ExpInfamy),
            gages: this.numberWithCommas(ExpGage),
            stealth: this.numberWithCommas(ExpStealth),
            heat: this.numberWithCommas(ExpHeat),
            EXP: this.numberWithCommas(result) 
        }, () => this.countLevels(result));
    }
    countLevels = (exp) => {
        const LVL = localStorage.getItem('pd2calc_level');

        const expArray = [
            900, 1250, 1550, 1850, 2200, 2600, 3000, 3500, 4000, 4600, 
            4601, 4611, 4637, 4687, 4771, 4895, 5068, 5299, 5595, 5965, 
            6417, 6959, 7600, 8347, 9208, 10193, 11308, 12563, 13965, 15523, 
            17245, 19139, 21213, 23476, 25935, 28599, 31476, 34574, 37902, 41467, 
            45278, 49342, 53670, 58267, 63143, 68306, 73763, 79524, 85596, 91988, 
            98707, 105762, 113161, 120913, 129025, 137506, 146363, 155606, 165242, 175279, 
            185726, 196591, 207881, 219606, 231774, 244392, 257468, 271012, 285031, 299533, 
            314527, 330021, 346022, 362540, 379582, 397156, 415271, 433936, 453157, 472943, 
            493303, 514245, 535776, 557906, 580642, 603992, 627965, 652569, 677811, 703701, 
            730247, 757456, 785336, 813897, 843146, 873091, 903741, 935104, 967187, 1000000];
        console.log('lvl: ', +LVL, '; lvl %: ', this.state.lvlProg, '; exp: ', exp);
        // ! 10 → 11: 4611xp ; got: 32'940xp + 0% so:


        if (LVL < 100) {
            let i = +LVL,
                xpLeft = 0;
            let currentExp = +expArray[i]*this.state.lvlProg/100;
            let toNextLvl = Math.round((+expArray[i]-currentExp)*100)/100;
            let percLeft;
            console.log("current xp: ", currentExp, " to next: ", toNextLvl, " full: ", +expArray[i]);

            while (exp > 0 && i < 100) {
                let expToNext = +expArray[i];
                if (toNextLvl !== 0) {
                    expToNext = toNextLvl;
                    toNextLvl = 0;
                }

                if (exp - expToNext > 0) {
                    exp -= expToNext;
                    i++;
                    currentExp = 0;
                    if (i === 100)
                        xpLeft = exp;
                } else {
                    xpLeft = exp + currentExp;
                    exp = 0;
                }          
            }
            if (i === 100) percLeft = 100;
            else percLeft = Math.round(xpLeft/expArray[i]*100);

            this.setState({newLvl: i, newExp: percLeft});

            if (i === 100) console.log(`Now you have 100lv with ${xpLeft}xp added to your infamy pool!`);
            else console.log(`Now you have ${i}lvl with ${xpLeft} xp left.`);
        } else {
            this.setState({newLvl: 100, newExp: 100});
        }
    }

    toggleScreen = (e) => {
        this.setState({ pcScreen: !this.state.pcScreen });
        e.target.classList.toggle('close');
    }

    showInfo = () => {
        const actualIndex = this.state.zindexVal;
        this.setState({ showInfo: !this.state.showInfo, zindexInfo: actualIndex + 1, zindexVal: this.state.zindexVal + 1 });
    }

    showDetails = () => {
        const actualIndex = this.state.zindexVal;
        this.setState({ showDetails: !this.state.showDetails, zindexDetails: actualIndex + 1, zindexVal: this.state.zindexVal + 1 });
    }

    goBack = () => this.setState({EXP: null});

    toggleWindowSpec = () => {
        const actualIndex = this.state.zindexVal;
        this.setState({ showSpec: !this.state.showSpec, zindexSpec: actualIndex + 1, zindexVal: this.state.zindexVal + 1 });
    }

    checkDiff = () => {
        if (this.state.difficulty === null) {
            this.setState({errorShow: true, errorNum: 2});
            setTimeout(function() { this.setState({ errorShow: false, errorNum: null })}.bind(this),5000);
        }
    }

    componentDidMount = () => this.setState({
        nickname: localStorage.getItem("pd2calc_nickname"),
        inf: localStorage.getItem("pd2calc_infamy"),
    });

    render() {
        console.log("progress", this.state.lvlProg);

        return(
            <Content onSubmit={this.countEXP} onChange={this.checkValues}>
                <Main>

                    <PhotoBox>
                        <Players>
                            <Paper />
                            <Custody />
                        </Players>

                        <Rest>
                            <Polaroid src={this.props.src} name={this.props.imgName} jc={this.props.jc} />
                            <Gage max={this.state.gage} />
                        </Rest>
                    </PhotoBox>

                    <DiffBox>
                        <ClipBoard limit={this.countGage} />
                    </DiffBox>

                    <ReqBox>
                        <Requirements 
                            tr11={this.props.tr11} tr12={this.props.tr12}
                            tr21={this.props.tr21} tr22={this.props.tr22}
                            tr31={this.props.tr31} tr32={this.props.tr32}
                            tr41={this.props.tr41} tr42={this.props.tr42}
                            tr51={this.props.tr51} tr52={this.props.tr52}
                            tr61={this.props.tr61} tr62={this.props.tr62}
                            tr71={this.props.tr71} tr72={this.props.tr72}
                            tr81={this.props.tr81} tr82={this.props.tr82}
                            tr91={this.props.tr91} tr92={this.props.tr92}
                            status={this.props.status}
                            limitStart={this.props.limitStart}
                            limitEnd={this.props.limitEnd}
                            redDiamond={this.state.showRed ? true : false}
                            ovkHells={this.state.ovkHells ? true : false}
                            ovkGoats={this.state.ovkGoats ? true : false}
                            fLootBonus={this.state.fLootBonus ? true : false}
                            pigs={this.state.pigs}
                        />
                        {this.props.infinite && <Infinite limit={this.props.limit}/>}
                    </ReqBox>
                </Main>
                
                <Main2>
                    <BonusBox>
                        <Bonus />
                    </BonusBox>
                    <Tablet infamy={this.infamyBoost} nickname={this.state.nickname} localVal={this.state.inf} lvlProgress={this.setLvlProgress} />
                </Main2>
                
                <Main3>
                    <Result>
                    </Result>
                    <PC>
                        <PC_SCREEN>
                            <PC_DISPLAYS>
                            <PC_DISPLAY close={this.state.pcScreen ? true : false}>
                                <FontAwesomeIcon icon={faDesktop} style={{position:'absolute', left: '10px', top: '10px', color:'#fff', filter: 'drop-shadow(0 0 2px black)', cursor:'pointer'}} onClick={this.toggleWindowSpec} />
                                <FontAwesomeIcon icon={faInfoCircle} style={{position:'absolute', left: '12px', top: '50px', color:'#fff', filter: 'drop-shadow(0 0 2px black)', cursor:'pointer'}} onClick={this.showInfo} />
                                <FontAwesomeIcon icon={faCalculator} style={{position:'absolute', left: '12px', top: '90px', color:'#fff', filter: 'drop-shadow(0 0 2px black)', cursor:'pointer'}}/>
                                <FontAwesomeIcon icon={faKey} style={{position:'absolute', left: '12px', top: '130px', color:'#fff', filter: 'drop-shadow(0 0 2px black)', cursor:'pointer'}}/>
                                
                                {
                                    this.state.showInfo &&
                                    <PC_FILE style={{zIndex: this.state.zindexInfo}}>
                                        <PC_FILE_TOP>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div onClick={this.showInfo}>×</div>
                                        </PC_FILE_TOP>
                                        <PC_FILE_CONTENT>
                                            <PC_FILE_TITLE>{this.state.EXP===null?"Waiting for data...":"Data set ... check results:"}</PC_FILE_TITLE>
                                            { this.state.EXP === null && 
                                              <SendBox>
                                                <Frame>
                                                  <InnerFrame>
                                                    <Send onClick={this.checkDiff}/>
                                                  </InnerFrame>
                                                </Frame>
                                                <TextBox>
                                                    <span>PUSH</span>
                                                </TextBox>
                                              </SendBox>
                                            }
                                            {
                                                this.state.EXP &&                                         
                                                <PC_FILE_EXP>
                                                    <p>This mission provides:</p>
                                                    {
                                                    this.state.jailedEXP
                                                    ? <p>{this.state.jailedEXP} EXP (Custody)</p>
                                                    : <p>{this.state.EXP} EXP</p>
                                                    }
                                                    <p>After it you'll have {this.state.newLvl}lvl and {this.state.newExp}% EXP!</p>

                                                    <PC_MORE_DETAILS onClick={this.showDetails}>Details</PC_MORE_DETAILS>
                                                    <PC_BACK_BTN onClick={this.goBack}>Back</PC_BACK_BTN>
                                                </PC_FILE_EXP>
                                            }
                                        </PC_FILE_CONTENT>
                                    </PC_FILE>
                                }

                                
                                {
                                    this.state.showDetails &&
                                    <PC_FILE_DETAILS style={{zIndex: this.state.zindexDetails}}>
                                        <PC_FILE_TOP>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div onClick={this.showDetails}>×</div>
                                        </PC_FILE_TOP>
                                        <PC_FILE_DETAILS_TITLE>Details...</PC_FILE_DETAILS_TITLE>
                                        <PC_FILE_DETAILS_DATA>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Suspect name:</td>
                                                        <td>{this.state.nickname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Whole EXP:</td>
                                                        <td>{this.state.EXP}</td>
                                                    </tr>
                                                    {this.state.jailedEXP &&
                                                        <tr>
                                                            <td>Exp if you're in custody</td>
                                                            <td>{this.state.jailedEXP}</td>
                                                        </tr>}
                                                    <tr style={{"paddingTop": "15px"}}>
                                                        <td>Default EXP:</td>
                                                        <td>{this.state.def}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penalty debuff:</td>
                                                        <td>{this.state.penalty}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Risk bonus:</td>
                                                        <td>{this.state.risk}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Custody debuff:</td>
                                                        <td>{this.state.custody}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Crew bonus:</td>
                                                        <td>{this.state.crew}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perkdeck &amp; Teamboost bonuses:</td>
                                                        <td>{this.state.skill}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Infamy bonus:</td>
                                                        <td>{this.state.infamy}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gage bonus:</td>
                                                        <td>{this.state.gages}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Stealth bonus:</td>
                                                        <td>{this.state.stealth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heat bonus/debuff:</td>
                                                        <td>{this.state.heat}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </PC_FILE_DETAILS_DATA>
                                    </PC_FILE_DETAILS>
                                }

                                {
                                    this.state.showSpec && 
                                    <PC_FILE_SPEC style={{zIndex: this.state.zindexSpec}}>
                                        <PC_FILE_TOP>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div onClick={this.toggleWindowSpec}>×</div>
                                        </PC_FILE_TOP>
                                        <PC_FILE_CONTENT style={{display: "flex", flexDirection: "column", alignItems:"center",justifyContent: "center"}}>
                                            <PC_SPEC_COMPONENT> <img src={cpu} width="30" alt="CPU" />CPU: SRAMD X5000 </PC_SPEC_COMPONENT>
                                            <PC_SPEC_COMPONENT> <img src={gpu} width="30" alt="GPU" />GPU: Nmedia 6500 Ti </PC_SPEC_COMPONENT>
                                            <PC_SPEC_COMPONENT> <img src={mb} width="30" alt="MotherBoard" />MB: Megabyte z930 </PC_SPEC_COMPONENT>
                                            <PC_SPEC_COMPONENT> <img src={ram} width="30" alt="RAM Memory" />RAM: 16GB MegaRam </PC_SPEC_COMPONENT>
                                            <PC_SPEC_COMPONENT> <img src={hdd} width="30" alt="HDD" />Memory: 1024GB </PC_SPEC_COMPONENT>
                                            <PC_SPEC_COMPONENT> <img src={psu} width="30" alt="PSU" />PSU: ForceOfPower 800W </PC_SPEC_COMPONENT>
                                        </PC_FILE_CONTENT>
                                    </PC_FILE_SPEC>
                                }
                                <PC_BAR>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    <FontAwesomeIcon icon={faFileWord} />
                                    <FontAwesomeIcon icon={faFileCode} />
                                    <FontAwesomeIcon icon={faFileAlt} style={{color: "#42cdff"}} />
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <div style={{position: "absolute", right:"5px", fontFamily:"sans-serif", fontSize: "15px"}} >21:37</div>
                                </PC_BAR>
                                
                                
                                {
                                    this.state.errorShow && 
                                    <PC_ERROR>
                                        <FontAwesomeIcon icon={faExclamationTriangle} />
                                        <PC_ERROR_TITLE>ERROR!</PC_ERROR_TITLE>
                                        <PC_ERROR_TEXT>There was a dangerous try to calculate EXP with invalid data.</PC_ERROR_TEXT>
                                        {this.state.errorNum === 1 && <PC_ERROR_TEXT>You can not have more or an equal amount of players in custody as in the match when escaping. </PC_ERROR_TEXT>}
                                        {this.state.errorNum === 2 && <PC_ERROR_TEXT>You have to choose difficulty level before submitting data. </PC_ERROR_TEXT>}
                                        {this.state.errorNum === 3 && <PC_ERROR_TEXT>You are not allowed to complete more or less than 2 rooms on "Henry's Rock" map. </PC_ERROR_TEXT>}
                                        {this.state.errorNum === 4 && <PC_ERROR_TEXT>You have to choose 3 collected objects, no more, no less.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 5 && <PC_ERROR_TEXT>You can not collect two the same items.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 6 && <PC_ERROR_TEXT>You have to choose 3 mission objectives, no more, no less. Notice that collecting soda for Mike is an additional task and it is not included to the 3 random objectives.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 7 && <PC_ERROR_TEXT>You can not have more than 1 objective scenario.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 8 && <PC_ERROR_TEXT>You can not secure more cars than live players escaped</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 9 && <PC_ERROR_TEXT>You can not have more than 1 entrance scenario.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 10 && <PC_ERROR_TEXT>Only 1 safe can appear.</PC_ERROR_TEXT>}
                                        {this.state.errorNum === 11 && <PC_ERROR_TEXT>You can not choose 2 different escape scenarios.</PC_ERROR_TEXT>}
                                    </PC_ERROR>
                                }
                                {
                                    this.state.whatAboutBluescreen &&
                                    <>
                                    <PC_BLUESCREEN>
                                        <PC_BS_LEFT>
                                            <PC_BS_FACE>&#58;&#40;</PC_BS_FACE>
                                            <PC_BS_TEXT>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</PC_BS_TEXT>
                                            <PC_BS_TIMER>{this.state.bluescreenPerc}% complete</PC_BS_TIMER>
                                            <PC_BS_QR>
                                                <img src={qr} width="50" alt="QR Code" />
                                                <span>You found any problems while using the app? You'll find me there.</span>
                                            </PC_BS_QR>
                                        </PC_BS_LEFT>
                                        <PC_BS_RIGHT>
                                            <PC_BS_LOGO><img src={dollar} width="80" alt="Dollar Sign" /></PC_BS_LOGO>
                                        </PC_BS_RIGHT>
                                    </PC_BLUESCREEN>
                                    <PC_POST goPost={this.state.runPost ? true : false}>
                                        <PC_POST_TEXT ref={this.POST}></PC_POST_TEXT>
                                    </PC_POST>
                                    </>
                                }

                            </PC_DISPLAY>
                            <PC_CLOSE />
                            </PC_DISPLAYS>
                            <PC_POWER onClick={this.toggleScreen} />
                        </PC_SCREEN>
                        <PC_LEG></PC_LEG>
                        <PC_STAND></PC_STAND>
                    </PC>
                    <Desk>
                        <div></div>
                    </Desk>
                </Main3>
            
            </Content>
        );
    };
}



export default HomeHeist;