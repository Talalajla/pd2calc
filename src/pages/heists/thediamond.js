import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheDiamond from "../../images/maps/stealth/thediamond.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheDiamond} imgName="The Diamond" jc="50"
                    tr11="Default (completion)" tr12="17000"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '15']}
                    values={['17000', '1000']}
                />
            </>
        );
    }
}



export default Heist;