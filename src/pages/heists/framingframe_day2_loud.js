import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 2)" jc="50"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Each painting secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '9']}
                    values={['2000', '500']}
                />
            </>
        );
    }
}



export default Heist;