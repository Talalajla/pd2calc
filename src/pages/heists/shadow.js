import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Shadow from "../../images/maps/stealth/shadowraid.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Shadow} imgName="Shadow Raid" jc="30"
                    tr11="Default (completion)" tr12="4000"
                    tr21="Each bag secured (up to 16)" tr22="+500"
                    tr31="Whole armor secured" tr32="+6000"
                    tr41="Stealth escape" tr42="+4000"
                    status={['rCB', 'rS', 'rCB', 'rCB']}
                    limitStart={['', '3', '','']}
                    limitEnd={['', '16', '','']}
                    values={['4000', '500', '6000', '4000']}
                />
            </>
        );
    }
}



export default Heist;