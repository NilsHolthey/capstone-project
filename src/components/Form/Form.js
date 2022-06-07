import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
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
import { ErrorMessage } from '../UI/Form/ErrorMessage.styled';
import FormIllustration from '../SVGs/illustrations/FormIllustration';

export default function Form() {
	const addTodo = useStore(state => state.addTodo);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const initialButtonText = 'Submit';
	const [buttonText, setButtonText] = useState(initialButtonText);

	const onSubmit = data => {
		addTodo(data);
		setButtonText(<SvgIcon variant="check" size="20px" color="#f6f6f6" />);
		setTimeout(() => {
			setButtonText(initialButtonText);
		}, 2500);
		setTimeout(() => {
			router.push('/todo');
		}, 2500);
		setTimeout(() => {
			reset();
		}, 1000);
	};
	const handleClickBack = () => {
		window.history.back();
	};

	return (
		<Wrapper>
			<NavButton type="button" onClick={handleClickBack}>
				<SvgIcon variant="chevronLeftCircle" size="20px" color="#6667ab" />
				Go Back
			</NavButton>
			<FormIllustration />
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
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please enter a title
						</ErrorMessage>
					)}
					{errors.title && errors.title.type === 'pattern' && (
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please enter a title
						</ErrorMessage>
					)}
					{errors.title && errors.title.type === 'maxLength' && (
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please use less than 30 characters
						</ErrorMessage>
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
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please enter a description
						</ErrorMessage>
					)}
					{errors.description && errors.description.type === 'pattern' && (
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please enter a description
						</ErrorMessage>
					)}
					{errors.description && errors.description.type === 'maxLength' && (
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please use less than 100 characters
						</ErrorMessage>
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
						<ErrorMessage>
							<SvgIcon variant="alert" size="0.9rem" color="red" />
							Please enter a deadline
						</ErrorMessage>
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
						<SubmitButton>{buttonText}</SubmitButton>
					</ButtonContainer>
				</StyledForm>
			</FormContainer>
		</Wrapper>
	);
}
