import styled from 'styled-components';

export const TodoList = styled.div`
	width: 350px;
	background: ${({ background = '#f6f6f6' }) => background};
	min-height: 50vh;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 5px;
	padding: 10px;
	margin-bottom: 12vh; ;
`;
