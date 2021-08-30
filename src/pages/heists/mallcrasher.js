import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Mall from "../../images/maps/loud/mallcrasher.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Mall} imgName="Mallcrasher" jc="20"
                    tr11="Default (completion)" tr12="6000" 
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['6000']}
                />
            </>
        );
    }
}



export default Heist;