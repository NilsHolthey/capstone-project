import styled from 'styled-components';

export const NavLink = styled.a`
	display: flex;
	align-items: center;

	text-decoration: none;
	font-weight: bolder;
	color: ${props => (props.href === props.pathName ? '#6667ab' : '#545060')};
	text-decoration: ${props => (props.href === props.pathName ? 'underline #6667ab 3px' : 'none')};
	font-size: 16px;
	text-underline-offset: 10px;
	height: 5vh;
	background-color: ${props => (props.href === props.pathName ? 'white' : 'none')};
	padding: 0 30px 0 30px;
	border-radius: 12px 12px 0 0;
	visibility: ${props => (props.pathName === '/' ? 'hidden' : 'visible')};
`;
