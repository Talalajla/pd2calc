import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	/* background-color: rgba(0,0,0,0.3); */
	display: grid;
	grid-template-rows: auto auto auto 1fr;
`;

export const MainTitle = styled.div`
	text-align: center;
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
	align-items: start;
	justify-content: center;
	align-content: flex-start;
	gap: 20px;
	padding: 30px 10px;
`;

export const HeistItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 300px;
	height: auto;
	position: relative;
	border: 2px solid ${({ theme }) => theme.colors.nav};
	border-radius: 15px;
	overflow: hidden;

	${({ theme }) => theme.resolutions.pc} {
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
		transition: transform 0.3s;
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
	font-size: 30px;
	font-weight: bold;
	transition: transform 0.3s, opacity 0.3s;
	text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
	p {
		margin: 0;
		font-size: 17.5px;
		padding: 2px 0;

		:first-of-type {
			font-size: 1em;
		}
	}

	${({ theme }) => theme.resolutions.pc} {
		transform: translateY(300%);
		opacity: 0;
	}
`;

export const SearchStealth = styled.input.attrs({ type: "search" })`
	border: 0;
	background: #eee;
	border-radius: 3px;
	min-width: 300px;
	max-height: 50px;
	padding: 10px 15px;
	place-self: center;
	border: 2px solid black;
	outline: 0;
	font-size: 20px;

	${({ theme }) => theme.resolutions.photoBr} {
		min-width: auto;
	}
`;

export const ChooseType = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	gap: 30px;
	font-size: 20px;

	@media (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		width: 220px;
		margin: auto;
	}
`;

export const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;

	div {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		border: 1px solid black;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 1px;

		span {
			opacity: none;
			background: black;
			width: 0px;
			height: 0px;
			border-radius: 50%;
			transition: all 0.2s;
		}
	}

	input {
		display: none;
		opacity: 0;

		:checked ~ div span {
			opacity: 1;
			width: 9px;
			height: 9px;
		}
	}
`;

export const RadioBtn = styled.input.attrs({ type: "radio", name: "type" })``;
