import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/bigoil.jpg" imgName="Big Oil (day 2)" jc="50"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;