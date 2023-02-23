import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/firestarter.jpg" imgName="Firestarter (day 3)" jc="50"
                    requirements= {[
                        ["Default (completion)", "16000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;