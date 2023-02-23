import React from 'react';
import { BonusNote, BoostCheckbox, BoostCheckboxStyle, BoostLabel, BoostLabels, BoostSelect, BoostTitle, HeatInput, HeatLabel, HeatTitle, StealthOption, StealthSelect, StealthTitle } from '../../styles/heist-main';
import { setArray } from '../reqCheckbox';

const Bonus = () => {

    const values = ['0', '3', '5', '7', '8', '10', '15', '18', '20', '23', '25'];

    return (
        <BonusNote>
            <p>Bonuses</p>
            <BoostTitle><span>TB(s) &amp;</span><span>Perkdeck</span></BoostTitle>
            <BoostLabels>
                <BoostLabel>
                    TeamBoosts: <BoostSelect defaultValue="2"> {setArray(0, 8).map((item) => <option key={item} value={item}>{item}</option>)}</BoostSelect>
                </BoostLabel>
                <BoostLabel>
                    Perk bonus:
                    <BoostCheckbox defaultChecked />
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

export default Bonus;