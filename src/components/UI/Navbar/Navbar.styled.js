import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	visibility: ${props => (props.pathName === '/' ? 'hidden' : 'visible')};
	display: flex;
	justify-content: space-around;
	padding-top: 5px;
	width: 100vw;
	position: fixed;
	background: #e3e3e3;
	z-index: 10;
	height: 5vh;
`;
