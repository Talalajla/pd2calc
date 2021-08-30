import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Go from "../../images/maps/stealth/gobank.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Go} imgName="Go Bank" jc="40"
                    tr11="Default (completion)" tr12="12000"
                    tr21="Each bag secured" tr22="+1000"
                    tr31="Vault already opened" tr32="-6000"
                    status={['rCB', 'rS', 'rCB']}
                    limitStart={['', '1', '']}
                    limitEnd={['', '12', '']}
                    values={['12000', '1000', '-7000']}
                />
            </>
        );
    }
}



export default Heist;