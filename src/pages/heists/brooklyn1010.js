import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Brooklyn10 from "../../images/maps/loud/brooklyn10.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Brooklyn10} imgName="Brooklyn 10-10" jc="30"
                    tr11="Default (completion)" tr12="26000"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '4']}
                    values={['26000', '1000']}
                />
            </>
        );
    }
}



export default Heist;