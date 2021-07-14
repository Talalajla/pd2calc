import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import San from "../../images/maps/stealth/sanmartin.jpg";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src={San} imgName="San Martín Bank" jc="30"
                    tr11="Default (completion)" tr12="20000"
                    tr21="Drill &#8221;shortcut&#8221; path" tr22="-8000"
                    status={['rCB', 'rCB']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['20000', '-8000']}
                />
            </>
        );
    }
}



export default Heist;