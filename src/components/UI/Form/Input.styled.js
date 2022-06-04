import styled from 'styled-components';
export const Input = styled.input`
	border-radius: 8px;
	background-color: #f6f6f6;
	border: none;
	padding: 0.3rem;
	color: #545060;
	&:focus {
		border: 2px solid #6667ab;
		box-shadow: 0 0 4px 0 #6667ab;
		outline: none;
	}
	&::placeholder {
		font-family: 'Inter', sans-serif;
	}

	&::-webkit-datetime-edit {
		font-family: 'Inter', sans-serif;
	}
`;
