import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {

    render() {

        return(
            <>
                <HomeHeist 
                    src="/images/maps/stealth/murky.jpg" imgName="Murky Station" jc="30"
                    requirements={[
						["Default (completion)", "8000", "rCB"], ["Each train wagon opened with loot", "2000", "rS", "2", "4"],
                        ["Each type of equipment picked up", "1000", "rS", "2", "4"], ["Each weapon bag secured", "1000", "rS", "0", "14"]
					]}
                />
            </>
        );
    }
}



export default Heist;