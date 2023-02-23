import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/rats.jpg" imgName="Rats (day 3)" jc="40"
                    requirements={[
						["Default (completion)", "2000", "rCB"], ["All money bags secured", "14000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;