import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/framingframe.jpg" imgName="Framing Frame (day 2)" jc="50"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Each money bag secured", "500", "rS", "4", "9"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;