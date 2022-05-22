import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getTodos } from '../src/services/get-todos';
import { loadFromLocal, saveToLocal } from '../src/components/lib/localStorage';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export default function DoinIt({ initialTodos }) {
	const DoinItGrid = dynamic(() => import('../src/components/Todos/DoinItGrid'), {
		ssr: false,
	});
	const [todos, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	useEffect(() => {
		saveToLocal('localTodos', todos);
	}, [todos]);

	const deleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};
	return <DoinItGrid todos={todos} onDeleteTodo={deleteTodo} />;
}
