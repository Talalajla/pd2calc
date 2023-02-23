import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/hoxtonbreakout.jpg" imgName="Hoxton Breakout (day 1)" jc="60"
                    requirements={[
                        ["Default (completion)", "18400", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;