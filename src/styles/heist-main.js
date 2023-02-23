import styled from "styled-components";
import note from "../images/note.svg";
import note2 from "../images/note2.svg";
import note3 from "../images/note3.svg";
import note4 from "../images/note4.svg";
import cb from "../images/checkbox1.svg";
import cb2 from "../images/checkbox2.svg";
import cb3 from "../images/checkbox3.svg";
import cb4 from "../images/checkbox4.svg";
import cbChecked from "../images/checkbox1checked.svg";
import cbChecked2 from "../images/checkbox2checked.svg";
import cbChecked3 from "../images/checkbox3checked.svg";
import cbChecked4 from "../images/checkbox4checked.svg";
import cbBlack from "../images/checkbox-black.svg";
import cbBlack2 from "../images/checkbox-black2.svg";
import cbBlack3 from "../images/checkbox-black3.svg";
import cbBlack4 from "../images/checkbox-black4.svg";
import cbBlackChecked from "../images/checkbox-blackChecked.svg";
import cbBlackChecked2 from "../images/checkbox-blackChecked2.svg";
import cbBlackChecked3 from "../images/checkbox-blackChecked3.svg";
import cbBlackChecked4 from "../images/checkbox-blackChecked4.svg";
import cbGreen from "../images/checkboxGreen.svg";
import cbGreenChecked from "../images/checkboxGreenchecked.svg";
import wood from "../images/wooden.jpg";
import clipMetal from "../images/clip.svg";
import skull1 from "../images/skull1.png";
import skull2 from "../images/skull2.png";
import skull3 from "../images/skull3.png";
import skull4 from "../images/skull4.png";
import circlePick from "../images/circle-pick.svg";
import polaroid from "../images/polaroid.png";
import tape from "../images/tape.png";
import tape2 from "../images/tape2.png";
import holder from "../images/holder.svg";
import holderBot from "../images/holder_bottom.svg";
import infinite from "../images/infinite.png";
import desk from "../images/desk2.png";

export const Content = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px; 
    font-family: "Permanent Marker";
`;

export const Main = styled.div`
    min-height: 70vh;
    width: 100%;
    position: relative;
    display: flex;

    ${({theme}) => theme.resolutions.bigScreen} {
        width: 1920px;
        margin: 0 auto;
    }

    ${({theme}) => theme.resolutions.tablet} {
        flex-direction: column;
    }

    ${({theme}) => theme.resolutions.lowHeight} {
        gap: 50px;
    }
`;

export const Main2 = styled.div`
    width: 100%;
    position: relative;
    display: flex;

    ${({theme}) => theme.resolutions.bigScreen} {
        width: 1920px;
        margin: 0 auto;
    }

    ${({theme}) => theme.resolutions.tablet} {
        flex-direction: column;
        min-height: 50vh;
        padding-bottom: 50px;
    }
`;

export const Main3 = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;

    ${({theme}) => theme.resolutions.tablet} {
        height: 100vh;
    }
`;

export const RequireNotes = styled.div`
    width: 40vmin;
    min-height: 50vmin;
    position: relative;
    background-color: #eee;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    display: flex;

    ${({theme}) => theme.resolutions.shrinkObj} {
        width: 35vmin;
        min-height: 45vmin;
    }

    ${({theme}) => theme.resolutions.tablet} {
        min-height: 400px;
        width: 300px;
    }

    ::before, ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 97%;
        background-color: #fff;
        z-index: -2;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }

    ::before {
        top: -2px;
        left: -2px;
        transform: rotate(-2deg);
    }

    ::after {
        top: 1px;
        left: 0;
        transform: rotate(2deg);
    }
    
    table {
        padding: 15px;
        width: 100%;
        border-collapse: collapse;
        font-family: 'Calligraffitti', cursive;

        th {
            transform: rotate(1deg);
        }
        
        th, td {
            padding: 5px;
            border: 1px solid rgba(0,0,0,0.3);

            :first-child {
                border-left: 0;
            }

            :last-child {
                border-right: 0;
            }
        }

        th {
            font-weight: bold;
        }

        tr {

            :first-child {
                th {
                    border-top: 0;
                }
            }
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }
    }
`;

export const Tape = styled.div`
    width: 100%;

    ::before, ::after {
        content: '';
        display: block;
        position: absolute;
        width: 23vmin;
        height: 30px;
        background-color: rgba(0,0,0,0.1);
    }

    ::before {
        right: 0;
        top: 0;
        transform: translate(30%, 10%) rotate(45deg);
    }

    ::after {
        bottom: 0;
        left: 0;
        transform: translate(-30%, -50%) rotate(30deg);
        width: 25vmin;
    } 
`;


