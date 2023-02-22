import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Transit from "../../images/maps/stealth/transit.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Transit} imgName="Lost in Transit" jc="30"
                    requirements={[
                        ["Default (completion)", "25000", "rCB"], ["Each bag secured", "250", "rS", "6", "35"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;