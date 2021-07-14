import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Feds from "../../images/maps/stealth/breakinfeds.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Feds} imgName="Breakin' Feds" jc="30"
                    tr11="Default (completion)" tr12="6000"
                    tr21="Each lure of Garett" tr22="+4000"
                    tr31="Each bag secured (with loot)" tr32="+1000"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '1', '1']}
                    limitEnd={['', '4', '8']}
                    values={['6000', '4000', '1000']}
                />
            </>
        );
    }
}



export default Heist;