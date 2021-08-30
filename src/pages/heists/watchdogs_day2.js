import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import WD from "../../images/maps/loud/watchdogs.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={WD} imgName="Watchdogs (day 2)" jc="50"
                    tr11="Default (completion)" tr12="12000"
                    tr21="Each bag secured (after third one)" tr22="+1500"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '9']}
                    values={['12000', '1500']}
                />
            </>
        );
    }
}



export default Heist;