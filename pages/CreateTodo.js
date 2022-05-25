import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';
import Form from '../src/components/Form/Form';
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

export default function CreateTodo({ initialTodos }) {
	const [todos, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	useEffect(() => {
		saveToLocal('localTodos', todos);
	}, [todos]);

	const addTodo = useCallback(
		newdata => {
			setTodos([{ id: nanoid(), title: newdata.title }, ...todos]);
		},
		[todos, setTodos]
	);

	return <Form onAddTodo={addTodo} />;
}
