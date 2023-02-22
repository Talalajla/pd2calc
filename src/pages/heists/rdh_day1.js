import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import RDH from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={RDH} imgName="Reservoir Dogs Heist (day 2)" jc="60"
                    requirements={[
						["Default (completion)", "8000", "rCB"], ["Each garage opened with saw", "1500", "rS", "1", "5"],
                        ["Each bag secured", "1000", "rS", "1", "10"]
					]}
                />
            </>
        );
    }
}



export default Heist;