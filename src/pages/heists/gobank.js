import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Go from "../../images/maps/stealth/gobank.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Go} imgName="Go Bank" jc="40"
                    tr11="Default (completion)" tr12="10000"
                    tr21="Each bag secured" tr22="+1000"
                    tr31="Blackmailer appears" tr32="-1000"
                    tr41="Vault already opened" tr42="-6000"
                    status={['rCB', 'rS', 'rCB', 'rCB']}
                    limitStart={['', '1', '', '']}
                    limitEnd={['', '12', '', '']}
                    values={['10000', '1000', '-1000', '-6000']}
                />
            </>
        );
    }
}



export default Heist;