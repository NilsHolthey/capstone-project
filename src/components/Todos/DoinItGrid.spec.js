import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DoinItGrid from './DoinItGrid';

describe('DoinItGrid', () => {
	it('renders an ul with the value of the key "title" and a h2', () => {
		render(
			<DoinItGrid
				todos={[
					{
						id: 'i6b8es2cISprMyjgbg1lk',
						title: 'Gift for John',
						description: 'have to make foto collection for his birthday',
						status: 'doingIt',
					},
					{
						id: '8jMQoM3rwheGryUGdTYkS',
						title: 'Export default vs. named export',
						description: 'Modern Moose',
						status: 'doingIt',
					},
					{
						id: 'jfZ85d_kDkqEmzvdZ25Nx',
						title: 'XY presentation',
						description: 'start my presentation for work',
						status: 'doingIt',
					},
					{
						id: 'QHx9uNRvffME2qkUmPmdM',
						title: 'Single page applications',
						description: 'refactor quizz app',
						status: 'doingIt',
					},
				]}
			/>
		);

		const todos = screen.getAllByRole('listitem');
		const headline = screen.getByRole('heading', { name: /DoingIT/i });

		expect(todos).toHaveLength(4);
		expect(headline).toBeInTheDocument();
	});
});
