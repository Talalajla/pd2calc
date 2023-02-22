import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 3)" jc="50"
                    requirements= {[
                        ["Default (completion)", "16000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;