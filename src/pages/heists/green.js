import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/green.jpg" imgName="Green Bridge" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Each bag secured", "1000", "rS", "0", "4"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;