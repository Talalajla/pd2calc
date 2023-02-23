import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/thediamond.jpg" imgName="The Diamond" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Diamond picked without gas", "4000", "rCB"],
                        ["Each bag secured", "1000", "rS", "0", "15"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;