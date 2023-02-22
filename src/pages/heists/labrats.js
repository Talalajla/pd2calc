import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Lab from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Lab} imgName="Lab Rats" jc="30"
                    requirements={[
                        ["Default (completion)", "5000", "rCB"], ["Full meth cycles done (and secured)", "15000", "rS", "1", "252"],
                        ["Money & Jewelry safe event done", "30000", "rCB"], ["Paintings & Coke safe event done", "22500", "rCB"], 
                        ["Random items safe event done", "15000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;