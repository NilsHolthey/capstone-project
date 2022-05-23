import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AddButton } from '../UI/Button/AddButton.styled';

describe('Display Footer', () => {
	it('renders the Footer and a Button', () => {
		render(<AddButton />);

		const addButton = screen.getByRole('button');

		expect(addButton).toBeInTheDocument();
	});
});
