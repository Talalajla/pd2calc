import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Biker from "../../images/maps/loud/bikers.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Biker} imgName="The Biker Heist (day 1)" jc="30"
                    tr11="Default (completion)" tr12="14500"
                    tr21="Collecting soda for Mike" tr22="+1000"
                    tr31="Finding tools" tr32="+2000"
                    tr41="Finding gas &amp; pipes" tr42="+2000"
                    tr51="Finding engine" tr52="+3000"
                    tr61="Helping Mike in garage" tr62="+3000"
                    tr71="Finding seat" tr72="+6000"
                    tr81="Finding skull" tr82="+8000"
                    tr91="Each bag secured" tr92="+500"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['','','','','','','','','0']}
                    limitEnd={['','','','','','','','','9']}
                    values={['14500', '1000', '2000', '2000', '3000', '3000', '6000', '8000', '500']}
                />
            </>
        );
    }
}

export default Heist;