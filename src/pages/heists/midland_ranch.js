import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Midland from "../../images/maps/stealth/midland.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Midland}
					imgName="Midland Ranch"
					jc="30"
					tr11="Default (completion)"
					tr12="22000"
					tr21="Each bag secured"
					tr22="+1000"
					status={["rCB", "rS"]}
					limitStart={["", "6"]}
					limitEnd={["", "17"]}
					values={["22000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
