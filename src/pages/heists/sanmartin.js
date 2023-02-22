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
						["Default (completion)", "20000", "rCB"], ['Drill "shortcut" path', "-8000", "rCB"],
						["Each bg secured", "1000", "rS", "1", "11"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
