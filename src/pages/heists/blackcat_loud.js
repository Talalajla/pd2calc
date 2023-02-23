import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/blackcat.jpg" imgName="Black Cat" jc="30"
                    requirements={[
                        ["Default (completion)", "34000", "rCB"], ["Not default entrance", "-1500", 'rCB'],
                        ["Enter the CASINO before SPA (bug?)", "-500", 'rCB'], ["Vault opened with C4 (just before code and hand were used)", '14000', 'rCB'],
                        ["Vault opened with C4 (from start)", '-4000', 'rCB'], ["Vault opened with C4 (from start + entered casino)", '1000', 'rCB'],
                        ["Each money bag secured (vault)", "500", "rS", "4", "16"], ["Each optional bag secured", "500", "rS", "0", "7"]
                    ]}
                    isLoud
                />
            </>
        );
    }
}



export default Heist;