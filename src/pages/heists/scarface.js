import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Scarface from "../../images/maps/stealth/scarface.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Scarface} imgName="Scarface Mansion" jc="30"
                    requirements={[
						["Default (completion)", "21000", "rCB"], ["Each bag secured", "500", "rS", "2", "18"]
					]}
                />
            </>
        );
    }
}



export default Heist;