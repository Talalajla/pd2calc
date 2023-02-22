import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/images/maps/both/border.jpg" imgName="Border Crossing" jc="30"
					requirements={[
						["Default (completion)", "21000", 'rCB'], ["Bags secured", "500", 'rS', 1, 41]
					]}
				/>
			</>
		);
	}
}

export default Heist;
