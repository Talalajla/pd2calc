import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/rats.jpg" imgName="Rats (day 2)" jc="40"
                    requirements={[
						["Default (completion)", "6000", "rCB"], ["Intel was burned", "-2000", "rCB"],
                        ["All meth bags secured that were given", "4000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;