import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/goat.jpg" imgName="Goat simulator (day 1)" jc="30"
                    requirements={[
                        ["Default (completion)", "3000", "rCB"], ["Drill/saw finished", "1500", "rCB"],
                        ["Powerbox hacked", "1500", "rCB"], ["Each debris removed", "1500", "rS", "0", "4"],
                        ["Each goat secured", "1500", "rS", "5", "15"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;