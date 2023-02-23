import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/meltdown.jpg" imgName="Meltdown" jc="30"
                    requirements={[
                        ["Default (completion)", "20000", "rCB"], ["Each bonus bag secured", "1500", "rS", "0", "8"]
                    ]}
                    fLootBonus
                />
            </>
        );
    }
}

export default Heist;