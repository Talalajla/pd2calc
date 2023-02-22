import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Heat from "../../images/maps/loud/heatstreet.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Heat} imgName="Heat Street" jc="50"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;