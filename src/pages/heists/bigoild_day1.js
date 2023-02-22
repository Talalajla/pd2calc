import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/bigoil.jpg" imgName="Big Oil (day 1)" jc="50"
                    requirements={[
                        ["Default (completion)", "12000", 'rCB'], ["Each item picked (intel/keychain)", "1500", "rS", "0", "3"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;