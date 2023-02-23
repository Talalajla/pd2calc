import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/bulucs.jpg" imgName="Buluc's Mansion" jc="30"
                    requirements={[
                        ["Default (completion)", "20000", "rCB"], ["Find keycard holder", "1000", "rCB"],
                        ["Boat escape", "-1000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;