import Todos from './Todos';

export default function TodosGrid({ todos }) {
	return (
		<section>
			<ul>
				{todos
					.filter(todos => todos.status === 'doIt')
					.map(todos => (
						<li key={todos.id}>
							<Todos title={todos.title} />
						</li>
					))}
			</ul>
		</section>
	);
}
