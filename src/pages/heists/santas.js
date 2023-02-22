import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Santas from "../../images/maps/loud/santasworkshop.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Santas} imgName="Santa's Workshop" jc="10"
                    requirements={[
						["Default (completion)", "4000", "rCB"], ["Safe event completed", "4000", "rCB"],
                        ["Money/diamonds from safe", "8000", "rCB"], ["Toast from safe", "12000", "rCB"],
                        ["Each finished and secured present", "2000", "rS", "4", "5000"]
					]}
                />
            </>
        );
    }
}



export default Heist;