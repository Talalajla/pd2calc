import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Dragon from "../../images/maps/stealth/dragon.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Dragon} imgName="Dragon Heist" jc="30"
                    tr11="Default (completion)" tr12="12500"
                    tr21="Keycard used on vault" tr22="+2000"
                    tr31="Entering auction back room" tr32="+3000"
                    tr41="Each bag secured (excl . dragon)" tr42="+1000"
                    status={['rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['', '', '', '0']}
                    limitEnd={['', '', '', '14']}
                    values={['12500', '2000', '3000', '1000']}
                />
            </>
        );
    }
}



export default Heist;