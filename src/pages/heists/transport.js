import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/transport.jpg" imgName="Transport" jc="20"
                    requirements={[
                        ["Default (completion)", "12000", "rCB"], ["Each bag secured", "1000", "rS", "4", "16"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;