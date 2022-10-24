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
					tr11="Default (completion)" tr12="22000"
					tr21="Used balloon" tr22="+2000"
					tr31="Each bag secured" tr32="+1000"
					status={["rCB", 'rCB', "rS"]}
					limitStart={["", 'rCB', "6"]}
					limitEnd={["", '', "17"]}
					values={["22000", '2000', "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
