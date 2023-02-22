import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import ThePrisoner from "../../images/maps/stealth/theukrainianprisoner.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={ThePrisoner} imgName="The Ukrainian Prisoner" jc="30"
                    requirements={[
                        ["Default (completion)", "35500", "rCB"], ["Keycard scenario", "6000", "rCB"], 
                        ["Chinese code scenario", "500", "rCB"], ["Each bag secured", "500", "rS", "0", "11"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;