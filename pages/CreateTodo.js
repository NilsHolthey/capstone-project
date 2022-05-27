import Form from '../src/components/Form/Form';
import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export default function CreateTodo() {
	return <Form />;
}
