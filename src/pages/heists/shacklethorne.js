import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Auction from "../../images/maps/stealth/shacklethorne.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Auction}
					imgName="Shacklethorne Auction"
					jc="30"
					tr11="Default (completion)"
					tr12="15000"
					tr21="Each bag secured"
					tr22="+1000"
					status={["rCB", "rS"]}
					limitStart={["", "0"]}
					limitEnd={["", "38"]}
					values={["15000", "1000"]}
				/>
			</>
		);
	}
}

export default Heist;
