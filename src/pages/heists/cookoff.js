import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Cook from "../../images/maps/loud/cookoff.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Cook} imgName="Cook Off" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Each additional bag secured", "8000", "rS", "0", "100"]
                    ]}
                />
            </>
        );
    }
}

export default Heist;