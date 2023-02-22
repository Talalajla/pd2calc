import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hells from "../../images/maps/loud/hells.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hells} imgName="Hell's Island" jc="30"
                    requirements={[
                        ["Default (completion)", "17000", "rCB"]
                    ]}
                    ovkHells
                />
            </>
        );
    }
}



export default Heist;