export const PhotoBox = styled.div`
    width: 45%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    order: 1;

    ${({theme}) => theme.resolutions.lowerHeight} {
        min-height: 100vh !important;
    }


    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        min-height: 70vh;
        order: 3;
    }
`;

export const DiffBox = styled.div`
    width: 27.5%;
    position: relative;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({theme}) => theme.resolutions.lowestHeight} {
        height: 150vh !important;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        min-height: 70vh;
    }
`;

export const ReqBox = styled.div`
    width: 27.5%;
    position: relative;
    order: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({theme}) => theme.resolutions.lowestHeight} {
        height: 150vh !important;
    }

    ${({theme}) => theme.resolutions.lowerHeight} {
        min-height: 100vh !important;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        min-height: 70vh;
        order: 1;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        top: 40px;
    }
`;

export const Players = styled.div`
    height: 55vmin;
    width: 30vmin;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${({theme}) => theme.resolutions.lowestHeight} {
        height: 300px;
        width: 160px;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        height: 300px;
        width: 160px;
    }
`;

export const Rest = styled.div`
    height: 55vmin;
    width: 30vmin;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${({theme}) => theme.resolutions.lowestHeight} {
        height: auto;
        width: auto;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        height: auto;
        width: auto;
    }
`;

export const StickyPaper = styled.div`
    width: 95%;
    height: 95%;
    background: url(${note});
    background-size: cover;
    filter: drop-shadow(0 0 3px #000);
    z-index: 3;
`;

export const StickyTitle = styled.p`
    text-align: center;
    font-size: 3vmin;
    color: ${({theme}) => theme.colors.crew};

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 15px;
    }
`;

export const CrewCheckboxes = styled.div`
    display: flex;
    width: 95%;
    padding: 0 3px;
    justify-content: center;
    gap: 15px;

    ${({theme}) => theme.resolutions.photoBr} {
        width: 80%;
        margin: auto;
    }

    ${({theme}) => theme.resolutions.tablet} {
        gap: 5px;
    }

    img {
        width: 20%;
        transform: skew(5deg);
    }
`;

export const CrewLabel = styled.label`
    width: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;

    ::after {
        position: absolute;
        bottom: -30px;
        text-align: center;
        font-size: 18px;
        color: ${({theme}) => theme.colors.crew};
    }

    :nth-child(1)::after { content: '1'; }
    :nth-child(2)::after { content: '2'; }
    :nth-child(3)::after { content: '3'; }
    :nth-child(4)::after { content: '4'; }
`;

export const CrewRadio = styled.input.attrs({type: 'radio', name: 'crew'})`
    display: none;
    opacity: 0;

    :checked~div {
        background: ${({num}) => {
        if(num === "1") return `url(${cbChecked}) center/cover no-repeat`
        else if (num === "2") return `url(${cbChecked2}) center/cover no-repeat`
        else if (num === "3") return `url(${cbChecked3}) center/cover no-repeat`
        else if (num === "4") return `url(${cbChecked4}) center/cover no-repeat`
    }};
    }
`;

export const CrewBox = styled.div`
    width: 4vmin;
    height: 4vmin;
    min-width: 20px;
    min-height: 20px;
    background: ${({num}) => {
        if(num === "1") return `url(${cb}) center/cover no-repeat`
        else if (num === "2") return `url(${cb2}) center/cover no-repeat`
        else if (num === "3") return `url(${cb3}) center/cover no-repeat`
        else if (num === "4") return `url(${cb4}) center/cover no-repeat`
    }};

    ${({theme}) => theme.resolutions.photoBr} {
        width: 20px;
        height: 20px;
    }
`;

export const GageNote = styled(StickyPaper)`
    position: relative;
    z-index: 2;
    height: 30vmin;
    width: 28vmin;
    background: url(${note2}) center/cover no-repeat;
    transform: rotate(-15deg);
    transform-origin: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        position: relative;
        left: -1vmin;
        font-size: 3vmin;

        ${({theme}) => theme.resolutions.photoBr} {
            font-size: 15px;
        }
    }

    ${({theme}) => theme.resolutions.photoBr} {
        right: 5% !important;
        width: 160px;
        height: 150px;
    }

    ${({theme}) => theme.resolutions.lowestHeight} {
        width: 160px;
        height: 150px;
    }
`;

