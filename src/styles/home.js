import styled from "styled-components";

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${({theme}) => theme.resolutions.photoBr} {
        flex-direction: column;
    }
    align-items: center;
    justify-content: center;
    overflow: hidden;

    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
`;

export const Side = styled.div`
    flex: 1;
    height: 100%;
    transition: filter .5s;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;

    img {
        transition: transform .5s;
    }

    svg {
        color: ${item => item.paint === "blue" ? "#6FC4FC" : "#F56600" };
        filter: drop-shadow(0 0 3px black);
    }

    ${({theme}) => theme.resolutions.pc} {
        filter: grayscale(90%);
        
        :hover {
            filter: grayscale(0);

            &>div>* {
                color: ${item => item.paint === "blue" ? "#6FC4FC" : "#F56600" };
                font-size: 70px;
            }

            &>div>div {
                transform: ${item => item.paint === "blue" ? "rotate(-5deg)":"rotate(5deg)" };
            }
            
            img {
                transform: scale(1.3) rotate(10deg);
            }
        }
    }
`;

export const SideTextBox = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-shadow: 0 0 5px black;

    &>* {
        transition: font-size .3s, transform .2s;
    }
`;

export const SideText = styled.div`
    font-family: "Dis";
`;