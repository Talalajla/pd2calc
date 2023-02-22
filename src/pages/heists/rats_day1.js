import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 1)" jc="40"
                    requirements={[
						["Default (completion)", "30000", "rCB"], ["Escape with less than 3 bags cooked", "-18000", "rCB"],
                        ["Escape with 7 bags cooked", "40000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;