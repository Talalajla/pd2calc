import { Component } from "react";
import { SideContainer, Side, SideTextBox, SideText} from "../styles/home";
import { Link } from "react-router-dom";
import stealthIMG from "../images/stealth.jpg";
import loudIMG from "../images/loud.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



class Home extends Component {

    render() {

        return(
            <SideContainer>
                <Side as={Link} to={"/stealth"} stealth>
                    <img src={stealthIMG} />
                    <SideTextBox>
                        <SideText>Stealth</SideText>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </SideTextBox>
                </Side>
                <Side as={Link} to={"/loud"}>
                    <img src={loudIMG} />
                    <SideTextBox>
                        <SideText>Loud</SideText>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </SideTextBox>
                </Side>
            </SideContainer>
        );
    }
}

export default Home;