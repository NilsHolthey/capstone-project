import { useForm } from 'react-hook-form';
import React from 'react';
import { FormContainer } from '../UI/Form/FormContainer.styled';
import { StyledForm } from '../UI/Form/Form.styled';
import { Wrapper } from '../UI/Form/Wrapper.styled';
import { SubmitButton } from '../UI/Button/SubmitButton.styled';
import { useRouter } from 'next/router';
import SvgIcon from '../SVGs/icons';
import { NavButton } from '../UI/Button/NavButton.styled';
import useStore from '../../lib/useStore';

export default function Form() {
	const addTodo = useStore(state => state.addTodo);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm('');

	const onSubmit = data => {
		reset();
		addTodo(data);
		router.push('/todo');
	};
	const handleClick = () => {
		router.push('/todo');
	};

	return (
		<Wrapper>
			<NavButton type="button" onClick={handleClick}>
				<SvgIcon variant="chevronLeftCircle" size="20px" color="#6667ab" />
			</NavButton>
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

					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						name="description"
						type="text"
						aria-invalid={errors.title ? 'true' : 'false'}
						{...register('description', {
							required: true,
							maxLength: 40,
						})}
						placeholder="add a short deadline"
					/>
					<label htmlFor="deadline">Deadline</label>

					<input
						id="deadline"
						name="deadline"
						type="date"
						aria-invalid={errors.title ? 'true' : 'false'}
						{...register('deadline', {
							required: true,
						})}
						placeholder="mm/dd/yyyy"
					/>
					<fieldset {...register('category')}>
						<legend>Level</legend>
						<input
							type="radio"
							value="Flohmarkt"
							id="kategorie_flohmarkt"
							{...register('category')}
						/>
						<label htmlFor="kategorie_flohmarkt" variant="radio">
							Flohmarkt
						</label>
						<input
							type="radio"
							value="Laden"
							id="kategorie_laden"
							{...register('category')}
						/>
						<label htmlFor="kategorie_laden" variant="radio">
							Laden
						</label>
					</fieldset>
					<SubmitButton>Submit</SubmitButton>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
