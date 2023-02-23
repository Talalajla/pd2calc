import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/breakfast.jpg" imgName="Breakfast in Tijuana" jc="30"
                    requirements={[
                        ["Default (completion)", "22000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;