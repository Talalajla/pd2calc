import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 2)" jc="50"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Each painting secured", "500", "rS", "4", "9"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;