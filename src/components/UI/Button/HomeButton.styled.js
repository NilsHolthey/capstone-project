import styled from 'styled-components';

export const HomeIcon = styled.a`
	border-bottom: ${props => (props.href === props.pathName ? '3px solid #6667ab' : 'none')};
	background-color: transparent;
	cursor: pointer;
	margin-top: 2%;
`;
