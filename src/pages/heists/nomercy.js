import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Nomercy from "../../images/maps/loud/nomercy.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Nomercy} imgName="No Mercy" jc="30"
                    requirements={[
						["Default (completion)", "20000", "rCB"], ["Each patient's room drilled", "7000", "rS", "1", "3"],
                        ["Stealth beginning (without playing doctor & cutting wires)", "12000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;