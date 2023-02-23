import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/ggc.jpg" imgName="Golden Grin Casino" jc="70"
                    requirements={[
                        ["Default (completion)", "39250", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;