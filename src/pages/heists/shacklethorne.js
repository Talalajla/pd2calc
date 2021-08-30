import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Auction from "../../images/maps/stealth/shacklethorne.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Auction} imgName="Shacklethorne Auction" jc="30"
                    tr11="Default (completion)" tr12="15000"
                    status={['rCB']}
                    limitStart={['']}
                    limitEnd={['']}
                    values={['15000']}
                />
            </>
        );
    }
}



export default Heist;