export const GageLabel = styled.label`
    user-select: none;
    transform: skewX(5deg);
    display: flex;
    font-size: 3.5vmin;
    color: ${({theme}) => theme.colors.crew };
    position: relative;
    left: -5px;


    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 15px;
    }
`;


export const GageBox = styled.div`
    height: 75px;
    width: 75px;
    background: url(${cb}) center/cover;
`;

export const GageSelect = styled.select`
    border: 0;
    background: none;
    width: 5vmin;
    appearance: textfield;
    font-size: 3.5vmin;
    color: ${({theme}) => theme.colors.crew };
    font-family: "Permanent Marker", sans-serif;
    appearance: none;
    text-align: center;
    font-weight: bold;


    ${({theme}) => theme.resolutions.photoBr} {
        width: 25px;
        font-size: 15px;
    }
`;

/*
? CLIP
*/

export const Clip = styled.div`
    height: 50vmin;
    width: 40vmin;
    background: url(${wood}) center/cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 3px black;
    z-index: 1;

    ${({theme}) => theme.resolutions.shrinkObj} {
        height: 45vmin;
        width: 35vmin;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 300px;
        height: 400px;
    }

`;

export const ClipPaper = styled.div`
    height: 90%;
    width: 90%;
    background: #eee;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ClipTitle = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.colors.crew};
    font-size: 4vmin;

    ${({theme}) => theme.resolutions.shrinkObj} {
        font-size: 3.5vmin;
    }

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 40px !important;
    }
`;

export const ClipMetal = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${clipMetal}) no-repeat center;
    filter: drop-shadow(0 0 1px black);
`;

export const Difficulty = styled.div`
    display: grid;
    width: 80%;
    margin: 0 auto;
    height: 50px;
    grid-template-columns: 1fr 9fr;
    gap: 15px;

`;

export const Skulls = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    gap: 10px;
`;

export const Normal = styled.div`
    height: 5px;
    background-color: #DBB723;
    border-radius: 10px;
    align-self: center;
`;

export const Skull = styled.div`
    height: 100%;
    background: url(${skull1}) center/contain no-repeat;
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.8));
`;

export const Skull2 = styled(Skull)`
    background: url(${skull2}) center/contain no-repeat;
`;

export const Skull3 = styled(Skull)`
    background: url(${skull3}) center/contain no-repeat;
`;

export const Skull4 = styled(Skull)`
    background: url(${skull4}) center/contain no-repeat;
`;

export const DiffLabel = styled.label`
    height: 100%;
    flex: 1;
    vertical-align: center;
    display: grid;
    cursor: pointer;
    position: relative;
`;
export const DiffRadio = styled.input.attrs({type: 'radio', name: 'diff'})`
    display: none;
    opacity: 0;

    :checked+div {
        display: block;
    }
`;

export const CirclePick = styled.div`
    position: absolute;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    background: url(${circlePick}) center/contain no-repeat;
    display: none;
`;

export const DiffName = styled.div`
    font-size: ${({font}) => font ? "4vmin": "5vmin"};
    color: ${({theme}) => theme.colors.crew};
    text-align: center;
    margin: auto;
    position: relative;
    top: -20px;
    transform: rotate(20deg);

    ${({theme}) => theme.resolutions.shrinkObj} {
        font-size: 3.5vmin;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: ${({font}) => font ? "25px": "30px"};
    }
`;

export const DiffUnderScore = styled.img`
    position: absolute;
    bottom: ${({lower})=> lower ?"-30px":"-20px"};
    left: 0;
    width: 100%;
`;

export const PolaroidFrame = styled.div`
    position: relative;
    transform: scale(1.2) rotate(5deg);
    width: 19vmin;
    height: 25vmin;
    background: url(${polaroid}) center/cover no-repeat;
    display: grid;
    grid-template-rows: 1fr auto;
    place-items: center;

    ${({theme}) => theme.resolutions.photoBr} {
        width: 105px;
        height: 130px;
        right: 5% !important;
    }

    ${({theme}) => theme.resolutions.lowestHeight} {
        width: 105px;
        height: 130px;
        right: 5% !important;
    }
`;

export const PolaroidPhoto = styled.img`
    position: relative;
    padding: 1.4vmin 0.2vmin 5.7vmin 0.1vmin;
    height: 100%;
    width: 86.5%;
    filter: grayscale(90%);

    ${({theme}) => theme.resolutions.lowestHeight} {
        padding: 8px 1px 31px .5px;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        padding: 8px 1px 31px .5px;
    }
`;

