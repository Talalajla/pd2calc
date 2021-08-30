import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Meltdown from "../../images/maps/loud/meltdown.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Meltdown} imgName="Meltdown" jc="30"
                    tr11="Default (completion)" tr12="20000" 
                    tr21="Each bonus bag secured" tr22="1500"
                    status={['rCB', 'rS']}
                    limitStart={['', '0', '']}
                    limitEnd={['', '8', '']}
                    values={['20000', '1500', '2000']}
                    fLootBonus="true"
                />
            </>
        );
    }
}



export default Heist;