import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Yacht from "../../images/maps/stealth/theyacht.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Yacht}
					imgName="The Yacht Heist"
					jc="30"
					tr11="Default (completion)"
					tr12="12000"
					tr21="Secured bags (artif)"
					tr22="+500"
					status={["rCB", "rS"]}
					limitStart={["", "0"]}
					limitEnd={["", "9"]}
					values={["12000", "500"]}
				/>
			</>
		);
	}
}

export default Heist;