export const PolaroidTitle = styled.div`
    position: absolute;
    bottom: 10px;
    text-align: center;
    padding-bottom: 1.5vmin;
    font-size: 1.5vmin;
    color: #919083;
    text-shadow: 0 0 1px rgba(0,0,0,0.5);

    ${({theme}) => theme.resolutions.lowestHeight} {
        font-size: 10px;
        padding-bottom: 2px;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 10px;
        padding-bottom: 2px;
    }
`;

export const JC = styled.div`
    position: absolute;
    top: 1vmin;
    left: -3vmin;
    width: 10vmin;
    height: 3vmin;
    background: url(${tape});
    z-index: 100;
    transform: rotate(-40deg);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vmin;
    padding-left: 10px;
    font-size: 1.5vmin;
    color: rgba(0,0,0,0.6);
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));

    ${({theme}) => theme.resolutions.phone} {
        width: 12vmin;
        left: -5vmin;
        top: 1.5vmin;
        padding-left: 15px;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        left: -25px;
        width: 60px;
        height: 15px;
    }

    ${({theme}) => theme.resolutions.lowestHeight} {
        left: -25px;
        width: 60px;
        height: 15px;
    }
`;

export const Tape2 = styled.div`
    background: url(${tape2}) center/contain no-repeat;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%,-50%) rotate(80deg) skewX(-10deg) ;
    width: 10vmin;
    height: 5vmin;
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));

    ${({theme}) => theme.resolutions.lowestHeight} {
        display: none;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        height: 25px;
        width: 50px;
        bottom: -30px;
        left: 55%;
    }
`;

export const JailNote = styled(StickyPaper)`
    top: auto;
    bottom: 0;
    left: 0;
    background: url(${note3}) center/cover no-repeat;
    transform: rotate(30deg) translateX(40px);
    z-index: 1;
    height: 95%;
    width: 95%;
`;
export const JailTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 2vmin;
    padding: 2vmin;
    color: #000;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 12.5px;
    }
`;

export const JailLabel = styled(CrewLabel)`
    transform: none;

    ::after { color: ${({theme}) => theme.colors.jail};}

    :nth-child(1)::after { content: '0'; }
    :nth-child(2)::after { content: '1'; }
    :nth-child(3)::after { content: '2'; }
    :nth-child(4)::after { content: '3'; }
`;

export const JailBox = styled(CrewBox)`
    background: ${({num}) => {
        if(num === "1") return `url(${cbBlack}) center/contain no-repeat`
        else if (num === "2") return `url(${cbBlack2}) center/contain no-repeat`
        else if (num === "3") return `url(${cbBlack3}) center/contain no-repeat`
        else if (num === "4") return `url(${cbBlack4}) center/contain no-repeat`
    }};
`;

export const JailRadio = styled.input.attrs({type: 'radio', name: 'jail'})`
    display: none;
    opacity: 0;

    :checked~div {
        background: ${({num}) => {
            if(num === "1") return `url(${cbBlackChecked}) center/contain no-repeat`
            else if (num === "2") return `url(${cbBlackChecked2}) center/contain no-repeat`
            else if (num === "3") return `url(${cbBlackChecked3}) center/contain no-repeat`
            else if (num === "4") return `url(${cbBlackChecked4}) center/contain no-repeat`
        }};
    }
`;


/*
?   BONUS
*/

export const BonusBox = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    min-height: 50vh;
    padding: 10px;
    position: relative;

    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        min-height: 300px;
    }
`;

export const BonusNote = styled.div`
    background: url(${note4}) center/contain no-repeat;
    height: 350px;
    width: 550px;
    position: relative;
    top: -50px;
    transform: rotate(-20deg);
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));

    p {
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        font-size: 35px;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 400px;
        max-height: 250px;
        top: -20%;

        p {
            font-size: 20px;
            top: 10px;
        }
    }

    ${({theme}) => theme.resolutions.photoBr} {
        width: 300px;
        max-height: 200px;
        font-size: 15px;
        top: auto;
    }
`;

export const BoostLabels = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    position: absolute;
    bottom: 60px;
    left: 40px;

    ${({theme}) => theme.resolutions.tablet} {
        bottom: 30px;
        left: 25px;
    }
`;

export const BoostLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    letter-spacing: .5px;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 12.5px;
    }
`;
export const BoostTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: ${({theme}) => theme.colors.boost};
    position: absolute;
    left: 12.5%;
    top: 30%;
    font-weight: bold;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 15px;
    }
`;
export const BoostSelect = styled.select.attrs({ name: 'boost'})`
    border: none;
    appearance: none;
    background: none;
    font-size: 30px;
    width: 25px;
    font-family: "Permanent marker", sans-serif;
    color: ${({theme}) => theme.colors.boost};
    cursor: pointer;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 20px;
    }
