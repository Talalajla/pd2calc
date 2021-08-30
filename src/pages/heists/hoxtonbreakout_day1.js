import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hox from "../../images/maps/loud/hoxtonbreakout.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hox} imgName="Hoxton Breakout (day 1)" jc="60"
                    tr11="Default (completion)" tr12="18400"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['18400']}
                />
            </>
        );
    }
}



export default Heist;