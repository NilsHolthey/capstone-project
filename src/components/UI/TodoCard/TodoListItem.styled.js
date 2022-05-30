import styled from 'styled-components';

export const TodoLi = styled.li`
	color: #545060;
	background: ${({ background = 'white' }) => background};
	opacity: ${({ opacity = '1' }) => opacity};
	border-radius: 8px;
	padding: 5px 0 0 10px;
	gap: 5px;
	min-height: 55px;
	position: relative;
`;
