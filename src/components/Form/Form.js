import { useForm } from 'react-hook-form';
import React from 'react';
import { FormContainer } from '../UI/Form/FormContainer.styled';
import { StyledForm } from '../UI/Form/Form.styled';
import { Wrapper } from '../UI/Form/Wrapper.styled';
import { SubmitButton } from '../UI/Button/SubmitButton.styled';
import { useRouter } from 'next/router';

export default function Form({ onAddTodo }) {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm('');

	const onSubmit = data => {
		onAddTodo(data);
		reset();
		router.push('/');
	};

	return (
		<Wrapper>
			<FormContainer>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						name="title"
						type="text"
						aria-invalid={errors.title ? 'true' : 'false'}
						{...register('title', {
							required: true,
							maxLength: 20,
						})}
						placeholder="add title"
					/>
					<SubmitButton>Submit</SubmitButton>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
