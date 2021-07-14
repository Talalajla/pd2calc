import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import BigBank from "../../images/maps/stealth/thebigbank.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={BigBank} imgName="The Big Bank" jc="60"
                    default="44000"
                    tr11="Default (completion)" tr12="40000"
                    // tr21="Server hacked" tr22="+8000"
                    // tr31="Timelock finished" tr32="+4000"
                    // tr41="Enabling escape" tr42="+10000"
                    // tr51="Secured 4 bags" tr52="4000"
                    tr21="Each bag secured (min. 4)" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['','4']}
                    limitEnd={['', '28']}
                    values={['40000','1000']}
                />
            </>
        );
    }
}

export default Heist;