import { Component } from "react";
import { Main, MainTitle, HeistGallery, HeistItem, HeistName } from "../styles/main";
import { Link } from "react-router-dom";



class Stealth extends Component {

    importAll = imgs => {
        let images = {};
        imgs.keys().map((img, i) => images[img.replace('../', '')] = imgs(img));
        return images
    }

    render() {
        const images = this.importAll(require.context('../images/maps/stealth', false, /\.jpg/));
        const sortedNames = Object.values(images);

        return(
            <Main>
                <MainTitle>Choose heist you want to scout</MainTitle>
                <HeistGallery>
                    <Heist name="Art Gallery" img={sortedNames[0].default} link="artgallery" cat="stealth" />
                    <Heist name="Bank Heist" img={sortedNames[1].default} link="bank" cat="loud" />
                    <Heist name="Border Crossing" img={sortedNames[2].default} link="bordercrossing" />
                    <Heist name="Breakfast in Tijuana" img={sortedNames[3].default} link="breakfastintijuana" />
                    <Heist name="Breakin' Feds" img={sortedNames[4].default} link="breakin'feds" cat="stealth" />
                    <Heist name="Buluc's Manion" img={sortedNames[5].default} link="bulucsmansion" cat="stealth" />
                    <Heist name="Carshop" img={sortedNames[6].default} link="carshop" cat="stealth" />
                    <Heist name="Counterfeit" img={sortedNames[7].default} link="counterfeit" cat="stealth" />
                    <Heist name="Diamond Heist" img={sortedNames[8].default} link="diamondheist" cat="stealth" />
                    <Heist name="Diamond Store" img={sortedNames[9].default} link="diamondstore" cat="stealth" />
                    <Heist name="Dragon Heist" img={sortedNames[10].default} link="dragonheist" cat="stealth" />
                    <Heist name="Election day" subname={"(day 1: Right Track)"} img={sortedNames[11].default} link="electionday_day1" cat="stealth" />
                    <Heist name="Election day" subname={"(day 2: Swing Vote)"} img={sortedNames[11].default} link="electionday_day2" cat="stealth" />
                    <Heist name="Firestarter" subname="(day 1: Airport)" img={sortedNames[12].default} link="firestarter_day1" cat="stealth" />
                    <Heist name="Firestarter" subname="(day 2: FBI Server)" img={sortedNames[12].default} link="firestarter_day2" cat="stealth" />
                    <Heist name="Firestarter" subname="(day 3: Trustee Bank)" img={sortedNames[12].default} link="firestarter_day3" cat="stealth" />
                    <Heist name="Four Stores" img={sortedNames[13].default} link="fourstores" cat="stealth" />
                    <Heist name="Framing Frame" subname="(day 1: Art Gallery)" img={sortedNames[14].default} link="framingframe_day1" cat="stealth" />
                    <Heist name="Framing Frame" subname="(day 2: Train Trade)" img={sortedNames[14].default} link="framingframe_day2" cat="stealth" />
                    <Heist name="Framing Frame" subname="(day 3: Framing)" img={sortedNames[14].default} link="framingframe_day3" cat="stealth" />
                    <Heist name="First World Bank" img={sortedNames[15].default} link="fwb" cat="stealth" />
                    <Heist name="Golden Grin Casino" img={sortedNames[16].default} link="ggc" cat="stealth" />
                    <Heist name="Go Bank" img={sortedNames[17].default} link="gobank" cat="stealth" />
                    <Heist name="Hoxton Revenge" img={sortedNames[18].default} link="hoxtonrevenge" />
                    <Heist name="Jewelry Store" img={sortedNames[19].default} link="jewelrystore" cat="stealth" />
                    <Heist name="Murky Station" img={sortedNames[20].default} link="murky" cat="stealth" />
                    <Heist name="Nightclub" img={sortedNames[21].default} link="nightclub" cat="stealth" />
                    <Heist name="San Martín Bank" img={sortedNames[22].default} link="sanmartínbank" cat="stealth" />
                    <Heist name="Scarface Mansion" img={sortedNames[23].default} link="scarfacemansion" cat="stealth" />
                    <Heist name="Shacklethorne Auction" img={sortedNames[24].default} link="shacklethorne" cat="stealth" />
                    <Heist name="Shadow Raid" img={sortedNames[25].default} link="shadowraid" cat="stealth" />
                    <Heist name="The Alesso Heist" img={sortedNames[26].default} link="thealessoheist" cat="stealth" />
                    <Heist name="The Big Bank" img={sortedNames[27].default} link="bigbank" cat="stealth" />
                    <Heist name="The Bomb: Dockyard" img={sortedNames[28].default} link="thebombdockyard" />
                    <Heist name="The Diamond" img={sortedNames[29].default} link="thediamond" cat="stealth" />
                    <Heist name="The Ukrainian Prisoner" img={sortedNames[30].default} link="theukrainianprisoner" cat="stealth" />
                    <Heist name="The White House" img={sortedNames[31].default} link="thewhitehouse" cat="stealth" />
                    <Heist name="The Yacht Heist" img={sortedNames[32].default} link="theyachtheist" cat="stealth" />
                    <Heist name="Transport: Train Heist" img={sortedNames[33].default} link="transporttrainheist" cat="stealth" />
                    <Heist name="Ukrainian Job" img={sortedNames[34].default} link="ukrainianjob" cat="stealth" />
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

export default Stealth;