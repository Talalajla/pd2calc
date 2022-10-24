import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import San from "../../images/maps/stealth/sanmartin.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={San}
					imgName="San Martín Bank"
					jc="30"
					tr11="Default (completion)"
					tr12="32000"
					tr21="Stealth beginning (loud after picking up keychain and drilling instead of using it)"
					tr22="+8000"
					tr31="Each bag secured"
					tr32="+1000"
					status={["rCB", "rCB", "rS"]}
					limitStart={["", "", "1"]}
					limitEnd={["", "", "11"]}
					values={["32000", "8000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
