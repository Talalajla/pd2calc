import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Black from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Black} imgName="Black Cat" jc="30"
                    tr11="Default (completion)" tr12="34000"
                    tr21="Not default entrance" tr22="-1500"
                    tr31="Enter the CASINO before SPA (bug)" tr32="-500"
                    tr41="Vault opened with C4 (just before code and hand were used)" tr42="+14000"
                    tr51="Vault opened with C4 (from start)" tr52="-4000"
                    tr61="Vault opened with C4 (from start + entered casino)" tr62="+1000"
                    tr71="Each money bag secured (vault)" tr72="+500"
                    tr81="Each optional bag secured" tr82="+500"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rS', 'rS']}
                    limitStart={['', '', '', '', '', '', '4', '0']}
                    limitEnd={['', '', '', '', '', '', '16', '7']}
                    values={['34000', '-1500', '-500', '14000', '-4000', '1000', '500', '500']}
                    isLoud
                />
            </>
        );
    }
}



export default Heist;