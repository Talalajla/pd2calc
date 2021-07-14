import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Bank from "../../images/maps/stealth/bank.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Bank} imgName="Bank Heist" jc="30"
                    default="12000"
                    tr11="Default (completion)" tr12="12000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['12000']}
                />
            </>
        );
    }
}

export default Heist;