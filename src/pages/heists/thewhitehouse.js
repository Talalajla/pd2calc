import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheWhite from "../../images/maps/stealth/thewhite.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheWhite} imgName="The White House" jc="30"
                    tr11="Default (completion)" tr12="31000"
                    tr21="Secret ending" tr22="-14000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['31000', '-14000']}
                />
            </>
        );
    }
}



export default Heist;