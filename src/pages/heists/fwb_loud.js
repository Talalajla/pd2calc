import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/fwb.jpg" imgName="First World Bank" jc="60"
                    requirements={[
                        ["Default (completion)", "20000", "rCB"], ["Each money bag secured", "1000", "rS", "8", "14"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;