import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('renders one inputfield and a submit button', () => {
		render(<Form />);

		const Input = screen.getByLabelText(/title/i);
		const submitButton = screen.getByRole('button', { name: /Submit/i });

		expect(Input).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
