import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 2)" jc="50"
                    tr11="Default (completion)" tr12="6000"
                    tr21="Escape after 3 minutes" tr22="+6000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['6000', '6000']}
                />
            </>
        );
    }
}



export default Heist;