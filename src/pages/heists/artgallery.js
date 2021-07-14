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
                    tr21="Each painting secured" tr22="+500"
                    status={['rCB', 'rS']}
                    limitStart={['', '6']}
                    limitEnd={['', '9']}
                    values={['2000', '500']}
                />
            </>
        );
    }
}



export default Heist;