import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Under from "../../images/maps/loud/undercover.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Under} imgName="Undercover" jc="30"
                    tr11="Default (completion)" tr12="24500"
                    tr21="Car lifted with confirmed server" tr22="+1000"
                    tr31="Hack was interrupted" tr32="+1000"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['', '', '0']}
                    limitEnd={['', '', '3']}
                    values={['24500', '1000', '1000']}
                />
            </>
        );
    }
}



export default Heist;