import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Counter from "../../images/maps/stealth/counterfeit.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Counter} imgName="Counterfeit" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["C4 in basement", "2000", "rCB"]
                    ]}
                />
            </>
        );
    } 
}

export default Heist;