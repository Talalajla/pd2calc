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
					tr12="8000"
					tr21="No C4 used on safes"
					tr22="+4000"
					tr31="Each bag secured"
					tr32="+1000"
					status={["rCB", "rCB", "rS"]}
					limitStart={["", "", "4"]}
					limitEnd={["", "", "13"]}
					values={["8000", "4000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
