import styled from 'styled-components';

export const InputRadio = styled.input`
	${({ variant }) =>
		variant === 'easy' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(71, 153, 107, 0.2);
		background-color: rgba(71, 153, 107, 0.2);
        border: 0.15em solid rgba(71, 153, 107, 0.5);

        &::before {
		box-shadow: inset 1em 1em rgba(71, 153, 107, 0.7);
		background-color: rgba(71, 153, 107, 0.7)};
        };

        &:checked::before {
		border: 0.1em solid rgba(93, 187, 134, 0.5);
	    };

	    &:focus {
		outline: max(2px, 0.15em) rgba(93, 187, 134, 0.7);
	    };
	
    `}
	${({ variant }) =>
		variant === 'medium' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(236, 195, 113, 0.2);
		background-color: rgba(236, 195, 113, 0.1);
        border: 0.15em solid rgba(236, 195, 113, 0.5);
        &::before {
		box-shadow: inset 1em 1em rgba(236, 195, 113, 0.7);
		background-color: rgba(236, 195, 113, 0.7);
	}
    &:checked::before {
		border: 0.1em solid rgba(236, 195, 113, 0.2);
	    }
	    &:focus {
		outline: max(2px, 0.15em) rgba(236, 195, 113, 0.7);
	    }
    `}
	${({ variant }) =>
		variant === 'hard' &&
		`	
		box-shadow: 55px 20px 40px 12px rgba(233, 67, 94, 0.2);
		background-color: rgba(233, 67, 94, 0.2);
        border: 0.15em solid rgba(233, 67, 94, 0.50);

        &::before {
		box-shadow: inset 1em 1em rgba(233, 67, 94, 0.7);
		background-color: rgba(233, 67, 94, 0.7);
        };

        &:checked::before {
		border: 0.1em solid rgba(233, 67, 94, 0.1);
	    };

	    &:focus {
		outline: max(1px, 0.15em) rgba(233, 67, 94, 0.7);
	    };

    `}
	-webkit-appearance: none;
	appearance: none;

	margin: 0;
	cursor: pointer;
	font: inherit;
	color: currentColor;
	width: 1.25em;
	height: 1.25em;
	justify-content: center;
	border-radius: 50%;
	transform: translateY(-0.075em);
	display: flex;
	align-items: center;

	&::before {
		cursor: pointer;
		content: '';
		width: 0.55em;
		height: 0.55em;
		border-radius: 50%;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
	}

	&:checked::before {
		transform: scale(2);
	}
	&:focus {
		outline-offset: max(0.5px, 0.01em);
	}
`;
