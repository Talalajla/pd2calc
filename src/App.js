import { Component, lazy, Suspense } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Paths
import Home from "./pages/home";
import Stealth from "./pages/stealth";
import Loud from "./pages/loud";
import Tutorial from "./pages/tutorial";

import Nav from "./components/nav";

const NoPage = lazy(() => import("./pages/nopage"));

const Aftershock = lazy(() => import("./pages/heists/aftershock"));
const Alaskan = lazy(() => import("./pages/heists/alaskandeal"));
const Art = lazy(() => import("./pages/heists/artgallery"));
const Art_Loud = lazy(() => import("./pages/heists/art_loud"));
const Bank = lazy(() => import("./pages/heists/bank"));
const BTM = lazy(() => import("./pages/heists/btm"));
const BigOil1 = lazy(() => import("./pages/heists/bigoild_day1"));
const BigOil2 = lazy(() => import("./pages/heists/bigoild_day2"));
const Birth = lazy(() => import("./pages/heists/birthofsky"));
const Black = lazy(() => import("./pages/heists/blackcat"));
const Black_Loud = lazy(() => import("./pages/heists/blackcat_loud"));
const Boiling = lazy(() => import("./pages/heists/boilingpoint"));
const Border = lazy(() => import("./pages/heists/border"));
const Border_Loud = lazy(() => import("./pages/heists/border_loud"));
const BorderCrystals = lazy(() => import("./pages/heists/bordercrystals"));
const Breakfast = lazy(() => import("./pages/heists/breakfast"));
const Breakfast_Loud = lazy(() => import("./pages/heists/breakfast_loud"));
const BreakingFeds = lazy(() => import("./pages/heists/breakinfeds"));
const Brooklyn10 = lazy(() => import("./pages/heists/brooklyn1010"));
const Brooklyn = lazy(() => import("./pages/heists/brooklynbank"));
const Bulucs = lazy(() => import("./pages/heists/bulucs"));
const Bulucs_loud = lazy(() => import("./pages/heists/bulucs_loud"));
const Carshop = lazy(() => import("./pages/heists/carshop"));
const CookOff = lazy(() => import("./pages/heists/cookoff"));
const Couterfeit = lazy(() => import("./pages/heists/counterfeit"));
const Couterfeit_Loud = lazy(() => import("./pages/heists/counterfeit_loud"));
const CKR = lazy(() => import("./pages/heists/cursedkillroom"));
const Dragon = lazy(() => import("./pages/heists/dragon"));
const Dragon_Loud = lazy(() => import("./pages/heists/dragon_loud"));
const DiamondHeist = lazy(() => import("./pages/heists/diamondheist"));
const DiamondHeist_Loud = lazy(() => import("./pages/heists/diamondheist_loud"));
const DiamondStore = lazy(() => import("./pages/heists/diamondstore"));
const Election1 = lazy(() => import("./pages/heists/election_day1"));
const Election1_Loud = lazy(() => import("./pages/heists/election_day1_loud"));
const Election2 = lazy(() => import("./pages/heists/election_day2"));
const Election2_Loud = lazy(() => import("./pages/heists/election_day2_loud"));
const Election2c_Loud = lazy(() => import("./pages/heists/election_day2c_loud"));
const Fire1 = lazy(() => import("./pages/heists/firestarter_day1"));
const Fire1_Loud = lazy(() => import("./pages/heists/firestarter_day1_loud"));
const Fire2 = lazy(() => import("./pages/heists/firestarter_day2"));
const Fire2_Loud = lazy(() => import("./pages/heists/firestarter_day2_loud"));
const Fire3 = lazy(() => import("./pages/heists/firestarter_day3"));
const Fire3_Loud = lazy(() => import("./pages/heists/firestarter_day3_loud"));
const FWB = lazy(() => import("./pages/heists/fwb"));
const FWB_Loud = lazy(() => import("./pages/heists/fwb_loud"));
const Four = lazy(() => import("./pages/heists/fourstores"));
const Framing1 = lazy(() => import("./pages/heists/framingframe_day1"));
const Framing1_Loud = lazy(() => import("./pages/heists/framingframe_day1_loud"));
const Framing2 = lazy(() => import("./pages/heists/framingframe_day2"));
const Framing2_Loud = lazy(() => import("./pages/heists/framingframe_day2_loud"));
const Framing3 = lazy(() => import("./pages/heists/framingframe_day3"));
const Framing3_Loud = lazy(() => import("./pages/heists/framingframe_day3_loud"));
const GoBank = lazy(() => import("./pages/heists/gobank"));
const GoBank_Loud = lazy(() => import("./pages/heists/gobank_loud"));
const GGC = lazy(() => import("./pages/heists/ggc"));
const GGC_Loud = lazy(() => import("./pages/heists/ggc_loud"));
const Goat1 = lazy(() => import("./pages/heists/goat_day1"));
const Goat2 = lazy(() => import("./pages/heists/goat_day2"));
const Green = lazy(() => import("./pages/heists/green"));
const Heat = lazy(() => import("./pages/heists/heat"));
const Hells = lazy(() => import("./pages/heists/hells"));
const Henrys = lazy(() => import("./pages/heists/henryscock"));
const Hostile = lazy(() => import("./pages/heists/hostile"));
const Hotline1 = lazy(() => import("./pages/heists/hotline_day1"));
const Hotline2 = lazy(() => import("./pages/heists/hotline_day2"));
const Hoxton1 = lazy(() => import("./pages/heists/hoxtonbreakout_day1"));
const Hoxton2 = lazy(() => import("./pages/heists/hoxtonbreakout_day2"));
const HoxRev = lazy(() => import("./pages/heists/hoxrev"));
const HoxRev_Loud = lazy(() => import("./pages/heists/hoxrev_loud"));
const Jewelry = lazy(() => import("./pages/heists/jewelry"));
const Jewelry_Loud = lazy(() => import("./pages/heists/jewelry_loud"));
const LabRats = lazy(() => import("./pages/heists/labrats"));
const LostInTransit = lazy(() => import("./pages/heists/lostintransit"));
const Mallcrasher = lazy(() => import("./pages/heists/mallcrasher"));
const Meltdown = lazy(() => import("./pages/heists/meltdown"));
const Midland = lazy(() => import("./pages/heists/midland_ranch"));
const MountainMaster = lazy(() => import("./pages/heists/mountainmaster"));
const MountainMaster_Loud = lazy(() => import("./pages/heists/mountainmaster_loud"));
const Murky = lazy(() => import("./pages/heists/murky"));
const Nightclub = lazy(() => import("./pages/heists/nightclub"));
const Nightclub_Loud = lazy(() => import("./pages/heists/nightclub_loud"));
const Nomercy = lazy(() => import("./pages/heists/nomercy"));
const Panic = lazy(() => import("./pages/heists/panic"));
const Rats1 = lazy(() => import("./pages/heists/rats_day1"));
const Rats2 = lazy(() => import("./pages/heists/rats_day2"));
const Rats3 = lazy(() => import("./pages/heists/rats_day3"));
const Reservoir1 = lazy(() => import("./pages/heists/rdh_day1"));
const Reservoir2 = lazy(() => import("./pages/heists/rdh_day2"));
const Prison = lazy(() => import("./pages/heists/prison"));
const SafehouseNight = lazy(() => import("./pages/heists/safehousenight"));
const Safehouse = lazy(() => import("./pages/heists/safehouseraid"));
const SanMartin = lazy(() => import("./pages/heists/sanmartin"));
const SanMartin_Loud = lazy(() => import("./pages/heists/sanmartin_loud"));
const SantasWork = lazy(() => import("./pages/heists/santas"));
const Scarface = lazy(() => import("./pages/heists/scarface"));
const Scarface_Loud = lazy(() => import("./pages/heists/scarface_loud"));
const Shacklethorne = lazy(() => import("./pages/heists/shacklethorne"));
const Shacklethorne_Loud = lazy(() => import("./pages/heists/shacklethorne_loud"));
const Slaughterhouse = lazy(() => import("./pages/heists/slaughterhouse"));
const StealingXmas = lazy(() => import("./pages/heists/stealingxmas"));
const Shadow = lazy(() => import("./pages/heists/shadow"));
const TheAlesso = lazy(() => import("./pages/heists/thealessoheist"));
const TheAlesso_Loud = lazy(() => import("./pages/heists/thealessoheist_loud"));
const TheBigBank = lazy(() => import("./pages/heists/thebigbank"));
const TheBigBank_Loud = lazy(() => import("./pages/heists/thebigbank_loud"));
const TheBikerHeist1 = lazy(() => import("./pages/heists/thebikerheist_day1"));
const TheBikerHeist2 = lazy(() => import("./pages/heists/thebikerheist_day2"));
const TheDiamond = lazy(() => import("./pages/heists/thediamond"));
const TheBombDock = lazy(() => import("./pages/heists/thebombdock"));
const TheBombForest = lazy(() => import("./pages/heists/thebombforest"));
const TheUkrainian = lazy(() => import("./pages/heists/theukrainianprisoner"));
const TheUkrainian_Loud = lazy(() => import("./pages/heists/theukrainianprisoner_loud"));
const TheWhiteHouse = lazy(() => import("./pages/heists/thewhitehouse"));
const TheWhiteHouse_Loud = lazy(() => import("./pages/heists/thewhitehouse_loud"));
const Train = lazy(() => import("./pages/heists/train"));
const Transport = lazy(() => import("./pages/heists/transport"));
const Ukrainian = lazy(() => import("./pages/heists/ukrainian"));
const Undercover = lazy(() => import("./pages/heists/undercover"));
const Watchdogs1 = lazy(() => import("./pages/heists/watchdogs_day1"));
const Watchdogs2 = lazy(() => import("./pages/heists/watchdogs_day2"));
const White = lazy(() => import("./pages/heists/whitexmas"));
const Yacht = lazy(() => import("./pages/heists/yacht"));


