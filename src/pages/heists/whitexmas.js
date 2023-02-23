import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/whitexmas.jpg" imgName="White Xmas" jc="40"
                    requirements={[
                        ["Default (completion)", "8000", "rCB"], ["Each bag secured", "2000", "rS", "0", "500"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;