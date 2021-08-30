import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Election from "../../images/maps/stealth/electionday.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Election} imgName="Election Day (day 2)" jc="40"
                    tr11="Default (completion)" tr12="18000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['18000']}
                />
            </>
        );
    }
}


export default Heist;