import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import RDH from "../../images/maps/loud/rats.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={RDH} imgName="Reservoir Dogs Heist (day 1)" jc="60"
                    tr11="Default (completion)" tr12="20000"
                    tr21="Each garage opened with saw" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '1']}
                    limitEnd={['', '25']}
                    values={['20000', '500']}
                />
            </>
        );
    }
}



export default Heist;