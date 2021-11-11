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

export const TutSubTitle = styled.div`
    justify-self: center;
    width: 100%;
    overflow: hidden;
    font-size: 4.5vmin;
    font-family: "Exo 2", Roboto;
    text-align: center;

    ${({theme}) => theme.resolutions.photoBr} {
        font-size: 17px;
    }
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
    border-radius: 15px;
    background: #121212;
    padding: 25px 50px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;