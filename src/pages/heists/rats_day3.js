import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 3)" jc="40"
                    tr11="Default (completion)" tr12="2000"
                    tr21="All money bags secured" tr22="+14000" 
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['2000', '14000']}
                />
            </>
        );
    }
}



export default Heist;