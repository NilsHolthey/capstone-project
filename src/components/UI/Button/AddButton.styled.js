import styled from 'styled-components';

export const AddIcon = styled.span`
	border: none;
	background-color: #f6f6f6;
	border-radius: 8px;
	position: absolute;
	left: 50%;
	padding: 0;
	display: flex;
	box-shadow: 0px 34px 37px 8px rgba(102, 103, 171, 0.65);
	transform: translate(-50%, -40%);
	cursor: pointer;
	visibility: ${props =>
		props.pathName === '/CreateTodo' || props.pathName === '/' ? 'hidden' : 'visible'};
	transition: all ease-in-out 0.5s;
`;
