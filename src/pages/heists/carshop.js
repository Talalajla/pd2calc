import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Car from "../../images/maps/stealth/carshop.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Car} imgName="Carshop" jc="30"
                    requirements={[
                        ["Default (completion)", "9000", "rCB"], ["Each car secured", "1000", "rS", "1", "4"]
                    ]}

                />
            </>
        );
    }
}



export default Heist;