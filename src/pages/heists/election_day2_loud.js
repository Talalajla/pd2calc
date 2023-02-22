import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Election from "../../images/maps/stealth/electionday.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Election} imgName="Election Day (day 2)" jc="40"
                    requirements={[
                        ["Default (completion)", "18000", "rCB"]
                    ]}
                />
            </>
        );
    }
}


export default Heist;