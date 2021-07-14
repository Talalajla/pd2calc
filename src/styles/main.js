import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    /* background-color: rgba(0,0,0,0.3); */
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
    font-size: 6vmin;
    font-family: "Exo 2";
`;

export const HeistGallery = styled.div`
    position: relative;
    max-width: 1300px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px 0;
`;

export const HeistItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    height: auto;
    position: relative;
    border: 2px solid ${({theme}) => theme.colors.nav};
    border-radius: 15px;
    overflow: hidden;

    ${({theme}) => theme.resolutions.pc} {
        filter: grayscale(100%);

        :hover {
            filter: grayscale(0%);

            div {
                transform: translateY(-50%);
                opacity: 1;
            }

            img {
                transform: scale(1.5);
            }
        }
    }

    img {
        width: 100%;
        transition: transform .3s;
    }
`;

export const HeistName = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    color: #fff;
    font-size: 27.5px;
    transition: transform .3s, opacity .3s;
	text-shadow: -1px 1px 0 #000,
				  1px 1px 0 #000,
				 1px -1px 0 #000,
				-1px -1px 0 #000;
    p {
        margin: 0;

        :last-of-type {
            font-size: 17.5px;
        }
    }

    ${({theme}) => theme.resolutions.pc} {
        transform: translateY(300%);
        opacity: 0;
    }
`;