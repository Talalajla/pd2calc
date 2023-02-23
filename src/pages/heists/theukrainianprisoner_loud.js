import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/theukrainianprisoner.jpg" imgName="The Ukrainian Prisoner" jc="30"
                    requirements={[
                        ["Default (completion)", "39000", "rCB"], ["Keycard scenario instead of code", "-1000", "rCB"],
                        ["Used pad to pick up container", "2000", "rCB"], ["Each bag secured", "500", "rS", "0", "11"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;