import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import FWB from "../../images/maps/stealth/fwb.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={FWB} imgName="First World Bank" jc="60"
                    requirements={[
                        ["Default (completion)", "13500", "rCB"], ["Each money bag secured", "1000", "rS", "8", "14"],
                        ["Loud C4 escape", "4000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;