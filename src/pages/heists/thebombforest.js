import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/transportforest.jpg" imgName="The Bomb: Forest" jc="60"
                    requirements={[
                        ["Default (completion)", "32000", "rCB"], ["Each bag secured", "1500", "rS", "4", "8"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;