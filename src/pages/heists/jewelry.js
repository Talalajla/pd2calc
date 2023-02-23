import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/jewelry.jpg" imgName="Jewelry Store" jc="10"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Finished in more than 2 minutes", "4000", "rCB"]
                    ]}
                    isStealth
                />
            </>
        );
    }
}



export default Heist;