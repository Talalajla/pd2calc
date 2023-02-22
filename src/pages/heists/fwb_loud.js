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
                        ["Default (completion)", "20000", "rCB"], ["Each money bag secured", "1000", "rS", "8", "14"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;