import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Nomercy from "../../images/maps/loud/nomercy.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Nomercy} imgName="No Mercy" jc="30"
                    tr11="Default (completion)" tr12="20000"
                    tr21="Each patient's room drilled" tr22="+7000"
                    tr31="Stealth beginning (without playing doctor &amp; cutting wires)" tr32="+12000"
                    status={['rCB', 'rS', 'rCB']}
                    limitStart={['', '1', '']}
                    limitEnd={['', '3', '']}
                    values={['20000', '7000', '12000']}
                />
            </>
        );
    }
}



export default Heist;