import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Dragon from "../../images/maps/stealth/dragon.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Dragon} imgName="Dragon Heist" jc="30"
                    tr11="Default (completion)" tr12="16500"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '1']}
                    limitEnd={['', '15']}
                    values={['16500', '1000']}
                />
            </>
        );
    }
}



export default Heist;