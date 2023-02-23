import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/undercover.jpg" imgName="Undercover" jc="30"
                    requirements={[
                        ["Default (completion)", "24500", "rCB"], ["Car lifted with confirmed server", "1000", "rCB"],
                        ["Hack was interrupted", "1000", "rS", "0", "3"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;