`;

export const BoostCheckbox = styled.input.attrs({type: 'checkbox', name: 'perk'})`
    opacity: none;
    display: none;

    :checked+div {
        background: url(${cbGreenChecked}) center/cover;
    }
`;

export const BoostCheckboxStyle = styled.div`
    background: url(${cbGreen}) center/cover;
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5)) invert(42%) sepia(97%) saturate(1575%) hue-rotate(126deg) brightness(93%) contrast(86%);
    cursor: pointer;

    ${({theme}) => theme.resolutions.tablet} {
        width: 30px;
        height: 30px;
    }
`;

export const HeatTitle = styled.div`
    align-items: center;
    position: absolute;
    left: 47.5%;
    bottom: 35%;
    font-size: 20px;
    color: ${({theme}) => theme.colors.heat};
    letter-spacing: 1px;
    font-weight: bold;


    ${({theme}) => theme.resolutions.tablet} {
        font-size: 17.5px;
        left: 47.5%;
        bottom: 35%;
    }

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 15px;
    }
`;

export const HeatLabel = styled.label`
    position: absolute;
    left: 50%;
    top: 40%;
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const HeatInput = styled.input.attrs({type: 'number', name: 'heat'})`
    color: ${({theme}) => theme.colors.heat};
    font-size: 30px;
    appearance: textfield;
    width: 60px;
    border: none;
    background: none;
    font-family: "Permanent marker";
    cursor: pointer;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 20px;
    }
`;

export const StealthTitle = styled.div`
    position: absolute;
    right: 11.5%;
    top: 35%;
    font-size: 25px;
    color: ${({theme}) => theme.colors.stealth};
    font-weight: bold;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 17.5px;
        right: 10%;
        top: 35%;
    }
`;

export const StealthSelect = styled.select`
    color: ${({theme}) => theme.colors.stealth};
    border: 0;
    background: none;
    appearance: none;
    font-family: "Permanent marker";
    position: absolute;
    right: 15%;
    top: 50%;
    font-size: 30px;
    cursor: pointer;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 20px;
        right: 12.5%;
    }
`;
export const StealthOption = styled.option`
    border: 0;
    outline: 0;
    text-align: center;
    font-family: "Permanent marker", sans-serif;
`;

/*
?   LVL
*/
export const LVLBox = styled.div`
    position: relative;
    width: 50%;
    
    ${({theme}) => theme.resolutions.smallPhone} {
        transform: scale(0.7);
    }
    
    ${({theme}) => theme.resolutions.lowHeight} {
        min-height: 150vh !important;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        display: flex;
        justify-content: center;
        min-height: 70vh;
    }
`;

export const Holder = styled.img.attrs({src: `${holder}`})`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
    z-index: 2;
`;

export const HolderBottom = styled.img.attrs({src: `${holderBot}`})`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
    z-index: 2;
`;

export const Device = styled.div`
    width: 382.5px;
    height: 227.5px;
    background: #8f8f8f;
    position: absolute;
    box-shadow: 0 0 3px black;
    z-index: 1;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;

    ${({theme}) => theme.resolutions.tablet} {
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Display = styled.div`
    width: 90%;
    height: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    color: #eee;
    font-family: "Source Code Pro", sans-serif;
    box-shadow: 0 0 1px rgba(255,255,255, 0.3);

`;

export const Camera = styled.div`
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #010101;
    border: 1px solid #aaa;
`;                        

export const DisplayTitle = styled.div`
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: "Source Code Pro", sans-serif;
;
    padding: 5px;
`;

export const DisplayInfo = styled.div`
    display: flex;
    padding: 5px 10px;
    gap: 20px;
`;
export const DisplayLVL = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 180px;

    &>div {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 10px;
        width: 100%;

        &>* {
            flex: 1;
        }

        :last-of-type {
            display: flex;
            justify-content: center;
        }
    }
`;
export const DisplayCircle = styled.div`
    code {
        font-size: 24px;
        position: relative;
        right: 3px;
    }
`;
export const DisplaySliderTitle = styled.div`
    width: 100%;
    height: 45px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    img {
        margin-left: 25px;
        width: 80px;
    }
`;
export const DisplayBGTop = styled.div`
    width: 100%;
    height: 5%;
    background: #808080;
    display: grid;
    grid-template-columns: auto auto auto 1fr auto;
    padding-left: 5px;
    gap: 3px;
`;

