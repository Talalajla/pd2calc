import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import CKR from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={CKR} imgName="Cursed Kill Room" jc="30"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '80']}
                    values={['2000', '1000']}
                />
            </>
        );
    }
}



export default Heist;