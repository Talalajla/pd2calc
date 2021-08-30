import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Heat from "../../images/maps/loud/heatstreet.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Heat} imgName="Heat Street" jc="50"
                    tr11="Default (completion)" tr12="26000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['26000']}
                />
            </>
        );
    }
}



export default Heist;