import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Safe from "../../images/maps/loud/safehouse.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Safe} imgName="Safe House Raid" jc="10"
                    tr11="Default (completion)" tr12="42000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['42000']}
                />
            </>
        );
    }
}



export default Heist;