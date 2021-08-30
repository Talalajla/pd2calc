import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheBomb from "../../images/maps/loud/transportforest.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheBomb} imgName="The Bomb: Forest" jc="60"
                    tr11="Default (completion)" tr12="32000"
                    tr21="Each bag secured" tr22="+1500"
                    status={['rCB', 'rS']}
                    limitStart={['', '4']}
                    limitEnd={['', '8']}
                    values={['32000', '1500']}
                />
            </>
        );
    }
}



export default Heist;