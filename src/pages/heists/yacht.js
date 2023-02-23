import { Component } from "react";
import HomeHeist from "../../components/homeHeist";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src="/pd2calc/images/maps/stealth/theyacht.jpg" imgName="The Yacht Heist" jc="30"
					requirements={[
                        ["Default (completion)", "12000", "rCB"], ["Secured bags (artif.)", "500", "rS", "0", "9"]
                    ]}
					isStealth
				/>
			</>
		);
	}
}

export default Heist;
