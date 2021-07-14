import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Stores from "../../images/maps/stealth/fourstores.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Stores} imgName="Four Stores" jc="20"
                    tr11="Default (completion)" tr12="6000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['6000']}
                />
            </>
        );
    }
}



export default Heist;