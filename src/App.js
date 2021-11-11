import { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Paths
import Home from "./pages/home";
import Stealth from "./pages/stealth";
import Loud from "./pages/loud";
import Tutorial from "./pages/tutorial";

import Aftershock from "./pages/heists/aftershock";
import Alaskan from "./pages/heists/alaskandeal";
import Art from "./pages/heists/artgallery";
import Art_Loud from "./pages/heists/art_loud";
import Bank from "./pages/heists/bank";
import BTM from "./pages/heists/btm";
import BigOil1 from "./pages/heists/bigoild_day1";
import BigOil2 from "./pages/heists/bigoild_day2";
import Birth from "./pages/heists/birthofsky";
import Black from "./pages/heists/blackcat";
import Black_Loud from "./pages/heists/blackcat_loud";
import Boiling from "./pages/heists/boilingpoint";
import Border from "./pages/heists/border";
import Border_Loud from "./pages/heists/border_loud";
import BorderCrystals from "./pages/heists/bordercrystals";
import Breakfast from "./pages/heists/breakfast";
import Breakfast_Loud from "./pages/heists/breakfast_loud";
import BreakingFeds from "./pages/heists/breakinfeds";
import Brooklyn10 from "./pages/heists/brooklyn1010";
import Brooklyn from "./pages/heists/brooklynbank";
import Bulucs from "./pages/heists/bulucs";
import Bulucs_loud from "./pages/heists/bulucs_loud";
import Carshop from "./pages/heists/carshop";
import CookOff from "./pages/heists/cookoff";
import Couterfeit from "./pages/heists/counterfeit";
import CKR from "./pages/heists/cursedkillroom";
import Dragon from "./pages/heists/dragon";
import Dragon_Loud from "./pages/heists/dragon_loud";
import DiamondHeist from "./pages/heists/diamondheist";
import DiamondHeist_Loud from "./pages/heists/diamondheist_loud";
import DiamondStore from "./pages/heists/diamondstore";
import Election1 from "./pages/heists/election_day1";
import Election1_Loud from "./pages/heists/election_day1_loud";
import Election2 from "./pages/heists/election_day2";
import Election2_Loud from "./pages/heists/election_day2_loud";
import Election2c_Loud from "./pages/heists/election_day2c_loud";
import Fire1 from "./pages/heists/firestarter_day1";
import Fire1_Loud from "./pages/heists/firestarter_day1_loud";
import Fire2 from "./pages/heists/firestarter_day2";
import Fire2_Loud from "./pages/heists/firestarter_day2_loud";
import Fire3 from "./pages/heists/firestarter_day3";
import Fire3_Loud from "./pages/heists/firestarter_day3_loud";
import FWB from "./pages/heists/fwb";
import FWB_Loud from "./pages/heists/fwb_loud";
import Four from "./pages/heists/fourstores";
import Framing1 from "./pages/heists/framingframe_day1";
import Framing1_Loud from "./pages/heists/framingframe_day1_loud";
import Framing2 from "./pages/heists/framingframe_day2";
import Framing2_Loud from "./pages/heists/framingframe_day2_loud";
import Framing3 from "./pages/heists/framingframe_day3";
import Framing3_Loud from "./pages/heists/framingframe_day3_loud";
import GoBank from "./pages/heists/gobank";
import GoBank_Loud from "./pages/heists/gobank_loud";
import GGC from "./pages/heists/ggc";
import GGC_Loud from "./pages/heists/ggc_loud";
import Goat1 from "./pages/heists/goat_day1";
import Goat2 from "./pages/heists/goat_day2";
import Green from "./pages/heists/green";
import Heat from "./pages/heists/heat";
import Hells from "./pages/heists/hells";
import Henrys from "./pages/heists/henryscock";
import Hotline1 from "./pages/heists/hotline_day1";
import Hotline2 from "./pages/heists/hotline_day2";
import Hoxton1 from "./pages/heists/hoxtonbreakout_day1";
import Hoxton2 from "./pages/heists/hoxtonbreakout_day2";
import HoxRev from "./pages/heists/hoxrev";
import HoxRev_Loud from "./pages/heists/hoxrev_loud";
import Jewelry from "./pages/heists/jewelry"
import Jewelry_Loud from "./pages/heists/jewelry_loud"
import LabRats from "./pages/heists/labrats";
import Mallcrasher from "./pages/heists/mallcrasher";
import Meltdown from "./pages/heists/meltdown";
import Murky from "./pages/heists/murky";
import Nightclub from "./pages/heists/nightclub";
import Nightclub_Loud from "./pages/heists/nightclub_loud";
import Nomercy from "./pages/heists/nomercy";
import Panic from "./pages/heists/panic";
import Rats1 from "./pages/heists/rats_day1";
import Rats2 from "./pages/heists/rats_day2";
import Rats3 from "./pages/heists/rats_day3";
import Reservoir1 from "./pages/heists/rdh_day1";
import Reservoir2 from "./pages/heists/rdh_day2";
import Prison from "./pages/heists/prison";
import SafehouseNight from "./pages/heists/safehousenight";
import Safehouse from "./pages/heists/safehouseraid";
import SanMartin from "./pages/heists/sanmartin";
import SanMartin_Loud from "./pages/heists/sanmartin_loud";
import SantasWork from "./pages/heists/santas";
import Scarface from "./pages/heists/scarface";
import Scarface_Loud from "./pages/heists/scarface_loud";
import Shacklethorne from "./pages/heists/shacklethorne";
import Shacklethorne_Loud from "./pages/heists/shacklethorne_loud";
import Slaughterhouse from "./pages/heists/slaughterhouse";
import StealingXmas from "./pages/heists/stealingxmas";
import Shadow from "./pages/heists/shadow";
import TheAlesso from "./pages/heists/thealessoheist";
import TheAlesso_Loud from "./pages/heists/thealessoheist_loud";
import TheBigBank from "./pages/heists/thebigbank";
import TheBigBank_Loud from "./pages/heists/thebigbank_loud";
import TheBikerHeist1 from "./pages/heists/thebikerheist_day1";
import TheBikerHeist2 from "./pages/heists/thebikerheist_day2";
import TheDiamond from "./pages/heists/thediamond";
import TheBombDock from "./pages/heists/thebombdock";
import TheBombForest from "./pages/heists/thebombforest";
import TheUkrainian from "./pages/heists/theukrainianprisoner";
import TheUkrainian_Loud from "./pages/heists/theukrainianprisoner_loud";
import TheWhiteHouse from "./pages/heists/thewhitehouse";
import TheWhiteHouse_Loud from "./pages/heists/thewhitehouse_loud";
import Train from "./pages/heists/train";
import Ukrainian from "./pages/heists/ukrainian";
import Undercover from "./pages/heists/undercover";
import Watchdogs1 from "./pages/heists/watchdogs_day1";
import Watchdogs2 from "./pages/heists/watchdogs_day2";
import White from "./pages/heists/whitexmas";
import Yacht from "./pages/heists/yacht";

import Nav from "./components/nav";

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <BrowserRouter >
            <Nav />
            <Switch>
              <Route exact path="/" component={Home}/> 
              <Route exact path="/stealth" component={Stealth}/>
              <Route exact path="/loud" component={Loud}/>
              <Route exact path="/tutorial" component={Tutorial}/>
              <Route exact path="/cookoff" component={CookOff}/>
              <Route exact path="/aftershock" component={Aftershock}/>
              <Route exact path="/alaskandeal" component={Alaskan}/>
              <Route exact path="/artgallery" component={Art}/>
              <Route exact path="/artgallery_loud" component={Art_Loud}/>
              <Route exact path="/bank" component={Bank}/>
              <Route exact path="/btm" component={BTM}/>
              <Route exact path="/bigoil_day1" component={BigOil1}/>
              <Route exact path="/bigoil_day2" component={BigOil2}/>
              <Route exact path="/birthofsky" component={Birth}/>
              <Route exact path="/blackcat" component={Black}/>
              <Route exact path="/blackcat_loud" component={Black_Loud}/>
              <Route exact path="/boilingpoint" component={Boiling}/>
              <Route exact path="/bordercrossing" component={Border}/>
              <Route exact path="/bordercrossing_loud" component={Border_Loud}/>
              <Route exact path="/bordercrystals" component={BorderCrystals}/>
              <Route exact path="/breakfastintijuana" component={Breakfast}/>
              <Route exact path="/breakfastintijuana_loud" component={Breakfast_Loud}/>
              <Route exact path="/breakin'feds" component={BreakingFeds}/>
              <Route exact path="/brooklyn10-10" component={Brooklyn10}/>
              <Route exact path="/brooklynbank" component={Brooklyn}/>
              <Route exact path="/bulucsmansion" component={Bulucs}/>
              <Route exact path="/bulucsmansion_loud" component={Bulucs_loud}/>
              <Route exact path="/carshop" component={Carshop}/>
              <Route exact path="/counterfeit" component={Couterfeit}/>
              <Route exacy path="/ckr" component={CKR}/>
              <Route exact path="/diamondstore" component={DiamondStore}/>
              <Route exact path="/diamondheist" component={DiamondHeist}/>
              <Route exact path="/diamondheist_loud" component={DiamondHeist_Loud}/>
              <Route exact path="/dragonheist" component={Dragon}/>
              <Route exact path="/dragonheist_loud" component={Dragon_Loud}/>
              <Route exact path="/electionday_day1" component={Election1}/>
              <Route exact path="/electionday_day1_loud" component={Election1_Loud}/>
              <Route exact path="/electionday_day2" component={Election2}/>
              <Route exact path="/electionday_day2_loud" component={Election2_Loud}/>
              <Route exact path="/electionday_day2c_loud" component={Election2c_Loud}/>
              <Route exact path="/firestarter_day1" component={Fire1} />
              <Route exact path="/firestarter_day1_loud" component={Fire1_Loud} />
              <Route exact path="/firestarter_day2" component={Fire2} />
              <Route exact path="/firestarter_day2_loud" component={Fire2_Loud} />
              <Route exact path="/firestarter_day3" component={Fire3} />
              <Route exact path="/firestarter_day3_loud" component={Fire3_Loud} />
              <Route exact path="/fourstores" component={Four} />
              <Route exact path="/fwb" component={FWB}/>
              <Route exact path="/fwb_loud" component={FWB_Loud}/>
              <Route exact path="/framingframe_day1" component={Framing1} />
              <Route exact path="/framingframe_day1_loud" component={Framing1_Loud} />
              <Route exact path="/framingframe_day2" component={Framing2} />
              <Route exact path="/framingframe_day2_loud" component={Framing2_Loud} />
              <Route exact path="/framingframe_day3" component={Framing3} />
              <Route exact path="/framingframe_day3_loud" component={Framing3_Loud} />
              <Route exact path="/gobank" component={GoBank}/>
              <Route exact path="/gobank_loud" component={GoBank_Loud}/>
              <Route exact path="/ggc" component={GGC}/>
              <Route exact path="/ggc_loud" component={GGC_Loud}/>
              <Route exact path="/goatsimulator_day1" component={Goat1}/>
              <Route exact path="/goatsimulator_day2" component={Goat2}/>
              <Route exact path="/greenbridge" component={Green}/>
              <Route exact path="/heatstreet" component={Heat}/>
              <Route exact path="/hellsisland" component={Hells}/>
              <Route exact path="/henrysrock" component={Henrys}/>
              <Route exact path="/hotlinemiami_day1" component={Hotline1}/>
              <Route exact path="/hotlinemiami_day2" component={Hotline2}/>
              <Route exact path="/hoxtonbreakout_day1" component={Hoxton1}/>
              <Route exact path="/hoxtonbreakout_day2" component={Hoxton2}/>
              <Route exact path="/hoxtonrevenge" component={HoxRev}/>
              <Route exact path="/hoxtonrevenge_loud" component={HoxRev_Loud}/>
              <Route exact path="/jewelrystore" component={Jewelry}/>
              <Route exact path="/jewelrystore_loud" component={Jewelry_Loud}/>
              <Route exact path="/labrats" component={LabRats}/>
              <Route exact path="/mallcrasher" component={Mallcrasher}/>
              <Route exact path="/meltdown" component={Meltdown}/>
              <Route exact path="/murky" component={Murky}/>
              <Route exact path="/nightclub" component={Nightclub}/>
              <Route exact path="/nightclub_loud" component={Nightclub_Loud}/>
              <Route exact path="/nomercy" component={Nomercy}/>
              <Route exact path="/panicroom" component={Panic}/>
              <Route exact path="/prisonnightmare" component={Prison}/>
              <Route exact path="/rats_day1" component={Rats1}/>
              <Route exact path="/rats_day2" component={Rats2}/>
              <Route exact path="/rats_day3" component={Rats3}/>
              <Route exact path="/rdh_day1" component={Reservoir1}/>
              <Route exact path="/rdh_day2" component={Reservoir2}/>
              <Route exact path="/shn" component={SafehouseNight}/>
              <Route exact path="/shr" component={Safehouse}/>
              <Route exact path="/sanmartínbank" component={SanMartin}/>
              <Route exact path="/sanmartínbank_loud" component={SanMartin_Loud}/>
              <Route exact path="/santasworkshop" component={SantasWork}/>
              <Route exact path="/shacklethorne" component={Shacklethorne}/>
              <Route exact path="/shacklethorne_loud" component={Shacklethorne_Loud}/>
              <Route exact path="/shadowraid" component={Shadow}/>
              <Route exact path="/scarfacemansion" component={Scarface}/>
              <Route exact path="/scarfacemansion_loud" component={Scarface_Loud}/>
              <Route exact path="/slaughterhouse" component={Slaughterhouse}/>
              <Route exact path="/stealingxmas" component={StealingXmas}/>
              <Route exact path="/thealessoheist" component={TheAlesso}/>
              <Route exact path="/thealessoheist_loud" component={TheAlesso_Loud}/>
              <Route exact path="/thebigbank" component={TheBigBank}/>
              <Route exact path="/thebigbank_loud" component={TheBigBank_Loud}/>
              <Route exact path="/tbh_day1" component={TheBikerHeist1}/>
              <Route exact path="/tbh_day2" component={TheBikerHeist2}/>
              <Route exact path="/thebombdockyard" component={TheBombDock}/>
              <Route exact path="/thebombforest" component={TheBombForest}/>
              <Route exact path="/thediamond" component={TheDiamond}/>
              <Route exact path="/tup" component={TheUkrainian}/>
              <Route exact path="/tup_loud" component={TheUkrainian_Loud}/>
              <Route exact path="/thewhitehouse" component={TheWhiteHouse}/>
              <Route exact path="/thewhitehouse_loud" component={TheWhiteHouse_Loud}/>
              <Route exact path="/theyachtheist" component={Yacht}/>
              <Route exact path="/tth" component={Train}/>
              <Route exact path="/ukrainianjob" component={Ukrainian}/>
              <Route exact path="/undercover" component={Undercover}/>
              <Route exact path="/watchdogs_day1" component={Watchdogs1}/>
              <Route exact path="/watchdogs_day2" component={Watchdogs2}/>
              <Route exact path="/whitexmas" component={White}/>
            </Switch>
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
