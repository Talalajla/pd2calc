import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/bulucs.jpg" imgName="Buluc's Mansion" jc="30"
                    requirements={[
                        ["Default (completion)", "25000", "rCB"], ["Bomb instead of hack", "2000", "rCB"],
                        ["Helicopter escape", "-2000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;