import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Diamond from "../../images/maps/stealth/diamondstore.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Diamond} imgName="Diamond Store" jc="20"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Each jewelry bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['','12']}
                    limitEnd={['', '18']}
                    values={['2000', '1000']}
                />
            </>
        );
    }
}



export default Heist;