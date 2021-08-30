import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Birth from "../../images/maps/loud/birthsky.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Birth} imgName="Birth of Sky" jc="30"
                    tr11="Default (completion)" tr12="31100"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['31100']}
                />
            </>
        );
    }
}



export default Heist;