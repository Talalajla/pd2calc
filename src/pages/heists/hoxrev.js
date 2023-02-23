import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/hoxrev.jpg" imgName="Hoxton Revenge" jc="40"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Each evidence secured", "1000", "rS", "4", "8"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;