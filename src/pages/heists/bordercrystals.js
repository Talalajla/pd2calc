import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import BorderCrystals from "../../images/maps/loud/bordercrystals.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={BorderCrystals} imgName="Border Crystals" jc="30"
                    tr11="Default (completion)" tr12="1000"
                    tr21="Each bag secured" tr22="+6000"
                    status={['rCB', 'rS']}
                    limitStart={['', '3']}
                    limitEnd={['', '50']}
                    values={['1000', '6000']}
                />
            </>
        );
    }
}



export default Heist;