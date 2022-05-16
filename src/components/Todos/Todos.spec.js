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

		const todos1 = screen.getByText(/Capstone Project/i);
		const todos2 = screen.getByText(/Personal Website/i);
		const todos3 = screen.getByText(/Tax return 2021/i);

		expect(todos1).toBeInTheDocument();
		expect(todos2).toBeInTheDocument();
		expect(todos3).toBeInTheDocument();
	});
});
