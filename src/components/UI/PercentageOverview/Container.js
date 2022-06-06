import styled from 'styled-components';

export const Container = styled.section`
	height: 20vh;
	width: 80vw;
	padding: 8px;
	display: flex;
	gap: 2px;
	justify-content: space-around;
	align-items: center;
	color: #545060;
	background-color: white;
	border-radius: 8px;
	box-shadow: ${({ boxShadow = '0 0 4px 0 #545060' }) => boxShadow};
`;
