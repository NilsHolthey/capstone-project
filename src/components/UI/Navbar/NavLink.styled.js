import styled from 'styled-components';

export const NavLink = styled.a`
	text-decoration: none;
	font-weight: bolder;
	color: ${props => (props.href === props.pathName ? '#6667ab' : '#545060')};
	text-decoration: ${props => (props.href === props.pathName ? 'underline #6667ab 3px' : 'none')};
	font-size: 16px;
	text-underline-offset: 10px;
`;
