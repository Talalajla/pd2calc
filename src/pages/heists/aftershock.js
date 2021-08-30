import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Aftershock from "../../images/maps/loud/aftershock.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Aftershock} imgName="Aftershock" jc="30"
                    tr11="Default (completion)" tr12="28000"
                    tr21="Each safe secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '12']}
                    values={['28000', '500']}
                />
            </>
        );
    }
}



export default Heist;