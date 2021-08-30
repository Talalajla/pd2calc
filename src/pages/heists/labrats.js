import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Lab from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Lab} imgName="Lab Rats" jc="30"
                    tr11="Default (completion)" tr12="5000"
                    tr21="Full meth cycles done (and secured)" tr22="+15000"
                    tr31="Money &amp; Jewelry safe event done" tr32="+30000"
                    tr41="Paintings &amp; Coke safe event done" tr42="+22500"
                    tr51="Random items safe event done" tr52="+15000" 
                    status={['rCB', 'rS', 'rCB', 'rCB', 'rCB']}
                    limitStart={['', '1', '', '', '']}
                    limitEnd={['', '252', '', '', '']}
                    values={['5000', '15000', '30000', '22500', '15000']}
                />
            </>
        );
    }
}



export default Heist;