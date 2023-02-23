import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/electionday.jpg" imgName="Election Day (day 2)" jc="40"
                    requirements={[
                        ["Default (completion)", "8000", "rCB"], ["Escape after 3 minutes", "6000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;