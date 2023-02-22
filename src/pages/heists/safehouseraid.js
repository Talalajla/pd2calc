import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Safe from "../../images/maps/loud/safehouse.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Safe} imgName="Safe House Raid" jc="10"
                    requirements={[
						["Default (completion)", "42000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;