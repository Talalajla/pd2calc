import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Mountain from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Mountain} imgName="Mountain master" jc="30"
                    tr11="Default (completion)" tr12="40000"
                    tr21="Tea Set Secured" tr22="+500"
                    tr31="Reached back room before alarm" tr32="+1000"
                    tr41="Thermite was used instead of car" tr42="-2000"
                    tr51="Each additional gold bag secured" tr52="+1000"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['', '', '', '', '0']}
                    limitEnd={['', '', '', '', '4']}
                    values={['40000', '500', '1000', '-2000', '1000']}
                />
            </>
        );
    }
}



export default Heist;