import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/watchdogs.jpg" imgName="Watchdogs (day 2)" jc="50"
                    requirements={[
                        ["Default (completion)", "12000", "rCB"], ["Each bag secured (after third)", "1500", "rS", "0", "9"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;