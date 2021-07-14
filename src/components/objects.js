import { Component } from "react";
import { RequireNotes, Tape, StickyPaper, StickyTitle, CrewCheckboxes, CrewLabel, CrewRadio,
    CrewBox, CrewAmount, GageNote, GageLabel, ClipTitle, ClipPaper, Clip, ClipMetal,
    Skulls, Skull, Skull2, Skull3, Skull4, Difficulty, Normal, DiffLabel, DiffRadio, CirclePick, DiffName,
    DiffUnderScore, GageSelect, PolaroidFrame, PolaroidPhoto, PolaroidTitle, JC, Tape2, JailNote, JailTitle,
    JailLabel, JailBox, JailRadio, JailAmount, BonusNote, BoostLabels, BoostLabel, BoostTitle, BoostInput, BoostCheckbox,
    BoostCheckboxStyle, HeatTitle, StealthTitle, HeatLabel, HeatInput, StealthSelect, StealthOption, LVLBox,  Holder, Device,
    Display, Camera, DisplayTitle, DisplayPhoto, DisplayInfo, DisplayLVL, DisplayBGTop, DisplayDot, DisplayClose, Nickname,
    Infamy, Lvl, Send, InfiniteBox, InfiniteInput, DisplayMenu, HolderBottom} from "../styles/heist-main";
import { RCB, RIN, RS, setArray } from "./reqCheckbox";

import Underscore from "../images/underscore.svg";


export class Requirements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input1: null
        }
    }
    
    render() {
        return(
            <RequireNotes>
                <Tape>
                    <table>
                        <tbody>
                            <tr>
                                <th>Requiremenets</th>
                                <th>EXP</th>
                                <th>Status</th>
                            </tr>
                            {this.props.tr11!=null ? <tr><td>{this.props.tr11}</td><td>{this.props.tr12}</td><td>
                                {   this.props.status[0]==='rCB' && <RCB rNum="1" default/> }
                                {   this.props.status[0]==='rIN' && <RIN /> }
                                {   this.props.status[0]==='rS' && <RS start={this.props.limitStart[0]} limit={this.props.limitEnd[0]} rNum="1" /> }
                            </td></tr> : null}
                            {this.props.tr21!=null ? <tr><td>{this.props.tr21}</td><td>{this.props.tr22}</td><td>
                                {   this.props.status[1]==='rCB' && <RCB rNum="2" /> }
                                {   this.props.status[1]==='rIN' && <RIN /> }
                                {   this.props.status[1]==='rS' && <RS start={this.props.limitStart[1]} limit={this.props.limitEnd[1]} rNum="2" /> }
                            </td></tr> : null}
                            {this.props.tr31!=null ? <tr><td>{this.props.tr31}</td><td>{this.props.tr32}</td><td>
                                {   this.props.status[2]==='rCB' && <RCB rNum="3" /> }
                                {   this.props.status[2]==='rIN' && <RIN /> }
                                {   this.props.status[2]==='rS' && <RS start={this.props.limitStart[2]} limit={this.props.limitEnd[2]} rNum="3" /> }
                            </td></tr> : null}
                            {this.props.tr41!=null ? <tr><td>{this.props.tr41}</td><td>{this.props.tr42}</td><td>
                                {   this.props.status[3]==='rCB' && <RCB rNum="4" /> }
                                {   this.props.status[3]==='rIN' && <RIN /> }
                                {   this.props.status[3]==='rS' && <RS start={this.props.limitStart[3]} limit={this.props.limitEnd[3]} rNum="4" /> }
                            </td></tr> : null}
                            {this.props.tr51!=null ? <tr><td>{this.props.tr51}</td><td>{this.props.tr52}</td><td>
                                {   this.props.status[4]==='rCB' && <RCB rNum="5" /> }
                                {   this.props.status[4]==='rIN' && <RIN /> }
                                {   this.props.status[4]==='rS' && <RS start={this.props.limitStart[4]} limit={this.props.limitEnd[4]} rNum="5" /> }
                            </td></tr> : null}
                            {   this.props.redDiamond ? 
                            <tr><td>Red diamond secured</td><td>+2000</td><td><RCB rNum="3" /></td></tr> : null
                            }
                            <tr><td></td><td></td></tr>
                        </tbody>
                    </table>
                </Tape>
            </RequireNotes>
        );
    }
}

export const Paper = () => {

        return(
            <StickyPaper>
                <Tape2 />
                <StickyTitle>Players</StickyTitle>
                <CrewCheckboxes>
                    <CrewLabel>
                        <CrewRadio value="1" required />
                        <CrewBox />
                    </CrewLabel>
                    <CrewLabel>
                        <CrewRadio value="2" />
                        <CrewBox />
                    </CrewLabel>
                    <CrewLabel>
                        <CrewRadio value="3" />
                        <CrewBox />
                    </CrewLabel>
                    <CrewLabel>
                        <CrewRadio value="4" />
                        <CrewBox />
                    </CrewLabel>
                </CrewCheckboxes>
                <CrewAmount>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </CrewAmount>
            </StickyPaper>
        );
}

