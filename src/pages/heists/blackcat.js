import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/blackcat.jpg" imgName="Black Cat" jc="30"
                    requirements={[
                        ["Default (completion)", "31000", "rCB"], ["Not default entrance", "-1500", "rCB"],
                        ["Enter the CASINO before SPA (bug?)", "-4000", "rCB"], ["Skipped planting bug", "-4000", "rCB"],
                        ["Each money bag secured (vault)", "500", "rS", "4", "16"], ["Each optional bag secured", "500", "rS", "0", "7"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;