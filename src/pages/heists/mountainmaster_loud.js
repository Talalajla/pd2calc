import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Mountain from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Mountain} imgName="Mountain master" jc="30"
                    requirements={[
						["Default (completion)", "40000", "rCB"], ["Tea Set Secured", "500", "rCB"],
						["Reached back room before alarm", "1000", "rCB"], ["Thermite was used instead of car", "-2000", "rCB"],
                        ["Each additional gold bag secured", "1000", "rS", "0", "4"]
					]}
                />
            </>
        );
    }
}



export default Heist;