import Todo from './Todo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';

describe('Displays the title of a single todo', () => {
	it('renders the title', () => {
		render(<Todo title="Capstone Project" />);

		const todos = screen.getByText(/Capstone Project/i);

		expect(todos).toBeInTheDocument();
	});
});

describe('Display DeleteButton', () => {
	it('renders the DeleteButton in each listitem', () => {
		render(<DeleteButton />);

		const deleteButton = screen.getByRole('button');

		expect(deleteButton).toBeInTheDocument();
	});
});
