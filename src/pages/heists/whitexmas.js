import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import White from "../../images/maps/loud/whitexmas.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={White} imgName="White Xmas" jc="40"
                    tr11="Default (completion)" tr12="8000"
                    tr21="Each bag secured" tr22="+2000"
                    status={['rCB', 'rS']}
                    limitStart={['', '0']}
                    limitEnd={['', '500']}
                    values={['8000', '2000']}
                />
            </>
        );
    }
}



export default Heist;