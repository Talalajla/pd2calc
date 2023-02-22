import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/boiling.jpg" imgName="Birth of Sky" jc="30"
                    requirements={[
                        ["Default (completion)", "26000", "rCB"], ["Each body scanned", "5000", "rS", "1", "4"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;