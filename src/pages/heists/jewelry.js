import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Jew from "../../images/maps/stealth/jewelry.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Jew} imgName="Jewelry Store" jc="10"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Finished in more than 2 minutes", "4000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;