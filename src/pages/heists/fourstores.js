import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Stores from "../../images/maps/stealth/fourstores.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Stores} imgName="Four Stores" jc="20"
                    requirements={
                        ["Default (completion)", "6000", "rCB"]
                    }
                />
            </>
        );
    }
}



export default Heist;