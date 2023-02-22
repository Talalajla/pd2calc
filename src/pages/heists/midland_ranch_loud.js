import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Midland from "../../images/maps/stealth/midland.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Midland} imgName="Midland Ranch" jc="30"
					requirements={[
						["Default (completion)", "22000", "rCB"], ["Used balloon", "2000", "rCB"],
						["Each bag secured", "1000", "rS", "6", "17"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
