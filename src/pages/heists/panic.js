import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Panic from "../../images/maps/loud/panicroom.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Panic} imgName="Panic Room" jc="30"
                    requirements={[
						["Default (completion)", "25000", "rCB"], ["Each bag of coke secured", "500", "rS", "0", "11"]
					]}
                />
            </>
        );
    }
}



export default Heist;