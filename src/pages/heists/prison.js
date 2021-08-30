import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Prison from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Prison} imgName="Prison Nightmare" jc="30"
                    tr11="Default (completion)" tr12="14000"
                    tr21="Each bag secured" tr22="+850"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '500']}
                    values={['14000', '850']}
                />
            </>
        );
    }
}



export default Heist;