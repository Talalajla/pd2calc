import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Oil from "../../images/maps/loud/bigoil.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Oil} imgName="Big Oil (day 1)" jc="50"
                    tr11="Default (completion)" tr12="12000"
                    tr21="Each item picked (intel/keychain)" tr22="+1500"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '3']}
                    values={['12000', '1500']}
                />
            </>
        );
    }
}



export default Heist;