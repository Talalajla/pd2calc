import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Transit from "../../images/maps/stealth/transit.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Transit} imgName="Lost in Transit" jc="30"
                    tr11="Default (completion)" tr12="25000"
                    tr21="For each bag secured" tr22="+250"
					status={["rCB", 'rS']}
                    limitStart={['', '6']}
                    limitEnd={['', '35']}
                    values={['25000', '250']}
                />
            </>
        );
    }
}



export default Heist;