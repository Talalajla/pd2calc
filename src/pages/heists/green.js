import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Green from "../../images/maps/loud/green.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Green} imgName="Green Bridge" jc="50"
                    tr11="Default (completion)" tr12="24000"
                    tr21="Each bag secured" tr22="+1000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '4']}
                    values={['24000', '1000']}
                />
            </>
        );
    }
}



export default Heist;