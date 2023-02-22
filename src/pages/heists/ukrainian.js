import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Ukr from "../../images/maps/stealth/ukrainian.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Ukr} imgName="Ukrainian Job" jc="20"
                    requirements={[
                        ["Default (completion)", "4000", "rCB"], ["Finished in more than 2 minutes", "6000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;