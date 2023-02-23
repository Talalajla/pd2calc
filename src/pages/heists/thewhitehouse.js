import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/thewhite.jpg" imgName="The White House" jc="30"
                    requirements={[
                        ["Default (completion)", "31000", "rCB"], ["Secret ending", "-14000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;