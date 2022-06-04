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
import { Input } from '../UI/Form/Input.styled';
import { Textarea } from '../UI/Form/Texarea.styled';
import { InputRadio } from '../UI/Form/InputRadio.styled';

import { Fieldset } from '../UI/Form/Fieldset.styled';
import { Label } from '../UI/Form/Label.styled';
import { ButtonContainer } from '../UI/Form/ButtonContainer.styled';
import { LabelRadio } from '../UI/Form/LabelRadio.styled';

export default function Form() {
	const addTodo = useStore(state => state.addTodo);
	function empty() {
		var x;
		x = document.getElementById('title').value;
		if (x == ' ') {
			alert('Please ensure you fill in the form correctly.');
		}
	}
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		empty(data);

		addTodo(data);
		setTimeout(() => {
			router.push('/todo');
		}, 3000);
		setTimeout(() => {
			reset();
		}, 2000);
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
					<Label htmlFor="title">Title:</Label>
					<Input
						id="title"
						type="text"
						aria-invalid={errors.title ? 'true' : 'false'}
						{...register('title', {
							required: true,
							pattern: /\S(.*\S)?/,
							maxLength: 30,
						})}
						placeholder="..."
					/>
					{errors.title && errors.title.type === 'required' && (
						<span>Please enter a title</span>
					)}
					{errors.title && errors.title.type === 'pattern' && (
						<span>Please enter a title</span>
					)}
					{errors.title && errors.title.type === 'maxLength' && (
						<span>Please use less than 30 characters</span>
					)}

					<Label htmlFor="description">Description:</Label>
					<Textarea
						id="description"
						type="text"
						aria-invalid={errors.description ? 'true' : 'false'}
						{...register('description', {
							required: true,
							pattern: /\S(.*\S)?/,
							maxLength: 100,
						})}
						placeholder="..."
					/>
					{errors.description && errors.description.type === 'required' && (
						<span>Please enter a description</span>
					)}
					{errors.description && errors.description.type === 'pattern' && (
						<span>Please enter a description</span>
					)}
					{errors.description && errors.description.type === 'maxLength' && (
						<span>Please use less than 100 characters</span>
					)}
					<Label htmlFor="deadline">Deadline:</Label>

					<Input
						id="deadline"
						name="deadline"
						type="date"
						aria-invalid={errors.deadline ? 'true' : 'false'}
						{...register('deadline', {
							required: true,
						})}
						placeholder="MM/DD/YYYY"
					/>
					{errors.deadline && errors.deadline.type === 'required' && (
						<span>Please enter a deadline</span>
					)}
					<Label htmlFor="level">Level:</Label>
					<Fieldset
						id="level"
						name="level"
						{...register('level', {
							required: true,
						})}
					>
						<LabelRadio htmlFor="level_easy">
							<InputRadio
								variant="easy"
								type="radio"
								value="easy"
								id="level_easy"
								{...register('level')}
							/>
							easy
						</LabelRadio>
						<LabelRadio htmlFor="level_medium">
							<InputRadio
								variant="medium"
								type="radio"
								value="medium"
								id="level_medium"
								{...register('level', {
									required: true,
								})}
							/>
							medium
						</LabelRadio>
						<LabelRadio htmlFor="level_hard">
							<InputRadio
								variant="hard"
								type="radio"
								value="hard"
								id="level_hard"
								{...register('level')}
							/>
							hard
						</LabelRadio>
					</Fieldset>
					<ButtonContainer>
						<SubmitButton>Submit</SubmitButton>
					</ButtonContainer>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
