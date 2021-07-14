import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 3)" jc="50"
                    tr11="Default (completion)" tr12="16000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['16000']}
                />
            </>
        );
    }
}



export default Heist;