import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 2)" jc="50"
                    tr11="Default (completion)" tr12="10000"
                    tr21="Escape within 3mins" tr22="-4000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['10000', '-4000',]}
                />
            </>
        );
    }
}



export default Heist;