import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Green from "../../images/maps/loud/green.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Green} imgName="Green Bridge" jc="50"
                    requirements={[
                        ["Default (completion)", "24000", "rCB"], ["Each bag secured", "1000", "rS", "0", "4"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;