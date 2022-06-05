import styled from 'styled-components';

export const LabelRadio = styled.label`
	display: flex;
	font-size: 0.9rem;
	line-height: 1.1;
	gap: 0.5em;
	&:focus-within {
		font-weight: bolder;
	}
`;
