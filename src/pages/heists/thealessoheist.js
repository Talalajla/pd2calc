import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/thealesso.jpg" imgName="The Alesso Heist" jc="60"
                    requirements={[
                        ["Default (completion)", "9000", "rCB"], ["Each 2 x C4 charges picked", "2000", "rS", "2", "5"], 
                        ["Each 3 x C4 charges set", "2000", "rS", "1", "3"], ["Each money bag secured", "1500", "rS", "3", "18"] 
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;