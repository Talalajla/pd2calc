import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/brooklyn10.jpg" imgName="Brooklyn 10-10" jc="30"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"], ["Each bag secured", "1000", "rS", "0", "4"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;