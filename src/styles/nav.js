import styled from 'styled-components';

export const Navbar = styled.nav`
    /* width: calc(100% - 30px); */
    width: 1000px;
    position: relative;
    background: #231F20;
    border: 3px solid #171415;
    /* margin: 0 15px; */
    margin: auto;
    font-family: "Dis";

    ${({theme}) => theme.resolutions.tablet} {
        width: 95%;
    }
`;

export const NavItemRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    user-select: none;

    p {
        margin: 0;
        font-size: 6vmin;
        color: #C7C7C7;

        ${({theme}) => theme.resolutions.tablet} {
            font-size: 7vmin;
        }
    }
`; 

export const NavListRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const NavListItemRow = styled.div`
    padding: 10px;
    font-size: 3vmin;
    color: #C7C7C7;

    ${({theme}) => theme.resolutions.tablet} {
        font-size: 5vmin;
    }

    :hover {
        background-color: rgba(255,255,255,0.1);
    } 
`;

const rotate = deg => {
    switch (deg) {
        case "type1":
            return "transform: translate(-50%, -50%) rotate(150deg);";
        case "type2":
            return "transform: translate(-50%, -50%) rotate(30deg);";
        case "type3":
            return "transform: translate(-50%, -50%) rotate(180deg);";
        default:
            return "transform: translate(-50%, -50%) rotate(110deg);";

    }
}

export const Screw = styled.div`
    position: absolute;
    left: ${({left}) => left ? "1%" : "auto"};
    right: ${({right}) => right ? "1%" : "auto"};
    bottom: ${({bot}) => bot ? "15px" : "auto"};
    top: ${({top}) => top ? "15px" : "auto"};
    width: 3vmin;
    height: 3vmin;
    border-radius: 50%;
    background: #adadad;
    background: linear-gradient(135deg, #adadad 0%,#e1e1e1 51%,#dddddd 68%,#f6f6f6 100%);
    box-shadow: 0 2px 4px black, -1px -1px 5px rgba(0,0,0,0.3);
    overflow: hidden;
`;

export const Indent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    height: 1vmin;
    width: 33px;
    box-shadow: inset 0px 1px 8px #222;
    ${({type}) => rotate(type)}
    border-radius: 2px;
    border-bottom:1px solid rgba(255,255,255,0.3);
`;