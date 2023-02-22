import React from "react";
import { ReqLabel, ReqCheckBox, ReqCheckStyle, ReqSelect } from "../styles/heist-main";


export const RCB = props => (
    <ReqLabel>
        <ReqCheckBox disabled={props.default || props.readonly} checked={props.default || props.readonly}/>
        <ReqCheckStyle>X</ReqCheckStyle>
    </ReqLabel>
);


export const RS = props => (
    <ReqLabel>
        <ReqSelect>
            {setArray(props.start, props.limit).map((item) => <option key={item}>{item}</option> )}
        </ReqSelect>
    </ReqLabel>
);

export const setArray = (start, limit) => {
    const array = [];

    for(let i=parseInt(start); i<=parseInt(limit); i++)
        array.push(i)
    return array;
}