class App extends Component {
	render() {
		console.log('test');
		return (
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyles />
					
					<Suspense fallback={<div>Loading...</div>}>
					<BrowserRouter>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/stealth" component={Stealth} />
							<Route exact path="/loud" component={Loud} />
							<Route exact path="/tutorial" component={Tutorial} />
							<Route exact path="/cookoff" component={CookOff} />
							<Route exact path="/aftershock" component={Aftershock} />
							<Route exact path="/alaskandeal" component={Alaskan} />
							<Route exact path="/artgallery" component={Art} />
							<Route exact path="/artgallery_loud" component={Art_Loud} />
							<Route exact path="/bank" component={Bank} />
							<Route exact path="/btm" component={BTM} />
							<Route exact path="/bigoil_day1" component={BigOil1} />
							<Route exact path="/bigoil_day2" component={BigOil2} />
							<Route exact path="/birthofsky" component={Birth} />
							<Route exact path="/blackcat" component={Black} />
							<Route exact path="/blackcat_loud" component={Black_Loud} />
							<Route exact path="/boilingpoint" component={Boiling} />
							<Route exact path="/bordercrossing" component={Border} />
							<Route exact path="/bordercrossing_loud" component={Border_Loud} />
							<Route exact path="/bordercrystals" component={BorderCrystals} />
							<Route exact path="/breakfastintijuana" component={Breakfast} />
							<Route exact path="/breakfastintijuana_loud" component={Breakfast_Loud} />
							<Route exact path="/breakin'feds" component={BreakingFeds} />
							<Route exact path="/brooklyn10-10" component={Brooklyn10} />
							<Route exact path="/brooklynbank" component={Brooklyn} />
							<Route exact path="/bulucsmansion" component={Bulucs} />
							<Route exact path="/bulucsmansion_loud" component={Bulucs_loud} />
							<Route exact path="/carshop" component={Carshop} />
							<Route exact path="/counterfeit" component={Couterfeit} />
							<Route exact path="/counterfeit_loud" component={Couterfeit_Loud} />
							<Route exacy path="/ckr" component={CKR} />
							<Route exact path="/diamondstore" component={DiamondStore} />
							<Route exact path="/diamondheist" component={DiamondHeist} />
							<Route exact path="/diamondheist_loud" component={DiamondHeist_Loud} />
							<Route exact path="/dragonheist" component={Dragon} />
							<Route exact path="/dragonheist_loud" component={Dragon_Loud} />
							<Route exact path="/electionday_day1" component={Election1} />
							<Route exact path="/electionday_day1_loud" component={Election1_Loud} />
							<Route exact path="/electionday_day2" component={Election2} />
							<Route exact path="/electionday_day2_loud" component={Election2_Loud} />
							<Route exact path="/electionday_day2c_loud" component={Election2c_Loud} />
							<Route exact path="/firestarter_day1" component={Fire1} />
							<Route exact path="/firestarter_day1_loud" component={Fire1_Loud} />
							<Route exact path="/firestarter_day2" component={Fire2} />
							<Route exact path="/firestarter_day2_loud" component={Fire2_Loud} />
							<Route exact path="/firestarter_day3" component={Fire3} />
							<Route exact path="/firestarter_day3_loud" component={Fire3_Loud} />
							<Route exact path="/fourstores" component={Four} />
							<Route exact path="/fwb" component={FWB} />
							<Route exact path="/fwb_loud" component={FWB_Loud} />
							<Route exact path="/framingframe_day1" component={Framing1} />
							<Route exact path="/framingframe_day1_loud" component={Framing1_Loud} />
							<Route exact path="/framingframe_day2" component={Framing2} />
							<Route exact path="/framingframe_day2_loud" component={Framing2_Loud} />
							<Route exact path="/framingframe_day3" component={Framing3} />
							<Route exact path="/framingframe_day3_loud" component={Framing3_Loud} />
							<Route exact path="/gobank" component={GoBank} />
							<Route exact path="/gobank_loud" component={GoBank_Loud} />
							<Route exact path="/ggc" component={GGC} />
							<Route exact path="/ggc_loud" component={GGC_Loud} />
							<Route exact path="/goatsimulator_day1" component={Goat1} />
							<Route exact path="/goatsimulator_day2" component={Goat2} />
							<Route exact path="/greenbridge" component={Green} />
							<Route exact path="/heatstreet" component={Heat} />
							<Route exact path="/hellsisland" component={Hells} />
							<Route exact path="/henrysrock" component={Henrys} />
							<Route exact path="/hostiletakeover" component={Hostile} />
							<Route exact path="/hotlinemiami_day1" component={Hotline1} />
							<Route exact path="/hotlinemiami_day2" component={Hotline2} />
							<Route exact path="/hoxtonbreakout_day1" component={Hoxton1} />
							<Route exact path="/hoxtonbreakout_day2" component={Hoxton2} />
							<Route exact path="/hoxtonrevenge" component={HoxRev} />
							<Route exact path="/hoxtonrevenge_loud" component={HoxRev_Loud} />
							<Route exact path="/jewelrystore" component={Jewelry} />
							<Route exact path="/jewelrystore_loud" component={Jewelry_Loud} />
							<Route exact path="/labrats" component={LabRats} />
							<Route exact path="/lostintransit" component={LostInTransit} />
							<Route exact path="/mallcrasher" component={Mallcrasher} />
							<Route exact path="/meltdown" component={Meltdown} />
							<Route exact path="/midland_ranch" component={Midland} />
							<Route exact path="/mountainmaster" component={MountainMaster} />
							<Route exact path="/mountainmaster_loud" component={MountainMaster_Loud} />
							<Route exact path="/murky" component={Murky} />
							<Route exact path="/nightclub" component={Nightclub} />
							<Route exact path="/nightclub_loud" component={Nightclub_Loud} />
							<Route exact path="/nomercy" component={Nomercy} />
							<Route exact path="/panicroom" component={Panic} />
							<Route exact path="/prisonnightmare" component={Prison} />
							<Route exact path="/rats_day1" component={Rats1} />
							<Route exact path="/rats_day2" component={Rats2} />
							<Route exact path="/rats_day3" component={Rats3} />
							<Route exact path="/rdh_day1" component={Reservoir1} />
							<Route exact path="/rdh_day2" component={Reservoir2} />
							<Route exact path="/shn" component={SafehouseNight} />
							<Route exact path="/shr" component={Safehouse} />
							<Route exact path="/sanmartínbank" component={SanMartin} />
							<Route exact path="/sanmartínbank_loud" component={SanMartin_Loud} />
							<Route exact path="/santasworkshop" component={SantasWork} />
							<Route exact path="/shacklethorne" component={Shacklethorne} />
							<Route exact path="/shacklethorne_loud" component={Shacklethorne_Loud} />
							<Route exact path="/shadowraid" component={Shadow} />
							<Route exact path="/scarfacemansion" component={Scarface} />
							<Route exact path="/scarfacemansion_loud" component={Scarface_Loud} />
							<Route exact path="/slaughterhouse" component={Slaughterhouse} />
							<Route exact path="/stealingxmas" component={StealingXmas} />
							<Route exact path="/thealessoheist" component={TheAlesso} />
							<Route exact path="/thealessoheist_loud" component={TheAlesso_Loud} />
							<Route exact path="/thebigbank" component={TheBigBank} />
							<Route exact path="/thebigbank_loud" component={TheBigBank_Loud} />
							<Route exact path="/tbh_day1" component={TheBikerHeist1} />
							<Route exact path="/tbh_day2" component={TheBikerHeist2} />
							<Route exact path="/thebombdockyard" component={TheBombDock} />
							<Route exact path="/thebombforest" component={TheBombForest} />
							<Route exact path="/thediamond" component={TheDiamond} />
							<Route exact path="/tup" component={TheUkrainian} />
							<Route exact path="/tup_loud" component={TheUkrainian_Loud} />
							<Route exact path="/thewhitehouse" component={TheWhiteHouse} />
							<Route exact path="/thewhitehouse_loud" component={TheWhiteHouse_Loud} />
							<Route exact path="/theyachtheist" component={Yacht} />
							<Route exact path="/tth" component={Train} />
							<Route exact path="/transport" component={Transport} />
							<Route exact path="/ukrainianjob" component={Ukrainian} />
							<Route exact path="/undercover" component={Undercover} />
							<Route exact path="/watchdogs_day1" component={Watchdogs1} />
							<Route exact path="/watchdogs_day2" component={Watchdogs2} />
							<Route exact path="/whitexmas" component={White} />
							<Route component={NoPage} />
						</Switch>
					</BrowserRouter>
					</Suspense>
				</>
			</ThemeProvider>
		);
	}
}

export default App;
