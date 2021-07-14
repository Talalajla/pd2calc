import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import FWB from "../../images/maps/stealth/fwb.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={FWB} imgName="First World Bank" jc="60"
                    tr11="Default (completion)" tr12="13500"
                    tr21="Each money bag secured" tr22="+1000"
                    tr31="Loud C4 escape" tr32="+4000"
                    status={['rCB', 'rS', 'rCB']}
                    limitStart={['','8', '']}
                    limitEnd={['', '14', '']}
                    values={['13500', '1000', '4000']}
                />
            </>
        );
    }
}



export default Heist;