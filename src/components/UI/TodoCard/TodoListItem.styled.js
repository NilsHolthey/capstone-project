import styled from 'styled-components';

export const TodoLi = styled.div`
	color: #545060;
	background: ${({ background = 'white' }) => background};
	border-radius: 8px;
	padding: 5px 0 0 10px;
	gap: 5px;
	min-height: 55px;
	position: relative;
`;
