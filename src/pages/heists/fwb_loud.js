import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import FWB from "../../images/maps/stealth/fwb.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={FWB} imgName="First World Bank" jc="60"
                    tr11="Default (completion)" tr12="20000"
                    tr21="Each money bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['','8']}
                    limitEnd={['', '14']}
                    values={['20000', '1000']}
                />
            </>
        );
    }
}



export default Heist;