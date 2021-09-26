import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    overflow: hidden;
    text-align: center;
    justify-self: center;
`;

export const CarouselContent = styled.div`
    display: flex;
    transition: all .25s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;
                                                
    ::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        display: grid;
        place-items: center;
    }
`;
export const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Position = styled.div`
    font-size: 20px;
`;

export const Btn = styled.div`
    width: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
    }
`;