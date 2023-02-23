import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/reservoirdogs.jpg" imgName="Reservoir Dogs Heist (day 1)" jc="60"
                    requirements={[
						["Default (completion)", "20000", "rCB"], ["Each bag secured", "500", "rS", "1", "25"]
					]}
                />
            </>
        );
    }
}



export default Heist;