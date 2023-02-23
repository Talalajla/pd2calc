import React from 'react';
import { CrewBox, CrewCheckboxes, CrewLabel, CrewRadio, StickyPaper, StickyTitle, Tape2 } from '../../styles/heist-main';

const Paper = () => (
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

export default Paper;