export const DisplayDot = styled.div`
    width: 5px;
    height: 5px;
    background: #d1d1d1;
    border-radius: 50%;
    place-self: center;
`;

export const DisplayClose = styled.div`
    place-self: center end;

    div {
        width: 5px;
        height: 1px;
        background: #d1d1d1;
        position: relative;
        
        :first-of-type {
            transform: translateY(-50%) rotate(45deg);
            top: 1px;
        }
        :last-of-type {
            transform: translateY(-50%) rotate(-45deg);
        }
    }
`;

export const DisplayMenu = styled.div`
    height: 95%;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    background: rgba(255,255,255,.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #fff;
        position: relative;
        left: -1px;

        :first-of-type {
            border-width: 2px;
            height: 7px;
            width: 7px;
            transform: rotate(-135deg);
            border-radius: 0;
            border-top: none;
            border-left: none;
        }

        :last-of-type {
            border-width: 2px;
            height: 7px;
            width: 7px;
            transform: rotate(-135deg);
            border-radius: 0;
            border-bottom: none;
            border-right: none;
        }
    }
`;

export const Nickname = styled.input`
    font-family: "Source Code Pro", sans-serif;
    border: 2px solid #eee;
    border-radius: 5px;
    background: rgba(0,0,0,0.3);
    color: #eee;
    width: 100%;
`;
export const Infamy = styled.select`
    font-family: "Source Code Pro", sans-serif;
    border: 2px solid #eee;
    border-radius: 5px;
    background: none;
    color: #eee;
    cursor: pointer;

    option {
        color: #000;
    }
`;
export const Lvl = styled.input.attrs({type: 'number', name: 'lvl'})`
    font-family: "Source Code Pro", sans-serif;
    border: 2px solid #eee;
    border-radius: 5px;
    background: none;
    color: #eee;
    appearance: textfield;
    width: 100%;
`;

export const SendBox = styled.div`
    height: calc(100% - 45px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled.div`
    margin-top: 25px;
    padding: 10px 20px;
    background-color: #BDBDBD;
    box-shadow: 0 0 5px rgba(0,0,0,.75);
    cursor: default;
`;

export const Frame = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(27,27,27);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:  rgba(0,0,0,0.15) 0 -5px 5px 3px,
  rgba(0,0,0,0.15) 0 5px 5px 3px,
  rgba(30,50,90,0.3) 0 5px 6px 4px,
  inset 0 0.25rem 0.15rem rgba(138,138,138,0.2);
`;

export const InnerFrame = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #000;
    box-shadow: inset 0 20px 10px rgba(199,199,199,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Send = styled.input.attrs({type: 'submit', value: ''})`
    width: 80px;
    height: 80px;
    background-image:
    -webkit-radial-gradient(50% 0%, 8% 50%, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0) 100%),
    -webkit-radial-gradient(50% 100%, 12% 50%, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%),
    -webkit-radial-gradient(0% 50%, 50% 7%, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%),
    -webkit-radial-gradient(100% 50%, 50% 5%, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0) 100%),
    -webkit-repeating-radial-gradient(50% 50%, 100% 100%, rgba(44,0,0,0) 0%, rgba(44,0,0,0) 3%,rgba(44,0,0,0) 3.5%),
    -webkit-repeating-radial-gradient(50% 50%, 100% 100%, rgba(255,30,30,0) 0%, rgba(255,30,30,0) 6%,rgba(255,30,30,0.1) 7.5%),
    -webkit-repeating-radial-gradient(50% 50%, 100% 100%, rgba(210,25,25,0) 0%, rgba(210,25,25,0) 1.2%,rgba(210,25,25,0.2) 2.2%),
    -webkit-radial-gradient(50% 50%, 200% 50%, rgb(130,10,10) 5%,rgb(120,10,10) 30%, rgb(170,17,17) 100%);
    box-shadow: inset 0 0.25rem 0.3rem rgb(153,76,76);
    border-radius: 50%;
    position: relative;
    top: -1px;

    font-family: "Source Code Pro", sans-serif;
    cursor: pointer;
    place-self: center;
    border: none;

    :active {
        filter: brightness(97%);
        height: 75px;
        width: 75px;
        transform: rotate(1deg);
        box-shadow: inset rgba(61, 0, 0, 0.7) 0 2px 2px 2px,
                    inset rgba(61, 0, 0, 0.15) 0 2px 2px 5px;
    }
`;

export const Result = styled.div`
    text-align: center;
    display: flex;
    align-items: center;

    table {
        background: black;
        color: #fff;
        display: grid;
        place-items: center;
        padding: 10px;
        border-collapse: collapse;

        td, tr {
            border: 1px solid #fff;
            padding: 5px;
        }
    }
`;

/*
?   INFINITE
*/

export const InfiniteBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 250px;
    width: 200px;
    background: url(${infinite}) center/cover;
    transform: rotate(10deg);
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({theme}) => theme.resolutions.tablet} {
        height: 200px;
        width: 160px;
        left: 50%;
        bottom: -20px;
        font-size: 15px;
        transform: translateX(-50%) rotate(10deg);
    }
    
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 10px;

        span {
            justify-self: end;
        }

        &>* {
            flex: 1;
        } 
    }
