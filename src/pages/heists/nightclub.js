import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import NC from "../../images/maps/stealth/nightclub.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={NC} imgName="Nightclub" jc="30"
					requirements={[
						["Default (completion)", "10000", "rCB"], ["Each bag secured", "1000", "rS", "4", "13"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
