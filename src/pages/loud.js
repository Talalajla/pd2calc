import { Component } from "react";
import { Main, MainTitle, HeistGallery, HeistItem, HeistName } from "../styles/main";
import { Link } from "react-router-dom";


class Loud extends Component {

    importAll = imgs => {
        let images = {};
        imgs.keys().map((img, i) => images[img.replace('../', '')] = imgs(img));
        return images
    }

    render() {
        const images = this.importAll(require.context('../images/maps/loud', false, /\.jpg/));
        const sortedNames = Object.values(images);

        return(
            <Main>
                <MainTitle>Choose heist you want to scout</MainTitle>
                <HeistGallery>
                    <Heist name="Cook Off" img={sortedNames[0].default} link="cookoff" cat="stealth" />
                </HeistGallery>
            </Main>
        );
    }
}

const Heist = ({name, subname, img, link, cat}) => {
    return(
        <HeistItem as={Link} to={link}>
            <img src={img} alt="Map got from FBI Files" />
            <HeistName><p>{name}</p><p>{subname}</p></HeistName>
        </HeistItem>
    );
}

export default Loud;