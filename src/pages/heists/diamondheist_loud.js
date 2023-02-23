import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/diamondheist.jpg" imgName="Diamond Heist" jc="30"
                    requirements={[
                        ["Default (completion)", "18000", "rCB"], ["Each bag of diamonds secured", "400", "rS", "4", "8"]
                    ]}
                    redDiamond
                />
            </>
        );
    }
}



export default Heist;