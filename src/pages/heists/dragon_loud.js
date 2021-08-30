import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Dragon from "../../images/maps/stealth/dragon.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Dragon} imgName="Dragon Heist" jc="30"
                    tr11="Default (completion)" tr12="16000"
                    tr21="Each bag secured (excl . dragon)" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '14']}
                    values={['16000', '1000']}
                />
            </>
        );
    }
}



export default Heist;