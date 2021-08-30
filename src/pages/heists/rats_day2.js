import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Rats from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Rats} imgName="Rats (day 2)" jc="40"
                    tr11="Default (completion)" tr12="6000"
                    tr21="Intel was burned" tr22="-2000" 
                    tr31="All meth bags secured that were given" tr32="+4000"
                    status={['rCB', 'rCB', 'rCB']}
                    limitStart={['', '', '']}
                    limitEnd={['', '', '']}
                    values={['6000', '-2000', '4000']}
                />
            </>
        );
    }
}



export default Heist;