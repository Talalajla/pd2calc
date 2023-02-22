import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheDiamond from "../../images/maps/stealth/thediamond.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheDiamond} imgName="The Diamond" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Diamond picked without gas", "4000", "rCB"],
                        ["Each bag secured", "1000", "rS", "0", "15"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;