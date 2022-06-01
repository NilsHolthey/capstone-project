import styled from 'styled-components';

export const Headline = styled.h5`
	color: #756f87;
	margin: 0 0 0.5rem 0;
	&::before {
		display: inline-block;
		content: '';
		border-radius: 0.175rem;

		height: 0.7rem;
		width: 0.7rem;
		margin-right: 0.3rem;
		background-color: ${({ backgroundColor = '#bdbdbd' }) => backgroundColor};
	}
`;
