import Todo from './Todo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Displays the title of a single todo', () => {
	it('renders the title', () => {
		render(<Todo title="Capstone Project" />);

		const todos = screen.getByText(/Capstone Project/i);

		expect(todos).toBeInTheDocument();
	});
});
