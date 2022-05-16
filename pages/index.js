import TodosGrid from '../src/components/Todos/TodosGrid';
import DoinItGrid from '../src/components/Todos/DoinItGrid';
import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const todos = getTodos();

	return {
		props: {
			todos,
		},
	};
}

export default function Home({ todos }) {
	return (
		<>
			<TodosGrid todos={todos} />
			<DoinItGrid todos={todos} />
		</>
	);
}
