import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hox from "../../images/maps/loud/hoxtonbreakout.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hox} imgName="Hoxton Breakout (day 2)" jc="60"
                    tr11="Default (completion)" tr12="34000"
                    tr21="No keycard used" tr22="+4000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['34000', '4000']}
                />
            </>
        );
    }
}



export default Heist;