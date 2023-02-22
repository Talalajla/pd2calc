import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheWhite from "../../images/maps/stealth/thewhite.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheWhite} imgName="The White House" jc="30"
                    requirements={[
                        ["Default (completion)", "31000", "rCB"], ["Secret ending", "-14000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;