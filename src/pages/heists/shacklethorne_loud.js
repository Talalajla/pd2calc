import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/shacklethorne.jpg" imgName="Shacklethorne Auction" jc="30"
                    requirements={[
						["Default (completion)", "26000", "rCB"]
					]}
                />
            </>
        );
    }
}



export default Heist;