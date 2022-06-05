import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	visibility: ${props =>
		props.pathName === '/' || props.pathName === '/overview' ? 'hidden' : 'visible'};
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	padding-top: 5px;
	width: 100vw;
	position: ${props => (props.pathName === '/' ? 'fixed' : 'relative')};

	background: rgba(205, 209, 220, 0.8);
	z-index: 10;
	height: 6vh;
	opacity: 0.95;
`;
