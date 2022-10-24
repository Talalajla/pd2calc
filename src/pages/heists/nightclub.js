import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import NC from "../../images/maps/stealth/nightclub.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={NC}
					imgName="Nightclub"
					jc="30"
					tr11="Default (completion)"
					tr12="10000"
					tr21="Each bag secured"
					tr22="+1000"
					status={["rCB", "rS"]}
					limitStart={["", "4"]}
					limitEnd={["", "13"]}
					values={["10000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
