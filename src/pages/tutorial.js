import React from "react";
import { HomeBtn, Main, TutFinish, TutItems, TutSubTitle, TutTitle } from "../styles/tutorial";
import { Link } from "react-router-dom";
import tut1 from "../images/tutorial/tut1.jpg";
import tut2 from "../images/tutorial/tut2.png";
import tut3 from "../images/tutorial/tut3.png";
import tut4 from "../images/tutorial/tut4.png";
import tut5 from "../images/tutorial/tut5.png";
import tut6 from "../images/tutorial/tut6.png";
import tut7 from "../images/tutorial/tut7.png";
import tut8 from "../images/tutorial/tut8.png";
import tut9 from "../images/tutorial/tut9.png";
import tut10 from "../images/tutorial/tut10.png";


const Tutorial = () => {        
    return (
        <Main>
            <TutTitle>Tutorial</TutTitle>
            <TutSubTitle>
                <div><p>You are on tutorial page. You can learn here how to use this calculator properly.</p></div>
                <div><img src={tut1} alt="Main Page with questionmarks"></img></div>
            </TutSubTitle>
            <TutItems>
                <div>
                    <img src={tut2} alt="Choose category pic"/>
                    <div>
                        <p>At the beginning you need to select wheter you want to scout stealth or loud heists. Next step is to choose heist you're looking for. Search bar might be useful.</p>
                    </div>
                </div>
                <div>
                    <div><p>First and most important thing is to choose the difficulty of heist. You can do it by clicking individual skull (or dash sign if it's normal difficulty).</p></div>
                    <img src={tut3} alt="Difficulty tab"/>
                </div>
                <div>
                    <div><img src={tut4} alt="Players info papers"/></div>
                    <div><p>When difficulty is selected, you need to choose how many players participated in the heist and how many of them finished it in custody. You can do it by clicking individual red/black square.</p></div>
                </div>
                <div>
                    <div><p>And finally, you need to complete the level, infamy and the amount of experience points you have (approximately). As for infamy, you can do it by clicking and selecting the option. Then just enter your level in the box below (0-100) and set the % of experience you have on the circle. </p></div>
                    <div><img src={tut5} alt="Tablet with infamy and lvl"/></div>
                </div>
                <div>
                    <div><img src={tut6} alt="Requirements paper"/></div>
                    <div><p>Now let's look at some optional data. First thing you might notice will be the piece of paper with requirements. First row is already selected, because it's related with completing the heist. Next rows are optional, empty fields can be filled with simple click, but if field includes a (default) number, then you can change value after click.</p></div>
                </div>
                <div>
                    <div><p>When requirements are done, you can select how many Gage packages have you found during the heist. Just click to open select menu.</p></div>
                    <div><img src={tut7} alt="Gage bonus paper"/></div>
                </div>
                <div>
                    <div><img src={tut8} alt="Map bonuses paper"/></div>
                    <div><p>Last optional data are bonuses. You can fill data by clicking and selecting values. Teamboosts are provided by weapon mods, perkdeck bonus is activated when you are using perkdeck with at least 4th level. Heat bonus depends on your frequency of finishing particular heist and the stealth bonus is given if you finished last heist in stealth.</p></div>
                </div>
                <div>
                    <div><p>If you have a good eye, there is a chance, that you will notice number above the heist photo. This is the JC level, that indicates anticipated level you should have to play this heist. If the difference between you and JC level is at least 11 levels, you will lose some EXP.</p></div>
                    <div><img src={tut9} alt="JC indicator"/></div>
                </div>
                <div>
                    <div><img src={tut10} alt="PC with red button"/></div>
                    <div><p>It's almost done, all you have to do is to press the red button on the screen.</p></div>
                </div>
            </TutItems>
            <TutFinish>
                <div>That's all!</div>
                <div>
                    <HomeBtn as={Link} to="/">
                        <span>SCOUT!</span>
                    </HomeBtn>
                </div>
                <div><p>Now you can go back to home page and scout some heists. Enjoy it!</p></div>
            </TutFinish>
        </Main>
    );
}

export default Tutorial;