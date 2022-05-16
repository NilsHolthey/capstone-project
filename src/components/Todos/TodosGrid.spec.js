import TodosGrid from './TodosGrid';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Display a title-list of the array todos', () => {
	it('renders the title of array-todos', () => {
		render(
			<TodosGrid
				todos={[
					{
						id: '66FIlm5YBtTFqndyPlMGA',
						title: 'Tax return 2021',
						description: 'need do do all my taxes',
						status: 'doIt',
					},
					{
						id: 'BnDYZAGVaU8MTPTkysvfU',
						title: 'Personal Website',
						description: 'I need to update my profile picture',
						status: 'doIt',
					},
					{
						id: 'TUfMKV3g0KJPa5Qiq5boa',
						title: 'Capstone Project',
						description: 'write 2 new userStories',
						status: 'doIt',
					},
				]}
			/>
		);

		const todos = screen.getAllByRole('listitem');

		expect(todos.length).toBe(3);
	});
});
