import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/panicroom.jpg" imgName="Panic Room" jc="30"
                    requirements={[
						["Default (completion)", "25000", "rCB"], ["Each bag of coke secured", "500", "rS", "0", "11"]
					]}
                />
            </>
        );
    }
}

export default Heist;