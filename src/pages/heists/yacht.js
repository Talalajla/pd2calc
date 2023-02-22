import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Yacht from "../../images/maps/stealth/theyacht.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Yacht} imgName="The Yacht Heist" jc="30"
					requirements={[
                        ["Default (completion)", "12000", "rCB"], ["Secured bags (artif.)", "500", "rS", "0", "9"]
                    ]}
				/>
			</>
		);
	}
}

export default Heist;
