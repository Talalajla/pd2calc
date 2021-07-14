import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Yacht from "../../images/maps/stealth/theyacht.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Yacht} imgName="The Yacht Heist" jc="30"
                    tr11="Default (completion)" tr12="12000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['12000']}
                />
            </>
        );
    }
}



export default Heist;