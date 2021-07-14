import { Component } from "react";
import { ReqLabel, ReqNumber, ReqNumberStyle } from "../styles/heist-main";


class RIN extends Component {

    render() {
        return(
            <ReqLabel>
                <ReqNumber />
                <ReqNumberStyle />
            </ReqLabel>
        );
    }
}

export default RIN;