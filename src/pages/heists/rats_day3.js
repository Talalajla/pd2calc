import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 3)" jc="40"
                    requirements={[
						["Default (completion)", "2000", "rCB"], ["All money bags secured", "14000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;