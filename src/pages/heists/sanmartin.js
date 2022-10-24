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
					tr12="20000"
					tr21="Drill &#8221;shortcut&#8221; path"
					tr22="-8000"
					tr31="Each bag secured"
					tr32="+1000"
					status={["rCB", "rCB", "rS"]}
					limitStart={["", "", "1"]}
					limitEnd={["", "", "11"]}
					values={["20000", "-8000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