`;

export const InfiniteInput = styled.input.attrs({type: 'number', defaultValue: '0'})`
    appearance: textfield;
    background: none;
    border: none;
    font-family: "Permanent marker";
    font-size: 25px;
    width: 90%;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 20px;
    }
`;

export const Desk = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 75%;
    height: 200px;
    filter: drop-shadow(0 0 2px black);

    div {
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: brown;
        background: url(${desk}) top/cover;
        clip-path: polygon(0 0, 87% 0, 100% 100%, 0% 100%);

        ${({theme}) => theme.resolutions.phone} {
            clip-path: none;
        }
    }

    ${({theme}) => theme.resolutions.phone} {
        width: 100%;
    }

`; 

export const PC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 7.5%;
    left: 20%;
    z-index: 10;
    transform: rotateY(10deg);
    font-family: "Source Code Pro", sans-serif;
    user-select: none;


    ${({theme}) => theme.resolutions.tablet} {
        left: 0;
        transform: scale(.8)
    }

    ${({theme}) => theme.resolutions.phone} {
        transform: none;
        width: 100%;
    }
`;

export const PC_SCREEN = styled.div`
    width: 700px;
    height: 350px;
    background: #212121;
    position: relative;
    top: 35px;
    border-radius: 5px;
    padding: 15px;
    z-index: 3;

    ${({theme}) => theme.resolutions.phone} {
        width: 100%;
    }
`;

export const PC_POWER = styled.div`
    position: absolute;
    bottom: -5px;
    right: 20px;
    width: 10px;
    height: 5px;
    background: #00a6ff;
    box-shadow: 0 0 10px blue;
    cursor: pointer;
    transition: transform .1s;

    :active {
        transform: translateY(-1px);
    }

    &.close {
        background: #ff3d3d;
        box-shadow: 0 0 10px red;
    }
`;

export const PC_DISPLAYS = styled.div`
    position: relative;
    height: 100%;
`;

export const PC_DISPLAY = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #87a4f5, #8feeff);    
    display: grid;
    place-items: center;
    position: relative;
    transition: all .1s;
    transform: ${({close}) => close ? "scale(0)" : "scale(1)"};
    z-index: 1;
`;

export const PC_LEG = styled.div`
    width: 70px;
    height: 100px;
    background: #212121;
    position: relative;
    top: 20px;
    z-index: 2;
    box-shadow: -2px 0 2px black;
`;

export const PC_STAND = styled.div`
    width: 300px;
    height: 50px;
    background: #212121;
    border-radius: 50%;
    box-shadow: 0 5px 2px black;
    z-index: 1;
    position: relative;

    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background: #121212;
    }
`;

export const PC_CLOSE = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #121212;
    top: 0;
    left: 0;
`;

export const PC_ERROR = styled(PC_CLOSE)`
    background: #CC0000;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 50px;
    padding: 30px;
    gap: 10px;
    z-index: 99;
`;

export const PC_ERROR_TITLE = styled.div`
    font-size: 30px;
    text-align: center;
`;

export const PC_ERROR_TEXT = styled.p`
    text-align: justify;
    font-size: 15px;
`;

/*
?   BLUESCREEN
*/

export const PC_BLUESCREEN = styled(PC_CLOSE)`
    background: #0078D7;
    color: #fff;
    padding: 0 10%;
    display: flex;
    z-index: 20;
`;

export const PC_BS_LEFT = styled.div`
    font-family: "Open Sans";
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    ${({theme}) => theme.resolutions.photoBr} {
        flex: 2;
    }
`;
export const PC_BS_RIGHT = styled.div`
    padding: 0 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({theme}) => theme.resolutions.photoBr} {
        padding: 0;
        flex: 1;
    }
`;
export const PC_BS_FACE = styled.div`
    font-size: 75px;
    font-weight: 300;
`;
export const PC_BS_TEXT = styled.div`
    font-size: 15px;
    width: 100%;
    font-weight: 300;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 12.5px;
    }
