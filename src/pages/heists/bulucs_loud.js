import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Bulucs from "../../images/maps/stealth/bulucs.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Bulucs} imgName="Buluc's Mansion" jc="30"
                    tr11="Default (completion)" tr12="25000"
                    tr21="Bomb instead of hack " tr22="+2000"
                    tr31="Helicopter escape" tr32="-2000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['25000', '2000', '-2000']}
                />
            </>
        );
    }
}



export default Heist;