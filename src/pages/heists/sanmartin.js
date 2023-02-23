import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/pd2calc/images/maps/both/sanmartin.jpg" imgName="San Martín Bank" jc="30"
					requirements={[
						["Default (completion)", "20000", "rCB"], ['Drill "shortcut" path', "-8000", "rCB"],
						["Each bg secured", "1000", "rS", "1", "11"]
					]}
					isStealth
				/>
			</>
		);
	}
}

export default Heist;
