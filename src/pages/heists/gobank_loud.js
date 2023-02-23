import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/gobank.jpg" imgName="Go Bank" jc="40"
                    requirements={[
                        ["Default (completion)", "12000", "rCB"], ["Each bag secured", "1000", "rS", "1", "12"],
                        ["Vault already opened", "-6000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;