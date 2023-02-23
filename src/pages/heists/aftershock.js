import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/aftershock.jpg" imgName="Aftershock" jc="30"
                    requirements={[
                        ["Default (completion)", "28000", 'rCB'], ["Each safe secured", "500", 'rS', "4", "12"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;