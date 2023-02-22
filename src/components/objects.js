import { Component } from "react";
import {
    RequireNotes, Tape, StickyPaper, StickyTitle, CrewCheckboxes, CrewLabel, CrewRadio,
    CrewBox, GageNote, GageLabel, ClipTitle, ClipPaper, Clip, ClipMetal,
    Skulls, Skull, Skull2, Skull3, Skull4, Difficulty, Normal, DiffLabel, DiffRadio, CirclePick, DiffName,
    DiffUnderScore, GageSelect, PolaroidFrame, PolaroidPhoto, PolaroidTitle, JC, Tape2, JailNote, JailTitle,
    JailLabel, JailBox, JailRadio, BonusNote, BoostLabels, BoostLabel, BoostTitle, BoostSelect, BoostCheckbox,
    BoostCheckboxStyle, HeatTitle, StealthTitle, HeatLabel, HeatInput, StealthSelect, StealthOption, LVLBox, Holder, Device,
    Display, Camera, DisplayTitle, DisplayInfo, DisplayLVL, DisplayBGTop, DisplayDot, DisplayClose, Nickname,
    Infamy, Lvl, InfiniteBox, InfiniteInput, DisplayMenu, HolderBottom, DisplayCircle, DisplaySliderTitle
} from "../styles/heist-main";
import { RCB, RS, setArray } from "./reqCheckbox";
import CircularSlider from "@fseehawer/react-circular-slider";

import Underscore from "../images/underscore.svg";
import TabletArrow from "../images/arr.png";

export const RequirementsRow = (props) => {
    const { row } = props;

    return (
        <tr>
            <td>{row[0]}</td>
            <td>{row[1] > 0 ? row[0].includes('Default') ? row[1] : `+${row[1]}` : row[1]}</td>
            <td>
                {row[2] === 'rCB' && row[0] === "Default (completion)" && <RCB default />}
                {row[2] === 'rCB' && row[0] !== "Default (completion)" && <RCB readonly={row[3] === 'readonly' ? true : null} />}
                {row[2] === 'rS' && <RS start={row[3]} limit={row[4]} />}
            </td>
        </tr>
    );
}

export const Requirements = (props) => {

    return (
        <RequireNotes>
            <Tape>
                <table>
                    <tbody>
                        <tr>
                            <th>Requiremenets</th>
                            <th>EXP</th>
                            <th>Status</th>
                        </tr>
                        {props.requirements.map((item, index) => <RequirementsRow key={index} row={item} />)}

                        <tr><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </Tape>
        </RequireNotes>
    );

}

export const Paper = () => (
    <StickyPaper>
        <Tape2 />
        <StickyTitle>Players</StickyTitle>
        <CrewCheckboxes>
            <CrewLabel>
                <CrewRadio num="1" value="1" defaultChecked required />
                <CrewBox num="1" />
            </CrewLabel>
            <CrewLabel>
                <CrewRadio num="2" value="2" />
                <CrewBox num="2" />
            </CrewLabel>
            <CrewLabel>
                <CrewRadio num="3" value="3" />
                <CrewBox num="3" />
            </CrewLabel>
            <CrewLabel>
                <CrewRadio num="4" value="4" />
                <CrewBox num="4" />
            </CrewLabel>
        </CrewCheckboxes>
    </StickyPaper>
);

export const Custody = () => (
    <JailNote>
        <JailTitle><span>Players in jail</span><span>while escaping</span></JailTitle>
        <CrewCheckboxes>
            <JailLabel>
                <JailRadio num="1" value="0" defaultChecked required />
                <JailBox num="1" />
            </JailLabel>
            <JailLabel>
                <JailRadio num="2" value="1" />
                <JailBox num="2" />
            </JailLabel>
            <JailLabel>
                <JailRadio num="3" value="2" />
                <JailBox num="3" />
            </JailLabel>
            <JailLabel>
                <JailRadio num="4" value="3" />
                <JailBox num="4" />
            </JailLabel>
        </CrewCheckboxes>
    </JailNote>
);

export const Gage = props => (
    <GageNote>
        <StickyTitle>Gage Bonus</StickyTitle>
        <GageLabel>
            <GageSelect name="gage">
                {setArray(0, props.max).map((item) => <option key={item}>{item}</option>)}
            </GageSelect>
            / {props.max}
        </GageLabel>
    </GageNote>
);

