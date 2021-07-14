import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Scarface from "../../images/maps/stealth/scarface.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Scarface} imgName="Scarface Mansion" jc="30"
                    tr11="Default (completion)" tr12="21000"
                    tr21="Each bag secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['','2']}
                    limitEnd={['', '18']}
                    values={['21000', '500']}
                />
            </>
        );
    }
}



export default Heist;