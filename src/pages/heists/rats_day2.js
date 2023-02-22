import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 2)" jc="40"
                    requirements={[
						["Default (completion)", "6000", "rCB"], ["Intel was burned", "-2000", "rCB"],
                        ["All meth bags secured that were given", "4000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;