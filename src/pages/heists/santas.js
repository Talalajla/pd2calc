import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Santas from "../../images/maps/loud/santasworkshop.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Santas} imgName="Santa's Workshop" jc="10"
                    tr11="Default (completion)" tr12="4000"
                    tr21="Safe event completed" tr22="+4000"
                    tr31="Money/diamonds from safe" tr32="+8000"
                    tr41="Toast from safe" tr42="+12000"
                    tr51="Each finished and secured present" tr52="+2000"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['', '', '', '', '4']}
                    limitEnd={['', '', '', '', '500']}
                    values={['4000', '4000', '8000', '12000', '2000']}
                />
            </>
        );
    }
}



export default Heist;