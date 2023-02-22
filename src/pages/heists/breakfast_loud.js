import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/breakfast.jpg" imgName="Breakfast in Tijuana" jc="30"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;