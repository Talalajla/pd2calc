import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/birthsky.jpg" imgName="Birth of Sky" jc="30"
                    requirements={[
                        ["Default (completion)", "31100", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;