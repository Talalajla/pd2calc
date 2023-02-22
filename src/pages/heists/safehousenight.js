import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import SHNight from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={SHNight} imgName="Safe House Nightmare" jc="10"
                    requirements={[
						["Default (completion)", "10000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;