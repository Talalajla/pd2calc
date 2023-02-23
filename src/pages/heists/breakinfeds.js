import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/stealth/breakinfeds.jpg" imgName="Breakin' Feds" jc="30"
                    requirements={[
                        ["Default (completion)", "6000", "rCB"], ["Each lure of Garett", "4000", "rS", "1", "4"],
                        ["Each bag secured (with loot)", "1000", "rS", "1", "8"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;