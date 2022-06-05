import styled from 'styled-components';

export const Dropzone = styled.article`
	margin-top: 10px;
	margin-bottom: 30px;
	border: dashed 2px #6667ab;
	background: ${({ background = '#d5c3dd' }) => background};
	border-radius: 8px;
	opacity: 0.9;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 105px;
	width: 150px;

	svg {
		transform: rotate(-90deg);
	}
`;
