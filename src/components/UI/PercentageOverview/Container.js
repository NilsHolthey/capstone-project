import styled from 'styled-components';

export const Container = styled.section`
	height: 28vh;
	width: 42vw;
	padding: 9px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #545060;
	background-color: white;
	border-radius: 8px;
	box-shadow: ${({ boxShadow = '0 0 4px 0 #545060' }) => boxShadow};
`;
