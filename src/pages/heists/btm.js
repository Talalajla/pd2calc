import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import BTM from "../../images/maps/loud/beneathmountain.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={BTM} imgName="Beneath the Mountain" jc="30"
                    tr11="Default (completion)" tr12="19000"
                    tr21="Each vault with loot opened" tr22="+1000"
                    tr31="Each bag secured" tr32="+700"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '2', '2']}
                    limitEnd={['', '4', '10']}
                    values={['19000', '1000', '700']}
                />
            </>
        );
    }
}



export default Heist;