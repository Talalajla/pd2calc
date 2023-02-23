import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/mountainmaster.jpg" imgName="Mountain master" jc="30"
                    requirements={[
						["Default (completion)", "38000", "rCB"], ["Tea Set Secured", "500", "rCB"],
                        ["Each additional gold bag secured", "1000", "rS", "0", "4"]
					]}
                    isStealth
                />
            </>
        );
    }
}

export default Heist;