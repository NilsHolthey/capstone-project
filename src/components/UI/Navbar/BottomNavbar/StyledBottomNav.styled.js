import styled from 'styled-components';

export const StyledBottomNav = styled.nav`
	position: fixed;
	background-color: #cdd1dc;
	width: 100vw;
	height: 10vh;
	bottom: 0px;
	box-shadow: 0px 5px 33px 4px #e4e4e4;
	visibility: ${props => (props.pathName === '/' ? 'hidden' : 'visible')};
`;
