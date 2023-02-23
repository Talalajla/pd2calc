import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/theukrainianprisoner.jpg" imgName="The Ukrainian Prisoner" jc="30"
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