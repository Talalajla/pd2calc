import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Fire} imgName="Firestarter (day 1)" jc="50"
                    tr11="Default (completion)" tr12="8000"
                    tr21="No weapons were destroyed" tr22="+2000"
                    tr31="Secured all bags (van)" tr32="+6000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['8000', '2000', '6000']}
                />
            </>
        );
    }
}



export default Heist;