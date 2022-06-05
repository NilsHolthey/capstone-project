import styled from 'styled-components';

export const DropzoneWrapper = styled.section`
	width: 350px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 0 1rem;
	background: rgba(255, 255, 255, 0.65);
	box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(7.5px);
	-webkit-backdrop-filter: blur(11.5px);
	border-radius: 10px;

	position: sticky;
	top: 5px;
	z-index: 2;
`;
