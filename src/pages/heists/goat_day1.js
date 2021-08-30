import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Goat from "../../images/maps/loud/goat.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Goat} imgName="Goat simulator (day 1)" jc="30"
                    tr11="Default (completion)" tr12="3000"
                    tr21="Drill/saw finished" tr22="+1500"
                    tr31="Powerbox hacked" tr32="+1500"
                    tr41="Each debis removed" tr42="+1500"
                    tr51="Each goat secured" tr52="+1500"
                    status={['rCB', 'rCB', 'rCB', 'rS', 'rS']}
                    limitStart={['', '', '', '0', '5']}
                    limitEnd={['', '', '', '4', '15']}
                    values={['3000', '1500', '1500', '1500', '1500']}
                />
            </>
        );
    }
}



export default Heist;