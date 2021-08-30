import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Oil from "../../images/maps/loud/bigoil.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Oil} imgName="Big Oil (day 2)" jc="50"
                    tr11="Default (completion)" tr12="21000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['21000']}
                />
            </>
        );
    }
}



export default Heist;