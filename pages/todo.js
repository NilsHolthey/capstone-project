import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from '../src/components/Form/Form';
import TodosGrid from '../src/components/Todos/TodosGrid';
import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export default function Home({ initialTodos }) {
	const [todos, setTodos] = useState(initialTodos);

	const addTodo = newdata => {
		setTodos([...todos, { id: nanoid(), status: 'doIt', title: newdata.title }]);
		console.log(newdata);
	};
	return (
		<>
			<TodosGrid todos={todos} />
			<Form onAddTodo={addTodo} />
		</>
	);
}
