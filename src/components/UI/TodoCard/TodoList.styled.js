import styled from 'styled-components';

export const TodoList = styled.div`
	width: 350px;
	background: ${({ background = '#f6f6f6' }) => background};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 8px;
	padding: 10px;
	margin-bottom: 12vh; ;
`;
