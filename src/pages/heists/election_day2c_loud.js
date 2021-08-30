import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Election from "../../images/maps/stealth/electionday.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Election} imgName="Election Day (day 2c)" jc="40"
                    tr11="Default (completion)" tr12="20000"
                    status={['rCB', 'rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['20000']}
                />
            </>
        );
    }
}


export default Heist;