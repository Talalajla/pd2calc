import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import StealX from "../../images/maps/loud/stealingxmas.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={StealX} imgName="Stealing Xmas" jc="30"
                    requirements={[
                        ["Default (completion)", "4000", "rCB"], ["Collecting wine", "800", "rCB"],
                        ["Collecting necklace", "2000", "rCB"], ["Collecting VR set", "6500", "rCB"],
                        ["Collecting toy (in box)", "800", "rCB"], ["Collecting toy (in bag)", "2800", "rCB"],
                        ["Collecting shoes (in cage)", "1500", "rCB"], ["Collecting shoes (in room)", "4500", "rCB"],
                        ["Each money/jewelry bag secured", "1000", "rS", "0", "9"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;