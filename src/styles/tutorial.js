import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: grid;
    grid-template-rows: auto auto minmax(300px, 1fr) auto;
    gap: 10px;
    padding: 20px;
`;

export const TutTitle = styled.div`
    font-size: 6vmin;
    font-family: "Exo 2";
    justify-self: center;
`;

export const TutSubTitle = styled.div`
    justify-self: center;
    width: 100%;
    overflow: hidden;
    font-size: 4.5vmin;
    font-family: "Exo 2", Roboto;
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
        align-items: center;

        p {
            max-width: 1000px;
            margin: auto;
            text-align: center;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: .5px;
        }
    }
`;

export const HomeBtn = styled.div`
    border-radius: 5px;
    background: #121212;
    padding: 10px 25px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
`;