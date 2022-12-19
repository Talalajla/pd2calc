import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hotline from "../../images/maps/loud/hotlinemiami.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hotline} imgName="Hotline Miami (day 2)" jc="60"
                    tr11="Default (completion)" tr12="14000"
                    tr21="C4 defused" tr22="+2000"
                    tr31="Each secured bag (max 10 counts)" tr32="+1000"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['', '', '0']}
                    limitEnd={['', '', '16']}
                    values={['14000', '2000', '1000']}
                />
            </>
        );
    }
}



export default Heist;