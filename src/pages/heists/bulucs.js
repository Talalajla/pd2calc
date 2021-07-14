import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Bulucs from "../../images/maps/stealth/bulucs.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Bulucs} imgName="Buluc's Mansion" jc="30"
                    tr11="Default (completion)" tr12="20000"
                    tr21="Find keycard holder" tr22="+1000"
                    tr31="Boat escape" tr32="-1000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['20000', '1000', '-1000']}
                />
            </>
        );
    }
}



export default Heist;