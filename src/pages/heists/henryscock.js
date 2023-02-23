import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/loud/henryscock.jpg" imgName="Henry's Rock" jc="30"
                    requirements={[
                        ["Default (completion)", "16000", "rCB"], ["Archeology room path", "8000", "rCB"],
                        ["Biolab room path", "6000", "rCB"], ["Each laser shot (weapon room path)", "4000" , "rS", "0", "2"],
                        ["Each pc hacked (computer room path)", "2000", "rS", "0", "3"], ["Each artifact (not box) secured", "2000", 'rS', "0", "6"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;