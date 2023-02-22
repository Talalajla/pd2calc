import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Under from "../../images/maps/loud/undercover.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Under} imgName="Undercover" jc="30"
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