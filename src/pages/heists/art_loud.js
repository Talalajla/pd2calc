import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Art from "../../images/maps/stealth/artgallery.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Art} imgName="Art Gallery" jc="20"
                    tr11="Default (completion)" tr12="2000"
                    tr21="Security hack completion" tr22="+6000"
                    tr31="Each painting secured" tr32="+500"
                    status={['rCB', 'rCB', 'rS']}
                    limitStart={['', '', '6']}
                    limitEnd={['', '', '9']}
                    values={['2000', '6000', '500']}
                />
            </>
        );
    }
}



export default Heist;