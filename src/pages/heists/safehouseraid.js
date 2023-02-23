import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/safehouse.jpg" imgName="Safe House Raid" jc="10"
                    requirements={[
						["Default (completion)", "42000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;