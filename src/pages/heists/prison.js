import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/default.jpg" imgName="Prison Nightmare" jc="30"
                    requirements={[
						["Default (completion)", "14000", "rCB"], ["Each bag secured", "850", "rS", "0", "500"]
					]}
                />
            </>
        );
    }
}



export default Heist;