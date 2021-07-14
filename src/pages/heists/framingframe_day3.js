import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 3)" jc="50"
                    tr11="Default (completion)" tr12="11500"
                    tr21="Each gold bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '8']}
                    values={['11500', '1000']}
                />
            </>
        );
    }
}



export default Heist;