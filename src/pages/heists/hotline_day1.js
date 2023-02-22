import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hotline from "../../images/maps/loud/hotlinemiami.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hotline} imgName="Hotline Miami (day 1)" jc="60"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"], ["Each meth cooked", "500", "rS", "0", "7"],
                        ["Each secured bag", "1000", "rS", "0", "16"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;