import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import San from "../../images/maps/stealth/sanmartin.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={San} imgName="San Martín Bank" jc="30"
                    tr11="Default (completion)" tr12="32000"
                    tr21="Stealth beginning (loud after picking up keychain and drilling instead of using it)" tr22="+8000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['32000', '8000']}
                />
            </>
        );
    }
}



export default Heist;