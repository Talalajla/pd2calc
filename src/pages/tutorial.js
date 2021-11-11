import React from "react";
import { HomeBtn, Main, TutTitle } from "../styles/tutorial";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
import tut1 from "../images/tutorial/tut1.jpg";
import tut2 from "../images/tutorial/tut2.jpg";
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
            <Carousel>
                <div>
                    <div>What is it?</div>
                    <div><img src={tut1}></img></div>
                    <div><p>You are on tutorial page. You can learn here how to use this calculator properly.</p></div>
                </div>
                <div>
                    <div>Let's start</div>
                    <div><img src={tut2}></img></div>
                    <div><p>At the beginning you need to select wheter you want to scout stealth or loud heists. Next step is to choose heist you're looking for. Search bar might be useful.</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src={tut3}></img></div>
                    <div><p>First and most important thing is to choose the difficulty of heist. You can do it by clicking individual skull (or dash sign if it's normal difficulty).</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src={tut4}></img></div>
                    <div><p>When difficulty is selected, you need to choose how many players participated in the heist and how many of them finished it in custody. You can do it by clicking individual red/black square.</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src={tut5}></img></div>
                    <div><p>And the last data, that is required is level&amp;infamy. When it comes to the infamy, you can do it by clicking and selecting an option. And after that just enter your level in field below (0-100).</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src={tut6}></img></div>
                    <div><p>Now let's look at some optional data. First thing you might notice will be the piece of paper with requirements. First row is already selected, because it's related with completing the heist. Next rows are optional, empty fields can be filled with simple click, but if field includes a (default) number, then you can change value after click.</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src={tut7}></img></div>
                    <div><p>When requirements are done, you can select how many Gage packages have you found during the heist. Just click to open select menu.</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src={tut8}></img></div>
                    <div><p>Last optional data are bonuses. You can fill data by clicking and selecting values. Teamboosts are provided by weapon mods, perkdeck bonus is activated when you are using perkdeck with at least 4th level. Heat bonus depends on your frequency of finishing particular heist and the stealth bonus is given if you finished last heist in stealth.</p></div>
                </div>
                <div>
                    <div>Details</div>
                    <div><img src={tut9}></img></div>
                    <div><p>If you have a good eye, there is a chance, that you will notice number above the heist photo. This is the JC level, that indicates anticipated level you should have to play this heist. If the difference between you and JC level is at least 11 levels, you will lose some EXP.</p></div>
                </div>
                <div>
                    <div>Last step</div>
                    <div><img src={tut10}/></div>
                    <div><p>It's almost done, all you have to do is to press the red button on the screen.</p></div>
                </div>
                <div>
                    <div>That's all!</div>
                    <div>
                        <HomeBtn as={Link} to="/">
                            <span>→ → →</span>
                            <span>Go Home</span>
                            <span>→ → →</span>
                        </HomeBtn>
                    </div>
                    <div><p>Now you can go back to home page and scout some heists. Enjoy it!</p></div>
                </div>
            </Carousel>
        </Main>
    );
}

export default Tutorial;