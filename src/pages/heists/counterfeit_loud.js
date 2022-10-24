import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Counter from "../../images/maps/stealth/counterfeit.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Counter} imgName="Counterfeit" jc="30"
                    default="24000" 
                    tr11="Default (4 bags)" tr12="21000" 
                    tr21="C4 in basement" tr22="+2000"
                    tr31="Printed bags" tr32="+4000"
                    tr41="Secured bags into heli" tr42="+1000"
                    status={['rCB', 'rCB', 'rS', 'rS']}
                    limitStart={['', '', '0', '0']}
                    limitEnd={['', '', '150', '150']}
                    values={['21000', '2000', '4000', '1000']}
                />
            </>
        );
    } 
}

export default Heist;