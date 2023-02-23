import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/pd2calc/images/maps/loud/alaskan.jpg" imgName="Alaskan Deal" jc="30"
                    requirements={[
                        ["Default (completion)", '14000', 'rCB'], ["Each money bag secured", "400", 'rS', '0', '4'], ["Each weapon bag secured", '600', 'rS', '0', '4']
                    ]}
                />
            </>
        );
    }
}



export default Heist;