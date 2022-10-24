import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import ThePrisoner from "../../images/maps/stealth/theukrainianprisoner.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={ThePrisoner} imgName="The Ukrainian Prisoner" jc="30"
                    tr11="Default (completion)" tr12="39000"
                    tr21="Keycard scenario instead of code" tr22="-1000"
                    tr31="Used pad to pick up container" tr32="+2000"
                    tr41="Each bag secured" tr42="+500"
                    status={['rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['', '', '', '0']}
                    limitEnd={['', '', '', '11']}
                    values={['39000', '-1000', '2000', '500']}
                />
            </>
        );
    }
}



export default Heist;