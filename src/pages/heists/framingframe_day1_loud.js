import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Framing from "../../images/maps/stealth/framingframe.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Framing} imgName="Framing Frame (day 1)" jc="50"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Security hack completed" tr22="+6000"
                    tr31="Each painting secured" tr32="+500"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['', '', '4']}
                    limitEnd={['', '', '9']}
                    values={['2000', '6000', '500']}
                />
            </>
        );
    }
}



export default Heist;