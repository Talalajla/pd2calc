import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheBomb from "../../images/maps/stealth/thebombdockyard.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheBomb} imgName="The Bomb: Dockyard" jc="60"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Each bag secured", "500", "rS", "4", "14"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;