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
						type="text"
						aria-invalid={errors.title ? 'true' : 'false'}
						{...register('title', {
							required: true,
							pattern: /\S(.*\S)?/,
							maxLength: 30,
						})}
						placeholder="add title"
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

					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						type="text"
						aria-invalid={errors.description ? 'true' : 'false'}
						{...register('description', {
							required: true,
							pattern: /\S(.*\S)?/,
							maxLength: 100,
						})}
						placeholder="add a short description"
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
					<label htmlFor="deadline">Deadline</label>

					<input
						id="deadline"
						name="deadline"
						type="date"
						aria-invalid={errors.deadline ? 'true' : 'false'}
						{...register('deadline', {
							required: true,
						})}
						placeholder="mm/dd/yyyy"
					/>
					{errors.deadline && errors.deadline.type === 'required' && (
						<span>Please enter a deadline</span>
					)}
					<fieldset
						{...register('level', {
							required: true,
						})}
					>
						<legend>Level</legend>
						<input type="radio" value="easy" id="level_easy" {...register('level')} />
						<label htmlFor="level_easy">easy</label>
						<input
							type="radio"
							value="medium"
							id="level_medium"
							{...register('level', {
								required: true,
							})}
						/>
						<label htmlFor="level_medium">medium</label>
						<input type="radio" value="hard" id="level_hard" {...register('level')} />
						<label htmlFor="level_hard">hard</label>
					</fieldset>
					<SubmitButton>Submit</SubmitButton>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
