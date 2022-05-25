import React, { useCallback, useEffect, useState, createContext } from 'react';
import update from 'immutability-helper';
import { getTodos } from '../src/services/get-todos';
import { loadFromLocal, saveToLocal } from '../src/components/lib/localStorage';
import { TodoList } from '../src/components/UI/TodoCard/TodoList.styled';
import { Container } from '../src/components/UI/Grid/Container';
import { ListHeadline } from '../src/components/UI/TodoCard/ListHeadline.styled';
import dynamic from 'next/dynamic';
import Dropzone1 from '../src/components/Dropzones/Dropzone1';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export const CardContext = createContext({
	moveOneUp: null,
});

export default function Home({ initialTodos }) {
	const Todo = dynamic(() => import('../src/components/Todos/Todo'), {
		ssr: false,
	});
	const [todos, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	useEffect(() => {
		saveToLocal('localTodos', todos);
	}, [todos]);

	const moveOneUp = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos]
	);

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
		<CardContext.Provider value={moveOneUp}>
			<Container>
				<Dropzone1 />
				<ListHeadline>DoIT</ListHeadline>
				<TodoList role="list">
					{todos.map((todo, index) => renderCard(todo, index))}
				</TodoList>
			</Container>
		</CardContext.Provider>
	);
}
