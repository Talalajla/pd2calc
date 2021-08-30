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
                    infinite scaling="5000" limit="1200"
                    status={['rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '']}
                    values={['21000', '2000']}
                />
            </>
        );
    } 
}

export default Heist;