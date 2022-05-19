import { useForm } from 'react-hook-form';
import React from 'react';

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
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
