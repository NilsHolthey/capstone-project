import styled from 'styled-components';

export const Dropzone = styled.div`
	margin-top: 15px;
	margin-bottom: 30px;
	border: dashed 2px #6667ab;
	background: ${({ background = '#d5c3dd' }) => background};
	border-radius: 8px;
	opacity: 0.9;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 340px;
	position: sticky;
	top: 25px;
	z-index: 2;
`;
