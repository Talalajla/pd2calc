import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Border from "../../images/maps/stealth/border.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Border}
					imgName="Border Crossing"
					jc="30"
					tr11="Default (completion)"
					tr12="21000"
					tr21="Bags secured"
					tr22="500"
					status={["rCB", "rS"]}
					limitStart={["", "1"]}
					limitEnd={["", "41"]}
					values={["21000", "500"]}
				/>
			</>
		);
	}
}

export default Heist;
