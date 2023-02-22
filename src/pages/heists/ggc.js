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
                        ["Default (completion)", "39250", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;