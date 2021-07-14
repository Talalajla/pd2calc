import { Component } from "react";
import { ReqLabel, ReqCheckBox, ReqCheckStyle, ReqNumber, ReqNumberStyle, ReqSelect } from "../styles/heist-main";


export class RCB extends Component {

    render() {
        const name = `req${this.props.rNum}`;
        // console.log(name);
        return(
            <ReqLabel>
                <ReqCheckBox disabled={this.props.default} checked={this.props.default} name={name}/>
                <ReqCheckStyle>X</ReqCheckStyle>
            </ReqLabel>
        );
    }
}

export class RIN extends Component {

    render() {
        return(
            <ReqLabel>
                <ReqNumber />
                <ReqNumberStyle />
            </ReqLabel>
        );
    }
} 

export class RS extends Component {

    render() {
        const name = `req${this.props.rNum}`;
        // console.log(this.props.limit)
        return(
            <ReqLabel>
                <ReqSelect name={name}>
                    {setArray(this.props.start, this.props.limit).map((item) => <option key={item}>{item}</option> )}
                </ReqSelect>
            </ReqLabel>
        );
    }
}

export const setArray = (start, limit) => {
    const array = [];

    for(let i=parseInt(start); i<=parseInt(limit); i++)
        array.push(i)
    return array;
}