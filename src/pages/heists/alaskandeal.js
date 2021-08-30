import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Alaskan from "../../images/maps/loud/alaskan.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Alaskan} imgName="Alaskan Deal" jc="30"
                    tr11="Default (completion)" tr12="14000"
                    tr21="Each money bag secured" tr22="+400"
                    tr31="Each weapon bag secured" tr32="+600"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '0', '0']}
                    limitEnd={['', '4', '4']}
                    values={['14000', '400', '600']}
                />
            </>
        );
    }
}



export default Heist;