import React from 'react';
import { JC, PolaroidFrame, PolaroidPhoto, PolaroidTitle } from '../../styles/heist-main';

const Polaroid = (props) => {

    return (
        <PolaroidFrame>
            <JC><span>JC</span> <span>{props.jc}</span></JC>
            <PolaroidPhoto src={props.src} />
            <PolaroidTitle>{props.name}</PolaroidTitle>
        </PolaroidFrame>
    );
}

export default Polaroid;