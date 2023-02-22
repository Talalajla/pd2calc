import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/bank.jpg" imgName="Bank Heist" jc="30"

                    requirements={[
                        ["Default (completion)", '12000', 'rCB']
                    ]}
                />
            </>
        );
    }
}

export default Heist;