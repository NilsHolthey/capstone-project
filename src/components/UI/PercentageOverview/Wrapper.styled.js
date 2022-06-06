import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;

	height: 100%;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding-top: 1rem;
	gap: 5px;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(246, 246, 246, 1) 70%,
		rgba(246, 246, 246, 1) 100%
	);
	border-radius: 20px 20px 0 0;
	box-shadow: 0 0 6px 0 #f6f6f6;
	margin: 15px 15px 25px 15px;
`;