export class ClipBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
    }

    nameSwitch = (e) => {
        this.setState({ name: e.target.dataset.diff });
        this.props.limit(e.target.dataset.diff);
    }

    render() {
        return (
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
                    <DiffName font={this.state.name === "Death Sentence" ? "smaller" : null}>
                        {this.state.name}
                        <DiffUnderScore src={Underscore} alt="Underscore" lower={this.state.name === "Death Sentence" ? "lower" : null} />
                    </DiffName>
                </ClipPaper>
            </Clip>
        );
    }
}

export class Polaroid extends Component {

    render() {
        return (
            <PolaroidFrame>
                <JC><span>JC</span> <span>{this.props.jc}</span></JC>
                <PolaroidPhoto src={this.props.src} />
                <PolaroidTitle>{this.props.name}</PolaroidTitle>
            </PolaroidFrame>
        );
    }
}

export class Bonus extends Component {

    render() {
        const values = ['0', '3', '5', '7', '8', '10', '15', '18', '20', '23', '25'];

        return (
            <BonusNote>
                <p>Bonuses</p>
                <BoostTitle><span>TB(s) &amp;</span><span>Perkdeck</span></BoostTitle>
                <BoostLabels>
                    <BoostLabel>
                        TeamBoosts: <BoostSelect> {setArray(0, 8).map((item) => <option key={item}>{item}</option>)}</BoostSelect>
                    </BoostLabel>
                    <BoostLabel>
                        PD bonus:
                        <BoostCheckbox />
                        <BoostCheckboxStyle />
                    </BoostLabel>
                </BoostLabels>
                <HeatTitle><span>Heat</span></HeatTitle>
                <HeatLabel>
                    <HeatInput min="-30" max="15" defaultValue="0" />
                </HeatLabel>
                <StealthTitle>Stealth</StealthTitle>
                <StealthSelect name="stealth">
                    {values.map(value => <StealthOption key={value}>{value}</StealthOption>)}
                </StealthSelect>
            </BonusNote>
        );
    }
}

export class Tablet extends Component {

    getInfamy = (e) => this.props.infamy(e.currentTarget.value);
    setLvlProgress = (num) => this.props.lvlProgress(num);

    storageValues = (e) => {
        if (e.currentTarget.name === "nickname") { localStorage.setItem("pd2calc_nickname", e.currentTarget.value) }
        if (e.currentTarget.name === "infamy") { localStorage.setItem("pd2calc_infamy", e.currentTarget.value) }
        if (e.currentTarget.name === "lvl") { localStorage.setItem("pd2calc_level", e.currentTarget.value) }
    }

    componentDidMount = () => this.props.infamy(localStorage.getItem("pd2calc_infamy"));

    render() {

        const lvls = ['-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
            'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
            'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV+'];

        return (
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
                            <DisplayLVL>
                                <div><span>Name:</span> <Nickname name="nickname" onInput={this.storageValues} defaultValue={localStorage.getItem("pd2calc_nickname")} /></div>
                                <div>Infamy: <Infamy name="infamy" onChange={this.getInfamy} value={localStorage.getItem("pd2calc_infamy")} onInput={this.storageValues} >{lvls.map(lvl => <option key={lvl} >{lvl}</option>)}</Infamy></div>
                                <div>Level: <Lvl name="lvl" onInput={this.storageValues} min="0" max="100" defaultValue={localStorage.getItem("pd2calc_level")} required /></div>
                            </DisplayLVL>
                            <DisplayCircle>
                                <CircularSlider
                                    min={0}
                                    max={99}
                                    width={100}
                                    dataIndex={50}
                                    hideKnob={true}
                                    labelColor="#FFFFFF"
                                    labelBottom={true}
                                    valueFontSize={10}
                                    progressColorFrom="#FFFFFF"
                                    progressColorTo="#CCCCCC"
                                    progressSize={18}
                                    trackColor="#06070C"
                                    trackSize={18}
                                    progressLineCap="flat"
                                    appendToValue="%"
                                    label=" "
                                    onChange={(val) => this.setLvlProgress(val)}
                                />
                            </DisplayCircle>
                        </DisplayInfo>
                        <DisplaySliderTitle>
                            Level progression
                            <img src={TabletArrow} alt='' />
                        </DisplaySliderTitle>
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

export const Infinite = ({ limit }) => {

    return (
        <InfiniteBox>
            <div>
                <span>+</span><InfiniteInput min="0" max={limit} name="additional" />
            </div>
            <p>Additional bags</p>
        </InfiniteBox>
    );
}