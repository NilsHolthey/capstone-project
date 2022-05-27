import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import update from 'immutability-helper';
import { loadFromLocal, saveToLocal } from '../src/lib/localStorage';
import { getDoingIts } from '../src/services/get-doingIts';
import { TodoList } from '../src/components/UI/TodoCard/TodoList.styled';
import { ListHeadline } from '../src/components/UI/TodoCard/ListHeadline.styled';
import { Container } from '../src/components/UI/Grid/Container';

export function getStaticProps() {
	const initialDoingIts = getDoingIts();

	return {
		props: {
			initialDoingIts,
		},
	};
}

export default function DoinIt({ initialDoingIts }) {
	const Todo = dynamic(() => import('../src/components/Todos/Todo'), {
		ssr: false,
	});
	const [doingIts, setDoingIts] = useState(loadFromLocal('localDoingIts') ?? initialDoingIts);

	useEffect(() => {
		saveToLocal('localDoingIts', doingIts);
	}, [doingIts]);

	const deleteTodo = useCallback(
		id => {
			setDoingIts(doingIts.filter(doingIts => doingIts.id !== id));
		},
		[doingIts]
	);

	const moveCard = useCallback((dragIndex, hoverIndex) => {
		setDoingIts(prevCards =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex]],
				],
			})
		);
	}, []);

	const renderCard = useCallback(
		(doingIt, index) => {
			return (
				<Todo
					key={doingIt.id}
					index={index}
					id={doingIt.id}
					title={doingIt.title}
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
				{doingIts.map((todo, index) => renderCard(todo, index))}
			</TodoList>
		</Container>
	);
}
