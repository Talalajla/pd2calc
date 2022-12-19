import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: grid;
    grid-template-rows: auto auto auto minmax(300px, 1fr) auto;
    gap: 10px;
    padding: 20px;
`;

export const TutTitle = styled.div`
    font-size: 6vmin;
    font-family: "Exo 2";
    justify-self: center;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 25px;
    }
`;

export const TutItems = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0 0;

    img {
        max-width: 400px;
    }

    ${({theme}) => theme.resolutions.tablet} {
        width: 100%;
        max-width: unset;
    }

    >div {
        display: flex;
        gap: 30px;
        max-height: 600px;
        padding: 50px 0;

        :nth-child(even) {
            justify-content: flex-end;
        }
        :nth-child(odd) {
            justify-content: flex-start;
        }

        >div {
            position: relative;
            display: flex;
            align-items: center;
        }

        p {
            margin: 0;
            max-width: 400px;
            font-size: 22px;
            line-height: 30px;
            font-family: 'Exo 2', sans-serif;
        }

        ${({theme}) => theme.resolutions.phone} {
            flex-direction: column;
            max-height: unset;
            align-items: center;
            text-align: center;

            :nth-child(odd) {
                flex-direction: column-reverse;
            }
            
            img {
                max-width: 200px;
            }

            p {
                font-size: 15px;
                line-height: 20px;
            }
        }
    }
`;

export const TutSubTitle = styled.div`
    justify-self: center;
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    font-family: "Exo 2", Roboto;
    text-align: center;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 17px;
    }
    p {
        max-width: 500px;
        margin: 20px auto;
    }
    img {
        width: 100%;
        max-width: 800px;
    }
`;

export const TutFinish = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 32px;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`;

export const TutSubTitleItem = styled.div`
    display: flex;
    transition: all .25s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;

    & > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }
`;

export const Description = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const DescriptionItem = styled.div`
    display: flex;
    transition: all .25s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;

    & > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        text-align: center;
        display: flex;
        align-items: flex-start;

        p {
            max-width: 750px;
            margin: 0 auto;
            text-align: center;
            font-size: 22px;
            letter-spacing: .5px;

            ${({theme}) => theme.resolutions.photoBr} {
                font-size: 15px;
                line-height: 18px;
            }
        }
    }
`;

export const HomeBtn = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121212;
    border: 5px solid #121212;
    cursor: pointer;
    transition: all .2s;

    :hover {
        background: #121212;
        color: #eee;
    }
`;