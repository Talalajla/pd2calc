import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Go from "../../images/maps/stealth/gobank.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Go} imgName="Go Bank" jc="40"
                    requirements={[
                        ["Default (completion)", "10000", "rCB"], ["Each bag secured", "1000", "rS", "1", "12"],
                        ["Blackmailer appears", "-1000", "rCB"], ["Vault already opened", "-6000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;