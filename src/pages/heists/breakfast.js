import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Breakfast from "../../images/maps/stealth/breakfast.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Breakfast} imgName="Breakfast in Tijuana" jc="30"
                    tr11="Default (completion)" tr12="22000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['22000']}
                />
            </>
        );
    }
}



export default Heist;