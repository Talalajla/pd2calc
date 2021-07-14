import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Murky from "../../images/maps/stealth/murky.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Murky} imgName="Murky Station" jc="30"
                    default="2000"
                    tr11="Default (completion)" tr12="8000"
                    tr21="Each train wagon opened with loot" tr22="+2000"
                    tr31="Each type of equipment picked up" tr32="+1000"
                    tr41="Each weapon bag secured" tr42="+1000"
                    status={['rCB', 'rS', 'rS', 'rS']}
                    limitStart={['','2','2','0']}
                    limitEnd={['', '4','4','14']}
                    values={['8000', '2000', '1000', '1000']}
                />
            </>
        );
    }
}



export default Heist;