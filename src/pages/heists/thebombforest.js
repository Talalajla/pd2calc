import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheBomb from "../../images/maps/loud/transportforest.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheBomb} imgName="The Bomb: Forest" jc="60"
                    requirements={[
                        ["Default (completion)", "32000", "rCB"], ["Each bag secured", "1500", "rS", "4", "8"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;