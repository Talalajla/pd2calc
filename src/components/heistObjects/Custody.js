import React from 'react';
import { CrewCheckboxes, JailBox, JailLabel, JailNote, JailRadio, JailTitle } from '../../styles/heist-main';

const Custody = () => (
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

export default Custody;