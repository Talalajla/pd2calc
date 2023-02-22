import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import CKR from "../../images/maps/loud/default.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={CKR} imgName="Cursed Kill Room" jc="30"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Each bag secured", "1000", "rS", "0", "80"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;