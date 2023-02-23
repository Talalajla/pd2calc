import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/slaughterhouse.jpg" imgName="Slaughterhouse" jc="30"
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