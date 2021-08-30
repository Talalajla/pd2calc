import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Biker from "../../images/maps/loud/bikers.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Biker} imgName="The Biker Heist (day 2)" jc="30"
                    tr11="Default (completion)" tr12="10000"
                    tr21="Each bag secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '1']}
                    limitEnd={['', '9']}
                    values={['1000', '500']}
                />
            </>
        );
    }
}

export default Heist;