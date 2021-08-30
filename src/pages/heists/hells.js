import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hells from "../../images/maps/loud/hells.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hells} imgName="Hell's Island" jc="30"
                    tr11="Default (completion)" tr12="17000"
                    status={['rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['17000', '1000']}
                    ovkHells="true"
                />
            </>
        );
    }
}



export default Heist;