import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/watchdogs.jpg" imgName="Watchdogs (day 1)" jc="50"
                    requirements={[
                        ["Default (completion)", "12000", "rCB"], ["All bags secured", "2000", "rCB"],
                        ["Chopper escape", "2000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;