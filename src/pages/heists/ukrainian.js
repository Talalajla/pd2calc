import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/ukrainian.jpg" imgName="Ukrainian Job" jc="20"
                    requirements={[
                        ["Default (completion)", "4000", "rCB"], ["Finished in more than 2 minutes", "6000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;