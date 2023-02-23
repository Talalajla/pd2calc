import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/images/maps/both/midland.jpg" imgName="Midland Ranch" jc="30"
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
