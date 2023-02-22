import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import TheAlesso from "../../images/maps/stealth/thealesso.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={TheAlesso} imgName="The Alesso Heist" jc="60"
                    requirements={[
                        ["Default (completion)", "9000", "rCB"], ["Security hack finished", "10000", "rCB"],
                        ["Each 2 x C4 charges picked", "1000", "rS", "2", "5"], ["Each 3 x C4 charges set", "2000", "rS", "1", "3"],
                        ["Each money bag secured", "1200", "rS", "3", "18"] 
                    ]}
                />
            </>
        );
    }
}



export default Heist;