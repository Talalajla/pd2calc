import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/counterfeit.jpg" imgName="Counterfeit" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["C4 in basement", "2000", "rCB"]
                    ]}
                />
            </>
        );
    } 
}

export default Heist;