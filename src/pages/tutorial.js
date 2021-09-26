import React from "react";
import { HomeBtn, Main, TutTitle } from "../styles/tutorial";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";


const Tutorial = () => {        
    return (
        <Main>
            <TutTitle>Tutorial</TutTitle>
            <Carousel>
                <div>
                    <div>What is it?</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>You are on tutorial page. You can learn here how to use this calculator properly.</p></div>
                </div>
                <div>
                    <div>Let's start</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>At the beginning you need to select wheter you want to scout stealth or loud heists. Next step is to choose heist you're looking for. Search bar might be useful.</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>First and most important thing is to choose the difficulty of heist. You can do it by clicking individual skull (or dash sign if it's normal difficulty).</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>When difficulty is selected, you need to choose how mane players participated in heist and how many of them finished in custody. You can do it by clicking individual red/black square.</p></div>
                </div>
                <div>
                    <div>Required data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>And the last data, that is required is level&amp;infamy. When it comes to the infamy, you can do it by clicking and selecting option. And after that just enter your level in field below (0-100).</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>Now let's look at some optional data. First thing you might notice will be the piece of paper with requirements. First row is already selected, because it's related with completing the heist. Next rows are optional, empty fields can be filled with simple click, but if field includes a (default) number, then you can change value after click.</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>Now let's look at some optional data. First thing you might notice will be the piece of paper with requirements. First row is already selected, because it's related with completing the heist. Next rows are optional, empty fields can be filled with simple click, but if field includes a (default) number, then you can change value after click.</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>When requirements are done, you can select how many gage packages have you found during the heist. Just click to open select menu.</p></div>
                </div>
                <div>
                    <div>Optional data</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>Last optional data are bonuses. You can fill data by clicking and selecting values. Teamboosts are provided by weapon mods, perkdeck bonus is activated when you are using perkdeck with at least 4th level. Heat bonus depends on your frequency of finishing particular heist and the stealth bonus is given if you finished last heist in stealth.</p></div>
                </div>
                <div>
                    <div>Details</div>
                    <div><img src="https://via.placeholder.com/150"></img></div>
                    <div><p>If you have a good eye, there is a chance, that you will notice number above the heist photo. This is the JC level, that indicates anticipated level you should have to play this heist. If you have at least 11 levels below the JC level, you will lose some EXP.</p></div>
                </div>
                <div>
                    <div>That's all!</div>
                    <div>
                        <HomeBtn as={Link} to="/">Home →</HomeBtn>
                    </div>
                    <div><p>Now you can go back to home page and scout some heists. Enjoy it!</p></div>
                </div>
            </Carousel>
        </Main>
    );
}

export default Tutorial;