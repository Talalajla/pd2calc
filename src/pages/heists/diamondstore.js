import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/both/diamondstore.jpg" imgName="Diamond Store" jc="20"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Each jewelry bag secured", "1000", "rS", "12", "18"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;