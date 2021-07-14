import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Election from "../../images/maps/stealth/electionday.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Election} imgName="Election Day (day 1)" jc="40"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Escape after 3 minutes" tr22="+4000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['2000', '4000']}
                />
            </>
        );
    }
}



export default Heist;