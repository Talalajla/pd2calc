import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import ThePrisoner from "../../images/maps/stealth/theukrainianprisoner.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={ThePrisoner} imgName="The Ukrainian Prisoner" jc="30"
                    tr11="Default (completion)" tr12="35500"
                    tr21="Keycard scenario" tr22="+6000"
                    tr31="Chinese code scenario" tr32="+500"
                    tr41="Each bag secured" tr42="+500"
                    status={['rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['', '', '', '0']}
                    limitEnd={['', '', '', '11']}
                    values={['35500', '6000', '500', '500']}
                />
            </>
        );
    }
}



export default Heist;