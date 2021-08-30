import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import SHNight from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={SHNight} imgName="Safe House Nightmare" jc="10"
                    tr11="Default (completion)" tr12="10000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['10000']}
                />
            </>
        );
    }
}



export default Heist;