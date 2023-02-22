import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/both/artgallery.jpg" imgName="Art Gallery" jc="20"
                    requirements={[
                        ["Default (completion)", "2000", "rCB"], ["Each painting secured", "500", "rS", "6", "9"]
                    ]}
                />
            </>
        );
    }
}



export default Heist;