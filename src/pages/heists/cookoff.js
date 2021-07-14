import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Cook from "../../images/maps/loud/cookoff.jpg";

class Heist extends Component {

    render() {
        return(
            <>
                <HomeHeist 
                    src={Cook} imgName="Cook Off" jc="50"
                    default="24000" 
                    tr11="Default (4 bags)" tr12="24000" 
                    tr21="Every additional bag" tr22="+8000"
                    infinite scaling="8000" limit="1200"
                    status={['rCB', '']}
                    limitStart={['', '']}
                    limitEnd={['', '']}
                    values={['24000']}
                />
            </>
        );
    }
}

export default Heist;