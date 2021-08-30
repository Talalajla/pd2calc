import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheAlesso from "../../images/maps/stealth/thealesso.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheAlesso} imgName="The Alesso Heist" jc="60"
                    tr11="Default (completion)" tr12="9000"
                    tr21="Security hack finished" tr22="+10000"
                    tr31="Each 2 x C4 charges picked" tr32="+1000"
                    tr41="Each 3 x C4 charges set" tr42="+2000"
                    tr51="Each money bag secured" tr52="+1200"
                    status={['rCB', 'rCB', 'rS', 'rS', 'rS']}
                    limitStart={['', '', '2', '1', '3']}
                    limitEnd={['', '', '5', '3', '18']}
                    values={['9000', '10000', '1000', '2000', '1200']}
                />
            </>
        );
    }
}



export default Heist;