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
                    tr21="Each 2 x C4 charges picked" tr22="+2000"
                    tr31="Each 3 x C4 charges set" tr32="+2000"
                    tr41="Each money bag secured" tr42="+1500"
                    status={['rCB', 'rS', 'rS', 'rS']}
                    limitStart={['', '2', '1', '3']}
                    limitEnd={['', '5', '3', '18']}
                    values={['9000', '2000', '2000', '1500']}
                />
            </>
        );
    }
}



export default Heist;