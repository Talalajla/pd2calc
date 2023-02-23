import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/pd2calc/images/maps/both/nightclub.jpg" imgName="Nightclub" jc="30"
					requirements={[
						["Default (completion)", "8000", "rCB"], ["No C4 used on safes", "4000", "rCB"],
                        ["Each bag secured", "1000", "rS", "4", "13"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
