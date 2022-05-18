import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DidItGrid from './DidItGrid';

describe('Display DidItGrid', () => {
	it('renders a ul with the value of the key Title and a h2', () => {
		render(
			<DidItGrid
				todos={[
					{
						id: 'bMrcHIV9zyJeyf2sdijq_',
						title: 'gitHub',
						description: 'update my gitHub readme',
						status: 'didIt',
					},
					{
						id: '6HW1op2QThpUiWXAD-MVK',
						title: 'Invitations',
						description: 'send invitations for Johns B-day per email',
						status: 'didIt',
					},
				]}
			/>
		);

		const todos = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading', { name: /DidIT/i });

		expect(todos).toHaveLength(2);
		expect(headline).toBeInTheDocument();
	});
});
