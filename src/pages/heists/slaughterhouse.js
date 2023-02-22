import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Pig from "../../images/maps/loud/slaughterhouse.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Pig} imgName="Slaughterhouse" jc="30"
                    requirements={[
						["Default (completion)", "32000", "rCB"]
					]}
                    pigs
                />
            </>
        );
    }
}



export default Heist;