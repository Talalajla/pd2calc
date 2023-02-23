import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/pd2calc/images/maps/both/sanmartin.jpg" imgName="San Martín Bank" jc="30"
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
