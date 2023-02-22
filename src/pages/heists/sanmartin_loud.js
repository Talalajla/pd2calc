import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import San from "../../images/maps/stealth/sanmartin.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={San} imgName="San Martín Bank" jc="30"
					requirements={[
						["Default (completion)", "32000", "rCB"], ["Stealth beginning (loud after picking up keychain and drilling instead of using it)", "8000", "rCB"],
						["Each bag secured", "1000", "rS", "1", "11"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