export const Custody = () => {
    return(
        <JailNote>
            <JailTitle><span>Players in jail</span><span>while escaping</span></JailTitle>
            <CrewCheckboxes>
                <JailLabel>
                    <JailRadio value="0" required />
                    <JailBox />
                </JailLabel>
                <JailLabel>
                    <JailRadio value="1" />
                    <JailBox />
                </JailLabel>
                <JailLabel>
                    <JailRadio value="2" />
                    <JailBox />
                </JailLabel>
                <JailLabel>
                    <JailRadio value="3" />
                    <JailBox />
                </JailLabel>
            </CrewCheckboxes>
            <JailAmount>
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </JailAmount>
        </JailNote>
    );
}

export class Gage extends Component {

    render() {

        return(
            <GageNote>
                <StickyTitle>Gage Bonus</StickyTitle>
                <GageLabel>
                    {/* <GageInput min={0} max={this.props.max} defaultValue="0" maxLength="10" name="gage" /> */}
                    <GageSelect name="gage">
                        {setArray(0, this.props.max).map((item) => <option key={item}>{item}</option>)}
                    </GageSelect>
                    / {this.props.max}              
                </GageLabel>
            </GageNote>
        );
    }
}

export class ClipBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
    }

    nameSwitch = (e) => {
        this.setState({name: e.target.dataset.diff});
        this.props.limit(e.target.dataset.diff);
    }

    render() {
        return(
            <Clip>
                <ClipMetal />
                <ClipPaper>
                    <ClipTitle>Difficulty</ClipTitle>
                    <Difficulty onChange={this.nameSwitch}>
                        <DiffLabel>
                            <DiffRadio data-diff="Normal" value="0" required />
                            <CirclePick />
                            <Normal />
                        </DiffLabel>

                        <Skulls>
                            <DiffLabel>
                                <DiffRadio data-diff="Hard" value="2" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Very Hard" value="5" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Overkill" value="10" />
                                <CirclePick />
                                <Skull />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Mayhem" value="11.5" />
                                <CirclePick />
                                <Skull2 />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Death Wish" value="13" />
                                <CirclePick />
                                <Skull3 />
                            </DiffLabel>
                            <DiffLabel>
                                <DiffRadio data-diff="Death Sentence" value="14" />
                                <CirclePick />
                                <Skull4 />
                            </DiffLabel>
                        </Skulls>
                    </Difficulty>
                    <DiffName font={this.state.name==="Death Sentence"?"smaller":null}>
                        {this.state.name}
                        <DiffUnderScore src={Underscore} alt="Underscore" lower={this.state.name==="Death Sentence"?"lower":null}/>
                    </DiffName>
                </ClipPaper>
            </Clip>
        );
    }
}

export class Polaroid extends Component {

    render() {
        return(
            <PolaroidFrame>
                <JC><span>JC</span> <span>{this.props.jc}</span></JC>
                <PolaroidPhoto src={this.props.src} />
                <PolaroidTitle>{this.props.name}</PolaroidTitle>
            </PolaroidFrame>
        );
    }
}


export class Bonus extends Component {

    render(){
        const values = ['0', '3', '5', '7', '8', '10', '15', '18', '20', '23', '25'];
        
        return(
            <BonusNote>
                <BoostTitle><span>Teamboosts</span><span>&amp; Perkdeck</span></BoostTitle>
                <BoostLabels>
                    <BoostLabel>
                        TeamBoosts: <BoostInput min="0" max="8" defaultValue="0" size="1" />
                    </BoostLabel>
                    <BoostLabel>
                        PD bonus:
                        <BoostCheckbox />
                        <BoostCheckboxStyle />
                    </BoostLabel>
                </BoostLabels>
                <HeatTitle><span>Heat</span> <span>bonus/penalty</span></HeatTitle>
                <HeatLabel>
                    <HeatInput min="-30" max="15" defaultValue="0" />
                </HeatLabel>
                <StealthTitle>Stealth</StealthTitle>
                <StealthSelect name="stealth">
                    {values.map(value => <StealthOption key={value}>{value}</StealthOption> )}
                </StealthSelect>
            </BonusNote>
        );
    }
}

export class Tablet extends Component {

    getInfamy = (e) => {
        console.log(e.currentTarget.value)
        this.props.infamy(e.currentTarget.value);
    }

    render() {

        const lvls = ['-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
                    'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
                    'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV+'];



        return(
            <LVLBox>
                <Holder />
                <Device>
                    <Display>
                        <Camera />
                        <DisplayBGTop>
                            <DisplayDot />
                            <DisplayDot />
                            <DisplayDot />
                            <DisplayClose><div></div><div></div></DisplayClose>
                        </DisplayBGTop>
                        <DisplayTitle>Suspect</DisplayTitle>
                        <DisplayInfo>
                            <DisplayPhoto />
                            <DisplayLVL>
                                <div><span>Name:</span> <Nickname /></div>
                                <div>Infamy: <Infamy onChange={this.getInfamy}>{lvls.map(lvl => <option key={lvl}>{lvl}</option>)}</Infamy></div>
                                <div>Level: <Lvl min="0" max="100" required /></div>
                                <div><Send /></div>
                            </DisplayLVL>
                        </DisplayInfo>
                        <DisplayMenu>
                            <div></div>
                            <div></div>
                            <div></div>
                        </DisplayMenu>
                    </Display>
                    <HolderBottom />
                </Device>
            </LVLBox>
        );
    }
}

export const Infinite = ({limit}) => {

    return(
        <InfiniteBox>
            <div>
                <span>+</span><InfiniteInput min="0" max={limit} name="additional" />
            </div>
            <p>Additional bags</p>
        </InfiniteBox>
    );
}