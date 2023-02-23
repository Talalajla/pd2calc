import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/goat.jpg" imgName="Goat simulator (day 2)" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["Each goat secured", "500", "rS", "5", "15"],
                        ["Each cage built", "500", "rS", "1", "15"], ["Each cage picked up by plane", "500", "rS", "1", "15"]
                    ]}
                    ovkGoats
                />
            </>
        );
    }
}



export default Heist;