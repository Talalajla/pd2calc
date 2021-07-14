import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Ukr from "../../images/maps/stealth/ukrainian.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Ukr} imgName="Ukrainian Job" jc="20"
                    tr11="Default (completion)" tr12="4000"
                    tr21="Finished in more than 2 minutes" tr22="+6000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['4000', '6000']}
                />
            </>
        );
    }
}



export default Heist;