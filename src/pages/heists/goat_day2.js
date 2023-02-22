import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Goat from "../../images/maps/loud/goat.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Goat} imgName="Goat simulator (day 2)" jc="30"
                    requirements={[
                        ["Default (completion)", "21000", "rCB"], ["Each goat secured", "500", "rS", "5", "15"],
                        ["Each cage built", "500", "rS", "1", "15"], ["Each cage picked up by plane", "500", "rS", "1", "15"]
                    ]}
                    tr11="Default (completion)" tr12="21000"
                    tr21="Each goat secured" tr22="+500"
                    tr31="Each cage built" tr32="+500"
                    tr41="Each cage picked up by plane" tr42="+500"
                    status={['rCB', 'rS', 'rS', 'rS', 'rS']}
                    limitStart={['', '5', '1', '1', '']}
                    limitEnd={['', '15', '15', '15', '']}
                    values={['21000', '500', '500', '500', '50000']}
                    ovkGoats
                />
            </>
        );
    }
}



export default Heist;