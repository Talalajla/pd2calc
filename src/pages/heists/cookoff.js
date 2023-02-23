import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/cookoff.jpg" imgName="Cook Off" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Each additional bag secured", "8000", "rS", "0", "100"]
                    ]}
                />
            </>
        );
    }
}

export default Heist;