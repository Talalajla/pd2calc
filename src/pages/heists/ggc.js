import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import GGC from "../../images/maps/stealth/ggc.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={GGC} imgName="Golden Grin Casino" jc="70"
                    tr11="Default (completion)" tr12="39250"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['39250']}
                />
            </>
        );
    }
}



export default Heist;