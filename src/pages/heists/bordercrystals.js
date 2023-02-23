import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/bordercrystals.jpg" imgName="Border Crystals" jc="30"
                    requirements={[
                        ["Default (completion)", "1000", "rCB"], ["Each bag secured", "6000", "rS", "3", "50"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;