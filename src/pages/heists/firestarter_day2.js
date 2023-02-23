import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/pd2calc/images/maps/both/firestarter.jpg" imgName="Firestarter (day 2)" jc="50"
					requirements={[
                        ["Default (completion)", "6000", "rCB"], ["Escape after 3 minutes", "6000", "rCB"],
						["Each bag secured", "1000", "rS", "1", "3"]
                    ]}
					isStealth
				/>
			</>
		);
	}
}

export default Heist;
