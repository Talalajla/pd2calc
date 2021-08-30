import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import WD from "../../images/maps/loud/watchdogs.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={WD} imgName="Watchdogs (day 1)" jc="50"
                    tr11="Default (completion)" tr12="12000"
                    tr21="All bags secured" tr22="+2000"
                    tr31="Chopper escape" tr32="+2000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['12000', '2000', '2000']}
                />
            </>
        );
    }
}



export default Heist;