import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/default.jpg" imgName="Safe House Nightmare" jc="10"
                    requirements={[
						["Default (completion)", "10000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;