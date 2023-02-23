import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/hotlinemiami.jpg" imgName="Hotline Miami (day 2)" jc="60"
                    requirements={[
                        ["Default (completion)", "14000", "rCB"], ["C4 defused", "2000", "rCB"],
                        ["Each secured bag (max 10 counts)", "1000", "rS", "0", "16"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;