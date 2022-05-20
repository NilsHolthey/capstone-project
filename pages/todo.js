import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';
import Form from '../src/components/Form/Form';
import { useEffect, useState } from 'react';
import { loadFromLocal, saveToLocal } from '../src/components/lib/localstorage';
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
	const TodosGrid = dynamic(() => import('../src/components/Todos/TodosGrid'), {
		ssr: false,
	});
	const [todos, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	useEffect(() => {
		saveToLocal('localTodos', todos);
	}, [todos]);

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
