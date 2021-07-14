import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import HoxRev from "../../images/maps/stealth/hoxrev.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={HoxRev} imgName="Hoxton Revenge" jc="40"
                    tr11="Default (completion)" tr12="16000"
                    tr21="Each evidence secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '8']}
                    values={['16000', '1000']}
                />
            </>
        );
    }
}



export default Heist;