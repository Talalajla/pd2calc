import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/brooklyn.jpg" imgName="Brooklyn Bank" jc="10"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Each bag secured", "400", "rS", "0", "24"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;