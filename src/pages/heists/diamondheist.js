import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Diamond from "../../images/maps/stealth/diamondheist.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Diamond} imgName="Diamond Heist" jc="30"
                    tr11="Default (completion)" tr12="9000"
                    tr21="Each bag of diamond secured" tr22="+400"
                    status={['rCB', 'rS', 'rCB']}
                    limitStart={['','4', '']}
                    limitEnd={['', '8', '']}
                    values={['9000', '400', '2000']}
                    redDiamond='true'
                />
            </>
        );
    }
}



export default Heist;