import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Car from "../../images/maps/stealth/carshop.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Car} imgName="Carshop" jc="30"
                    tr11="Default (completion)" tr12="9000"
                    tr21="Each car secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '1']}
                    limitEnd={['', '4']}
                    values={['9000', '1000']}
                />
            </>
        );
    }
}



export default Heist;