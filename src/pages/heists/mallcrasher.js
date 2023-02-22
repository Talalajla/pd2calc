import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Mall from "../../images/maps/loud/mallcrasher.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Mall} imgName="Mallcrasher" jc="20"
                    requirements={[
                        ["Default (completion)", "6000", "rCB"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;