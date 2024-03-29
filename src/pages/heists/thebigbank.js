import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/thebigbank.jpg" imgName="The Big Bank" jc="60"
                    requirements={[
                        ["Default (completion)", "30000", "rCB"], ["Bus stop/C4 escape", "10000", "rCB"], 
                        ["Pack any loot before the alarm goes off", "10000", "rCB"], ["Each bag secured", "1000", "rS", "4", "28"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}

export default Heist;