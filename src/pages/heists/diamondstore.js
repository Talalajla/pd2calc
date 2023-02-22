import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Diamond from "../../images/maps/stealth/diamondstore.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={Diamond} imgName="Diamond Store" jc="20"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Each jewelry bag secured", "1000", "rS", "12", "18"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;