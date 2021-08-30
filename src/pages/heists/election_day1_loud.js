import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Election from "../../images/maps/stealth/electionday.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Election} imgName="Election Day (day 1)" jc="40"
                    tr11="Default (completion)" tr12="12000"
                    tr21="Second hack" tr22="+12000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['12000', '12000']}
                />
            </>
        );
    }
}


export default Heist;