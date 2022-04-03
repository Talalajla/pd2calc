import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Mountain from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Mountain} imgName="Mountain master" jc="30"
                    tr11="Default (completion)" tr12="38000"
                    tr21="Tea Set Secured" tr22="+500"
                    tr31="Each additional gold bag secured" tr32="+1000"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['','','0']}
                    limitEnd={['', '','4']}
                    values={['38000', '500', '1000']}
                />
            </>
        );
    }
}



export default Heist;