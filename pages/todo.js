import TodosGrid from '../src/components/Todos/TodosGrid';

import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const todos = getTodos();

	return {
		props: {
			todos,
		},
	};
}

export default function Todo({ todos }) {
	return <TodosGrid todos={todos} />;
}
