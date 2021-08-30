import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Henrys from "../../images/maps/loud/henryscock.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Henrys} imgName="Henry's Rock" jc="30"
                    tr11="Default (completion)" tr12="16000"
                    tr21="Archeology room path" tr22="+8000"
                    tr31="Biolab room path" tr32="+6000"
                    tr41="Each laser shot (weapon room path)" tr42="+4000"
                    tr51="Each pc hacked (computer room path)" tr52="+2000"
                    tr61="Each artifact (not box) secured" tr62="+2000"
                    status={['rCB', 'rCB', 'rCB', 'rS', 'rS', 'rS']}
                    limitStart={['', '', '', '0', '0', '0']}
                    limitEnd={['', '', '', '2', '3', '6']}
                    values={['16000', '8000', '6000', '4000', '2000', '2000']}
                />
            </>
        );
    }
}



export default Heist;