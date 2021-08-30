import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import RDH from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={RDH} imgName="Reservoir Dogs Heist (day 2)" jc="60"
                    tr11="Default (completion)" tr12="8000"
                    tr21="Each garage opened with saw" tr22="+1500"
                    tr31="Each bag secured" tr32="+1000"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '1', '1']}
                    limitEnd={['', '5', '10']}
                    values={['8000', '1500', '1000']}
                />
            </>
        );
    }
}



export default Heist;