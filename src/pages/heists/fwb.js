import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/fwb.jpg" imgName="First World Bank" jc="60"
                    requirements={[
                        ["Default (completion)", "13500", "rCB"], ["Each money bag secured", "1000", "rS", "8", "14"],
                        ["Loud C4 escape", "4000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;