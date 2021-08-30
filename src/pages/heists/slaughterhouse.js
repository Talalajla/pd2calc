import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Pig from "../../images/maps/loud/slaughterhouse.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Pig} imgName="Slaughterhouse" jc="30"
                    tr11="Default (completion)" tr12="32000"
                    status={['rCB', 'rS']}
                    limitStart={['','']}
                    limitEnd={['', '2']}
                    values={['32000', '1000']}
                    pigs={true}
                />
            </>
        );
    }
}



export default Heist;