import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/firestarter.jpg" imgName="Firestarter (day 1)" jc="50"
                    requirements={[
                        ["Default (completion)", "8000", "rCB"], ["No weapons were destroyed", "2000", "rCB"],
                        ["Secured all bags (van)", "6000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;