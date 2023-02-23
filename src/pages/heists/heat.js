import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/heatstreet.jpg" imgName="Heat Street" jc="50"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;