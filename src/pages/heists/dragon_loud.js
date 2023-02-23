import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/dragon.jpg" imgName="Dragon Heist" jc="30"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Each bag secured (excl . dragon)", "1000", "rS", "0", "14"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;