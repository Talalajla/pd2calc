import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheDiamond from "../../images/maps/stealth/thediamond.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheDiamond} imgName="The Diamond" jc="50"
                    tr11="Default (completion)" tr12="24000"
                    tr21="Diamond picked without gas" tr22="+4000"
                    tr31="Each bag secured" tr32="+1000"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['', '', '0']}
                    limitEnd={['', '', '15']}
                    values={['24000', '4000', '1000']}
                />
            </>
        );
    }
}



export default Heist;