import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import BigBank from "../../images/maps/stealth/thebigbank.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={BigBank} imgName="The Big Bank" jc="60"
                    tr11="Default (completion)" tr12="30000"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '28']}
                    values={['30000', '1000']}
                />
            </>
        );
    }
}

export default Heist;