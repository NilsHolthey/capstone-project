import { useForm } from 'react-hook-form';
import React from 'react';
import { FormContainer } from '../UI/Form/FormContainer.styled';
import { StyledForm } from '../UI/Form/Form.styled';
import { Wrapper } from '../UI/Form/Wrapper.styled';
import { Button } from '../UI/Button/Button.styled';

export default function Form({ onAddTodo }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		onAddTodo(data);
		event.target.reset();
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
					<Button type="submit">Submit</Button>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
