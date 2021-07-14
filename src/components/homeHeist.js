import { Component } from "react";
import { Content, Main, Main2, Main3, Players, PhotoBox, DiffBox, ReqBox, Rest, BonusBox, Result, Desk, PC, PC_SCREEN, PC_LEG, PC_STAND, PC_DISPLAY,
    PC_POWER, PC_CLOSE, PC_BAR, PC_FILE, PC_FILE_TOP, PC_FILE_CONTENT, PC_FILE_TITLE, PC_FILE_EXP, PC_MORE_DETAILS, PC_FILE_DETAILS, PC_FILE_DETAILS_TITLE,
    PC_FILE_DETAILS_DATA, PC_FILE_SPEC} from "../styles/heist-main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faFileWord, faFileCode, faFileUpload, faFileAlt, faDesktop, faKey, faInfoCircle, faCalculator } from '@fortawesome/free-solid-svg-icons'
import { Requirements, Paper, Custody, Gage, ClipBoard, Polaroid, Bonus, Tablet, Infinite } from "./objects";

class HomeHeist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            difficulty: null,
            showRed: false,

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
            EXP: null,
            pcScreen: false,

            zindexVal: 1,
            zindexSpec: 1,
            zindexInfo: 1,
            zindexDetails: 1,
            zindexCalc: 1,
            showInfo: true,
            showDetails: false,
            showSpec: false,
        };
    }

    countGage = (item) => {
        this.setState({ difficulty: item }, () => {
            const strongRisk = ['Overkill', 'Mayhem', 'Death Wish', 'Death Sentence'];
            const dif = this.state.difficulty;
            if ((dif === strongRisk[0] || dif === strongRisk[1] || dif === strongRisk[2] || dif === strongRisk[3]) && this.props.redDiamond) { this.setState({ showRed: true })} 
            else { this.setState({ showRed: false })}
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

    numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    swapOn = (item) => {
        if (typeof item.value==="undefined" || item.checked===false) { return 0 };
        if (item.checked===true) { return 1 };

        return item.value;
    }

    countEXP = (e) => {
        e.preventDefault();

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
        let r0, r1, r2, r3, r4;
        r0 = r1 = r2 = r3 = r4 = 0;
        const val = this.props.values;
        if (form.req1!==undefined) r0 = this.swapOn(form.req1) * parseInt(val[0]);
        if (form.req2!==undefined) r1 = this.swapOn(form.req2) * parseInt(val[1]);
        if (form.req3!==undefined) r2 = this.swapOn(form.req3) * parseInt(val[2]);
        if (form.req4!==undefined) r3 = this.swapOn(form.req4) * parseInt(val[3]);
        if (form.req5!==undefined) r4 = this.swapOn(form.req5) * parseInt(val[4]);
        const classic = parseInt(addBags) * parseInt(scale) + r0 + r1 + r2 + r3 + r4;
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
        const basic = classic - ExpPenalty + ExpRisk - ExpCustody;
        if (ExpCustody > 0) {
            // for jailed player
        }
        const ExpCrew = Math.round(basic * crew);
        const ExpBonus = Math.round(basic * bonus / 100);
        const ExpInfamy = Math.round(basic * infamy / 100);
        const ExpGage = Math.round(basic * (5 * gage/gageMax) / 100);
        const ExpStealth = Math.round((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage) * (stealth / 100));
        let ExpHeat;
        if (heatBool) { ExpHeat = Math.round((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth) * (heat / 100)) }
        else { ExpHeat = Math.round(-((basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth) * (-heat / 100))) }

        const result = Math.round(basic + ExpCrew + ExpBonus + ExpInfamy + ExpGage + ExpStealth + ExpHeat);

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
        });
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
    toggleWindowSpec = () => {
        const actualIndex = this.state.zindexVal;
        this.setState({ showSpec: !this.state.showSpec, zindexSpec: actualIndex + 1, zindexVal: this.state.zindexVal + 1 });
    }


    render() {
        return(
            <Content onSubmit={this.countEXP}>
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
                            status={this.props.status}
                            limitStart={this.props.limitStart}
                            limitEnd={this.props.limitEnd}
                            redDiamond={this.state.showRed ? true : false}
                        />
                        {this.props.infinite && <Infinite limit={this.props.limit}/>}
                    </ReqBox>
                </Main>
                <Main2>
                    <BonusBox>
                        <Bonus />
                    </BonusBox>
                    <Tablet infamy={this.infamyBoost} />
                </Main2>
                <Main3>
                    <Result>
                    </Result>
                    <PC>
                        <PC_SCREEN>
                            <PC_DISPLAY>
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
                                            <PC_FILE_TITLE>{this.state.EXP===null?"Waiting for data...":"Data set ... check results"}</PC_FILE_TITLE>
                                            {
                                                this.state.EXP &&                                         
                                                <PC_FILE_EXP>
                                                    <p>This mission provides</p>
                                                    <p>{this.state.EXP} EXP</p>

                                                    <PC_MORE_DETAILS onClick={this.showDetails}>Details</PC_MORE_DETAILS>
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
                                                        <td>Whole EXP:</td>
                                                        <td>{this.state.EXP}</td>
                                                    </tr>
                                                    <tr>
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
                                {this.state.pcScreen && <PC_CLOSE />}
                            </PC_DISPLAY>
                            
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