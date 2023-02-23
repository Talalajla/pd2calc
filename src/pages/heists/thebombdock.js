import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/thebombdockyard.jpg" imgName="The Bomb: Dockyard" jc="60"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Each bag secured", "500", "rS", "4", "14"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;