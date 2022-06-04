import styled from 'styled-components';
export const Textarea = styled.textarea`
	color: #545060;
	border-radius: 8px;
	background-color: #f6f6f6;
	border: none;
	height: 5rem;
	padding: 0.3rem;
	&:focus {
		border: 2px solid #6667ab;
		box-shadow: 0 0 4px 0 #6667ab;
		outline: none;
	}
	&::placeholder {
		font-family: 'Inter', sans-serif;
		font-size: 14px;
	}
`;
