import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 3)" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;