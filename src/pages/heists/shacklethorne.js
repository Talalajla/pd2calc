import { Component } from "react";
import HomeHeist from "../../components/homeHeist";
import Auction from "../../images/maps/stealth/shacklethorne.jpg";

class Heist extends Component {
	render() {
		return (
			<>
				<HomeHeist
					src={Auction} imgName="Shacklethorne Auction" jc="30"
					requirements={[
						["Default (completion)", "15000", "rCB"], ["Each bag secured", "1000", "rS", "0", "38"]
					]}
				/>
			</>
		);
	}
}

export default Heist;
