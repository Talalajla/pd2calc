import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Black from "../../images/maps/stealth/blackcat.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Black} imgName="Black Cat" jc="30"
                    tr11="Default (completion)" tr12="31000"
                    tr21="Not default entrance" tr22="-1500"
                    tr31="Enter the CASINO before SPA (bug)" tr32="-4000"
                    tr41="Skipped planting bug" tr42="-4000"
                    tr51="Each money bag secured (vault)" tr52="+500"
                    tr61="Each optional bag secured" tr62="+500"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rS', 'rS']}
                    limitStart={['', '', '', '', '4', '0']}
                    limitEnd={['', '', '', '', '16', '7']}
                    values={['31000', '-1500', '-4000', '-4000', '500', '500']}
                />
            </>
        );
    }
}



export default Heist;