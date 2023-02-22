import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hox from "../../images/maps/loud/hoxtonbreakout.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hox} imgName="Hoxton Breakout (day 2)" jc="60"
                    requirements={[
                        ["Default (completion)", "34000", "rCB"], ["No keycard used", "4000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;