import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Fire}
					imgName="Firestarter (day 2)"
					jc="50"
					tr11="Default (completion)"
					tr12="6000"
					tr21="Escape after 3 minutes"
					tr22="+6000"
					tr31="Each bag secured"
					tr32="+1000"
					status={["rCB", "rCB", "rS"]}
					limitStart={["", "", "1"]}
					limitEnd={["", "", "3"]}
					values={["6000", "6000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
