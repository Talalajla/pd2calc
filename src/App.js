import { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Paths
import Home from "./pages/home";
import Stealth from "./pages/stealth";
import Loud from "./pages/loud";
import Art from "./pages/heists/artgallery";
import Border from "./pages/heists/border";
import Bulucs from "./pages/heists/bulucs";
import Carshop from "./pages/heists/carshop";
import CookOff from "./pages/heists/cookoff";
import Dragon from "./pages/heists/dragon";
import Bank from "./pages/heists/bank";
import BigBank from "./pages/heists/bigbank";
import Murky from "./pages/heists/murky";
import Couterfeit from "./pages/heists/counterfeit";
import DiamondStore from "./pages/heists/diamondstore";
import DiamondHeist from "./pages/heists/diamondheist";
import Election1 from "./pages/heists/election_day1";
import Election2 from "./pages/heists/election_day2";
import FWB from "./pages/heists/fwb";
import GGC from "./pages/heists/ggc";
import HoxRev from "./pages/heists/hoxrev";
import Shadow from "./pages/heists/shadow";
import TheAlesso from "./pages/heists/thealessoheist";
import TheDiamond from "./pages/heists/thediamond";
import TheBombDock from "./pages/heists/thebombdock";
import TheUkrainian from "./pages/heists/theukrainianprisoner";
import Scarface from "./pages/heists/scarface";
import Shacklethorne from "./pages/heists/shacklethorne";
import GoBank from "./pages/heists/gobank";
import Jewelry from "./pages/heists/jewelry"
import Ukrainian from "./pages/heists/ukrainian";
import Nightclub from "./pages/heists/nightclub";
import Four from "./pages/heists/fourstores";
import Fire1 from "./pages/heists/firestarter_day1";
import Fire2 from "./pages/heists/firestarter_day2";
import Fire3 from "./pages/heists/firestarter_day3";
import Framing1 from "./pages/heists/framingframe_day1";
import Framing2 from "./pages/heists/framingframe_day2";
import Framing3 from "./pages/heists/framingframe_day3";
import Feds from "./pages/heists/breakinfeds";
import Breakfast from "./pages/heists/breakfast";
import SanMartin from "./pages/heists/sanmartin";
import Train from "./pages/heists/train";
import Yacht from "./pages/heists/yacht";
import WhiteHouse from "./pages/heists/thewhitehouse";

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
              <Route exact path="/cookoff" component={CookOff}/>
              <Route exact path="/artgallery" component={Art}/>
              <Route exact path="/bank" component={Bank}/>
              <Route exact path="/bordercrossing" component={Border}/>
              <Route exact path="/breakfastintijuana" component={Breakfast}/>
              <Route exact path="/breakin'feds" component={Feds}/>
              <Route exact path="/bigbank" component={BigBank}/>
              <Route exact path="/bulucsmansion" component={Bulucs}/>
              <Route exact path="/carshop" component={Carshop}/>
              <Route exact path="/counterfeit" component={Couterfeit}/>
              <Route exact path="/diamondstore" component={DiamondStore}/>
              <Route exact path="/diamondheist" component={DiamondHeist}/>
              <Route exact path="/dragonheist" component={Dragon}/>
              <Route exact path="/electionday_day1" component={Election1}/>
              <Route exact path="/electionday_day2" component={Election2}/>
              <Route exact path="/firestarter_day1" component={Fire1} />
              <Route exact path="/firestarter_day2" component={Fire2} />
              <Route exact path="/firestarter_day3" component={Fire3} />
              <Route exact path="/fourstores" component={Four} />
              <Route exact path="/framingframe_day1" component={Framing1} />
              <Route exact path="/framingframe_day2" component={Framing2} />
              <Route exact path="/framingframe_day3" component={Framing3} />
              <Route exact path="/fwb" component={FWB}/>
              <Route exact path="/ggc" component={GGC}/>
              <Route exact path="/gobank" component={GoBank}/>
              <Route exact path="/jewelrystore" component={Jewelry}/>
              <Route exact path="/hoxtonrevenge" component={HoxRev}/>
              <Route exact path="/murky" component={Murky}/>
              <Route exact path="/nightclub" component={Nightclub}/>
              <Route exact path="/sanmartínbank" component={SanMartin}/>
              <Route exact path="/shacklethorne" component={Shacklethorne}/>
              <Route exact path="/shadowraid" component={Shadow}/>
              <Route exact path="/scarfacemansion" component={Scarface}/>
              <Route exact path="/thealessoheist" component={TheAlesso}/>
              <Route exact path="/thebombdockyard" component={TheBombDock}/>
              <Route exact path="/thediamond" component={TheDiamond}/>
              <Route exact path="/theukrainianprisoner" component={TheUkrainian}/>
              <Route exact path="/thewhitehouse" component={WhiteHouse}/>
              <Route exact path="/theyachtheist" component={Yacht}/>
              <Route exact path="/transporttrainheist" component={Train}/>
              <Route exact path="/ukrainianjob" component={Ukrainian}/>
            </Switch>
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
