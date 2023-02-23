import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/framingframe.jpg" imgName="Framing Frame (day 3)" jc="50"
                    requirements={[
                        ["Default (completion)", "11500", "rCB"], ["Each gold bag secured", "1000", "rS", "0", "8"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;