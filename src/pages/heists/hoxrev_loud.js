import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import HoxRev from "../../images/maps/stealth/hoxrev.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={HoxRev} imgName="Hoxton Revenge" jc="40"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["First vault mission done stealth", "2000", "rCB"],
                        ["Each evidence secured", "1000", "rS", "4", "8"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;