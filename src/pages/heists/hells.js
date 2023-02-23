import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/hells.jpg" imgName="Hell's Island" jc="30"
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