import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import GGC from "../../images/maps/stealth/ggc.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={GGC} imgName="Golden Grin Casino" jc="70"
                    requirements={[
                        ["Default (completion)", "59250", "rCB"], ["Loud entrance with no C4", "-1000", "rCB"],
                        ["Loud entrance with C4", "-15000", "rCB"], ["Stealth beginning, loud path before using gas", "16000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;