import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/fourstores.jpg" imgName="Four Stores" jc="20"
                    requirements={
                        ["Default (completion)", "6000", "rCB"]
                    }
                />
            </>
        );
    }
}



export default Heist;