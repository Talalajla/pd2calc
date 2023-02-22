import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import RDH from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={RDH} imgName="Reservoir Dogs Heist (day 1)" jc="60"
                    requirements={[
						["Default (completion)", "20000", "rCB"], ["Each bag secured", "500", "rS", "1", "25"]
					]}
                />
            </>
        );
    }
}



export default Heist;