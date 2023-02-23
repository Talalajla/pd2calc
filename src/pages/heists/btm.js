import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/beneathmountain.jpg" imgName="Beneath the Mountain" jc="30"
                    requirements={[
                        ["Default (completion)", "19000", "rCB"], ["Each vault with loot opened", "1000", "rS", "2", "4"],
                        ["Each bag secured", "700", "2", "10"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;