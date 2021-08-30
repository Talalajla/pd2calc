import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import GGC from "../../images/maps/stealth/ggc.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={GGC} imgName="Golden Grin Casino" jc="70"
                    tr11="Default (completion)" tr12="59250"
                    tr21="Loud entrance with no C4" tr22="-1000"
                    tr31="Loud entrance with C4" tr32="-15000"
                    tr41="Stealth beginning, loud path before using gas" tr42="+16000"
                    status={['rCB', 'rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '', '']}
                    limitEnd={['', '', '', '']}
                    values={['59250', '-1000', '-15000', '16000']}
                />
            </>
        );
    }
}



export default Heist;