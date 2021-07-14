import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import NC from "../../images/maps/stealth/nightclub.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={NC} imgName="Nightclub" jc="30"
                    tr11="Default (completion)" tr12="10000"
                    status={['rCB', 'rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['10000']}
                />
            </>
        );
    }
}



export default Heist;