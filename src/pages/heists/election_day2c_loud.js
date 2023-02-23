import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/electionday.jpg" imgName="Election Day (day 2c)" jc="40"
                    requirements={[
                        ["Default (completion)", "20000", "rCB"]
                    ]}
                />
            </>
        );
    }
}


export default Heist;