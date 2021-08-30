import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 3)" jc="50"
                    tr11="Default (completion)" tr12="24000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['24000']}
                />
            </>
        );
    }
}



export default Heist;