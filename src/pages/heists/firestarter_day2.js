import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Fire from "../../images/maps/stealth/firestarter.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Fire} imgName="Firestarter (day 2)" jc="50"
					requirements={[
                        ["Default (completion)", "6000", "rCB"], ["Escape after 3 minutes", "6000", "rCB"],
						["Each bag secured", "1000", "rS", "1", "3"]
                    ]}
				/>
			</>
		);
	}
}

export default Heist;
