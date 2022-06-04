import styled from 'styled-components';

export const FormContainer = styled.div`
	animation: SlideAnimation 0.9s ease-in-out forwards;
	background-color: #f6f6f6;
	border-radius: 16px 16px 0 0;
	box-shadow: 0 0 8px 0 #6667ab;
	padding-top: 16px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: absolute;
	width: 340px;
	height: 70vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 110%) scale(0.8, 0.5);

	@keyframes SlideAnimation {
		to {
			transform: translate(-50%, -30%) scale(1, 1);
		}
	}
`;
