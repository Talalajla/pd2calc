import CircularSlider from '@fseehawer/react-circular-slider';
import React from 'react';
import { Camera, Device, Display, DisplayBGTop, DisplayCircle, DisplayClose, DisplayDot, DisplayInfo, DisplayLVL, DisplayMenu, DisplaySliderTitle, DisplayTitle, Holder, HolderBottom, Infamy, Lvl, LVLBox, Nickname } from '../../styles/heist-main';
import TabletArrow from "../../images/arr.png";


class Tablet extends React.Component {

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

export default Tablet;