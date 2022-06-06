import styled from 'styled-components';

export const DropzoneBack = styled.article`
	margin-top: 10px;
	margin-bottom: 10px;
	border: dashed 2px #6667ab;
	background: ${({ background = '#d5c3dd' }) => background};
	border-radius: 8px;
	opacity: 0.9;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
	font-size: 10px;
	height: 105px;
	width: 150px;
	position: sticky;
	top: 25px;
	z-index: 2;
	padding: 0.5rem;

	svg {
		transform: rotate(90deg);
	}
`;
