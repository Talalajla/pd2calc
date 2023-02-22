import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Train from "../../images/maps/stealth/train.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Train} imgName="Transport: Train Heist" jc="70"
                    requirements={[
                        ["Default (completion)", "11000", "rCB"], ["Each vault opened", "3000", "rS", "2", "3"],
                         ["Each ammo bag secured", "800", "rS", "4", "20"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;