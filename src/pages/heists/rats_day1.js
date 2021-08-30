import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 1)" jc="40"
                    tr11="Default (completion)" tr12="30000"
                    tr21="Escape with less than 3 bags cooked" tr22="-18000" 
                    tr31="Escape with 7 bags cooked" tr32="+40000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['30000', '-18000', '40000']}
                />
            </>
        );
    }
}



export default Heist;