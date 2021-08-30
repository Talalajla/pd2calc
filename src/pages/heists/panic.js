import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Panic from "../../images/maps/loud/panicroom.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Panic} imgName="Panic Room" jc="30"
                    tr11="Default (completion)" tr12="25000"
                    tr21="Each bag of coke secured" tr22="+500"
                    status={['rCB', 'rS', 'rCB']}
                    limitStart={['', '0']}
                    limitEnd={['', '11']}
                    values={['25000', '500']}
                />
            </>
        );
    }
}



export default Heist;