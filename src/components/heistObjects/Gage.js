import React from 'react';
import { GageLabel, GageNote, GageSelect, StickyTitle } from '../../styles/heist-main';
import { setArray } from '../reqCheckbox';

const Gage = props => (
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

export default Gage;