import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/stealth/shadowraid.jpg" imgName="Shadow Raid" jc="30"
                    requirements={[
						["Default (completion)", "4000", "rCB"], ["Each bag secured (up to 16)", "500", "rS", "3", "16"],
                        ["Whole armor secured", "6000", "rCB"], ["Stealth escape", "4000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;