`;

export const PC_BS_TIMER = styled.div`
    padding: 5px 0;
    font-size: 15px;
`;

export const PC_BS_QR = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;

    img {
        border: 3px solid white;
    }
`;
export const PC_BS_LOGO = styled.div`
    color: #fff;
    filter: invert(100%);
`;

/*
?   POST
*/

export const PC_POST = styled(PC_CLOSE)`
    z-index: 21;
    background: #121212;
    color: green;
    display: ${({goPost}) => goPost ? "block" : "none"};
    overflow: hidden;
`;

export const PC_POST_TEXT = styled.pre`
    margin: 0;
`;

export const PC_BAR = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    padding: 0 5px;
    color: #eee;
    filter: drop-shadow(0 0 1px black);
    gap: 5px;

    svg {
        height: 50%;
        position: relative;

        :first-of-type {
            height: 70%;
            background: rgba(0,0,0,0.1);
            margin-right: 10px;
        }
    }
`;

export const PC_FILE = styled.div`
    height: 80%;
    width: 70%;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const PC_FILE_TOP = styled.div`
    position: relative;
    display: flex;
    gap: 3px;
    background: #121212;
    padding: 5px;

    div {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;

        :last-of-type {
            position: absolute;
            top: -1px;
            right: 2px;
            background: 0;
            border-radius: 0;
            padding: 0;
            height: 100%;
            width: 10px;
            display: flex;
            align-items: center;
            color: #fff;
            cursor: pointer;
        }
    }
`;

export const PC_FILE_CONTENT = styled.div`
    background: #ddd;
    overflow: auto;
    scrollbar-color: #212121 #fff;
    scrollbar-width: thin;

    ::-webkit-scrollbar { width: 7.5px }
    ::-webkit-scrollbar-thumb { background: #212121;}
`;

export const PC_FILE_TITLE = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 12.5px;
    }
`;

export const PC_FILE_EXP = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 12.5px;
    }

    p:not(:first-of-type) {
        margin: 3px;
    }
    p:last-of-type {
        font-size: 15px;
    }
`;

export const PC_BACK_BTN = styled.div`
    border-bottom: 2px solid #121212;
    font-size: 15px; 
    cursor: pointer;
`;

export const PC_MORE_DETAILS = styled.div`
    border-bottom: 2px solid #121212;
    font-size: 15px; 
    cursor: pointer;
`;

export const PC_FILE_DETAILS = styled(PC_FILE)`
    z-index: 5;
    position: absolute;
    width: 50%;
    height: 70%;
    background: #eee;

    ${({theme}) => theme.resolutions.photoBr} {
        width: 75%;
    }
`;

export const PC_FILE_DETAILS_TITLE = styled.div`
    text-align: center;
    padding: 5px;
    font-size: 20px;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 12.5px;
    }
`;

export const PC_FILE_DETAILS_DATA = styled.div`
    overflow: auto;
    scrollbar-color: #212121 #fff;
    scrollbar-width: thin;

    ::-webkit-scrollbar { width: 7.5px }
    ::-webkit-scrollbar-thumb { background: #212121;}

    table, tbody, tr {
        width: 100%;
    }

    tr {
        display: flex;
        font-size: 12.5px;
        
        td {
            flex: 1;
        }

        td:first-of-type {
            flex: 3;
        }
    }
`;

/*
?   PC → SPEC
*/

export const PC_FILE_SPEC = styled(PC_FILE) `
    position: absolute;
    width: 40%;
    height: 75%;
    z-index: 5;
    background: #ddd;
`;

export const PC_SPEC_COMPONENT = styled.div`
    padding: 3px 5px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
`;

/*
?   Req Inputs
*/

export const ReqLabel = styled.label`
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    cursor: pointer;

    &>* {
        font-family: 'Calligraffitti', cursive;
    }
`;
export const ReqCheckBox = styled.input.attrs({type: 'checkbox'})`
    opacity: 0;
    visibility: hidden;

    :checked {
        display: none;
    }

    :checked+div {
        display: block;
    } 

    :disabled+div {
        color: grey;
        cursor: default;
    }
`;
export const ReqCheckStyle = styled.div`
    display: none;
    text-align: center;
    position: relative;
    left: -2px;
    font-weight: bold;
`;

export const ReqSelect = styled.select`
    position: relative;
    left: -2px;
    appearance: none;
    border: none;
    background: none;
    font-weight: bold;
    text-align: center;
    width: 100%;
    cursor: pointer;
`;

