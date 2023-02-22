import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Diamond from "../../images/maps/stealth/diamondheist.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Diamond} imgName="Diamond Heist" jc="30"
                    requirements={[
                        ["Default (completion)", "9000", "rCB"], ["Each bag of diamonds secured", "400", "rS", "4", "8"]
                    ]}
                    redDiamond
                />
            </>
        );
    }
}



export default Heist;