import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/hostile.jpg" imgName="Hostile Takeover" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["Each bag secured (with neo & papers)", "500", "rS", "5", "20"], 
                    ]}
                />
            </>
        );
    }
}

export default Heist;