import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/thewhite.jpg" imgName="The White House" jc="30"
                    requirements={[
                        ["Default (completion)", "40000", "rCB"], ["Secret ending", "-15000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;