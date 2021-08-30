import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Brooklyn from "../../images/maps/loud/brooklyn.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Brooklyn} imgName="Brooklyn Bank" jc="10"
                    tr11="Default (completion)" tr12="16000"
                    tr21="Each bag secured" tr22="+400"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '24']}
                    values={['16000', '400']}
                />
            </>
        );
    }
}



export default Heist;