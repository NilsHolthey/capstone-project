import React, { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { getTodos } from '../src/services/get-todos';
import { loadFromLocal, saveToLocal } from '../src/components/lib/localStorage';

import { TodoList } from '../src/components/UI/TodoCard/TodoList.styled';
import { Container } from '../src/components/UI/Grid/Container';
import { ListHeadline } from '../src/components/UI/TodoCard/ListHeadline.styled';
import dynamic from 'next/dynamic';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export default function Home({ initialTodos }) {
	const Todo = dynamic(() => import('../src/components/Todos/Todo'), {
		ssr: false,
	});
	const [todos, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	useEffect(() => {
		saveToLocal('localTodos', todos);
	}, [todos]);

	const deleteTodo = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos]
	);

	const moveCard = useCallback((dragIndex, hoverIndex) => {
		setTodos(prevCards =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex]],
				],
			})
		);
	}, []);

	const renderCard = useCallback(
		(todo, index) => {
			return (
				<Todo
					key={todo.id}
					index={index}
					id={todo.id}
					title={todo.title}
					moveCard={moveCard}
					onDeleteTodo={deleteTodo}
				/>
			);
		},
		[moveCard, deleteTodo]
	);

	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">
				{todos
					.filter(todo => todo.status === 'doIt')
					.map((todo, index) => renderCard(todo, index))}
			</TodoList>
		</Container>
	);
}
