import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Hotline from "../../images/maps/loud/hotlinemiami.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Hotline} imgName="Hotline Miami (day 1)" jc="60"
                    tr11="Default (completion)" tr12="26000"
                    tr21="Each meth cooked" tr22="+500"
                    tr31="Each secured bag" tr32="+1000"
                    status={['rCB', 'rS', 'rS']}
                    limitStart={['', '0', '0']}
                    limitEnd={['', '7', '16']}
                    values={['26000', '500', '1000']}
                />
            </>
        );
    }
}



export default Heist;