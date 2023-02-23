import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/images/maps/both/firestarter.jpg" imgName="Firestarter (day 2)" jc="50"
					requirements={[
                        ["Default (completion)", "10000", "rCB"], ["Escape within 3 minutes", "-4000", "rCB"],
						["Each bag secured", "1000", "rS", "1", "3"]
                    ]}
				/>
			</>
		);
	}
}

export default Heist;
