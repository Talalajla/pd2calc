import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/counterfeit.jpg" imgName="Counterfeit" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["C4 in basement", "2000", "rCB"],
                        ["Printed money bags", "4000", "rS", "0", "150"], ["Secured money bags (heli)", "1000", "rS", "0", "150"]
                    ]}
                />
            </>
        );
    } 
}

export default Heist;