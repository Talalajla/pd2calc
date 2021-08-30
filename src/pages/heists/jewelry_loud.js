import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Jew from "../../images/maps/stealth/jewelry.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Jew} imgName="Jewelry Store" jc="10"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Finish after 2 minutes passed" tr22="+6000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['2000', '6000']}
                />
            </>
        );
    }
}



export default Heist;