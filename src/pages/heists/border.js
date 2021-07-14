import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Border from "../../images/maps/stealth/border.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Border} imgName="Border Crossing" jc="30"
                    tr11="Default (completion)" tr12="21000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['21000']}
                />
            </>
        );
    }
}



export default Heist;