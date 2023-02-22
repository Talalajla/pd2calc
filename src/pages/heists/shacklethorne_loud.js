import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Auction from "../../images/maps/stealth/shacklethorne.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Auction} imgName="Shacklethorne Auction" jc="30"
                    requirements={[
						["Default (completion)", "26000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;