import styled from 'styled-components';

export const ListButtonL = styled.button`
	animation: SlideAnimation 1.2s ease-in-out forwards;
	display: flex;
	align-items: center;
	cursor: pointer;
	border: none;
	background-color: transparent;
	position: fixed;
	left: 0;
	bottom: 3%;
	width: 45px;
	height: 50px;
	z-index: 1;
	opacity: 0;

	@keyframes SlideAnimation {
		to {
			bottom: 10%;
			opacity: 0.7;
		}
	}
`;
