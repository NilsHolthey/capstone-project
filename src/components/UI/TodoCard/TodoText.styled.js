import styled from 'styled-components';

export const TodoText = styled.p`
	${({ variant }) =>
		variant === 'title' &&
		`	
        font-size: 1rem;
		color: #545060;
    `}
	${({ variant }) =>
		variant === 'description' &&
		`	
        font-size: 0.9rem;
		color: rgba(84, 80, 96, 0.8);
        margin-top: 0;
        
    `}
`;
