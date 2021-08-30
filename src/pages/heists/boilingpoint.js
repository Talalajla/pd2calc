import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Boiling from "../../images/maps/loud/boiling.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Boiling} imgName="Birth of Sky" jc="30"
                    tr11="Default (completion)" tr12="26000"
                    tr21="Each body scanned" tr22="+5000"
                    status={['rCB', 'rS']}
                    limitStart={['', '1']}
                    limitEnd={['', '4']}
                    values={['26000', '5000']}
                />
            </>
        );
    }
}



export default Heist;