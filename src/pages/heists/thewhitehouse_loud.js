import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheWhite from "../../images/maps/stealth/thewhite.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheWhite} imgName="The White House" jc="30"
                    tr11="Default (completion)" tr12="40000"
                    tr21="Secret ending" tr22="-15000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['40000', '-15000']}
                />
            </>
        );
    }
}



export default Heist;