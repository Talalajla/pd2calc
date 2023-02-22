import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Biker from "../../images/maps/loud/bikers.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Biker} imgName="The Biker Heist (day 2)" jc="30"
                    requirements={[
                        ["Default (completion)", "10000", "rCB"], ["Each bag secured", "500", "rS", "1", "9"]
                    ]}
                />
            </>
        );
    }
}

export default Heist;