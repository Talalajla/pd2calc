import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/stealth/carshop.jpg" imgName="Carshop" jc="30"
                    requirements={[
                        ["Default (completion)", "9000", "rCB"], ["Each car secured", "1000", "rS", "1", "4"]
                    ]}

                />
            </>
        );
    }
}



export default Heist;