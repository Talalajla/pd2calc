import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/framingframe.jpg" imgName="Framing Frame (day 1)" jc="50"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Security hack completed", "6000", "rCB"],
                        ["Each painting secured", "500", "rS", "4", "9"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;