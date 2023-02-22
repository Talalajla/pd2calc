import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 1)" jc="50"
                    requirements={[
                        ["Default (completion)", "8000", "rCB"], ["No weapons were destroyed", "2000", "rCB"],
                        ["Secured all bags (van)", "6000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;