import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheBomb from "../../images/maps/stealth/thebombdockyard.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheBomb} imgName="The Bomb: Dockyard" jc="60"
                    tr11="Default (completion)" tr12="16000"
                    tr21="Each bag secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '14']}
                    values={['16000', '500']}
                />
            </>
        );
    }
}



export default Heist;