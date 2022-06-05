import styled from 'styled-components';

export const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'easy' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(71, 153, 107, 0.2);
		background-color: rgba(71, 153, 107, 0.5);
    `}
	${({ variant }) =>
		variant === 'medium' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(236, 195, 113, 0.2);
		background-color: rgba(236, 195, 113, 0.5);
    `}
	${({ variant }) =>
		variant === 'hard' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(233, 67, 94, 0.2);
		background-color: rgba(233, 67, 94, 0.50);
    `}
	position: absolute;
	left: 1%;
	top: 50%;
	transform: translate(0%, -50%);
	width: 0.5rem;
	height: 66%;
	border-radius: 8px;
`;
