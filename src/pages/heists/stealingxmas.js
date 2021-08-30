import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import StealX from "../../images/maps/loud/stealingxmas.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={StealX} imgName="Stealing Xmas" jc="30"
                    tr11="Default (completion)" tr12="4000"
                    tr21="Collecting wine" tr22="+800"
                    tr31="Collecting necklace" tr32="+2000"
                    tr41="Collecting VR set" tr42="+6500"
                    tr51="Collecting toy (in box)" tr52="+800"
                    tr61="Collecting toy (in bag)" tr62="+2800"
                    tr71="Collecting shoes (in cage)" tr72="+1500"
                    tr81="Collecting shoes (in room)" tr82="+4500"
                    tr91="Each money / jewelry bag secured" tr92="+1000"
                    status={['rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rCB', 'rS']}
                    limitStart={['','','','','','','','','0']}
                    limitEnd={['','','','','','','','','9']}
                    values={['4000', '800', '2000', '6500', '800', '2800', '1500', '4500', '1000']}
                />
            </>
        );
    }
}



export default Heist;