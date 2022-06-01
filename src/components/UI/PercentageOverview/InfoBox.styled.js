import styled from 'styled-components';

export const InfoBox = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 2px;
	box-shadow: ${({ boxShadow = '0 0 2px 2px rgba(240, 240, 240, 1)' }) => boxShadow};
	width: 30vw;
	height: 15vh;
	padding-left: 0.5rem;

	background-color: rgba(246, 246, 246, 0.5);
`;
