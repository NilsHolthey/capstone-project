import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import update from 'immutability-helper';
import { loadFromLocal, saveToLocal } from '../src/lib/localStorage';
import { getDidits } from '../src/services/get-didIts';
import { Container } from '../src/components/UI/Grid/Container';
import { ListHeadline } from '../src/components/UI/TodoCard/ListHeadline.styled';
import { TodoList } from '../src/components/UI/TodoCard/TodoList.styled';

export function getStaticProps() {
	const initialDidits = getDidits();

	return {
		props: {
			initialDidits,
		},
	};
}

export default function DidIt({ initialDidits }) {
	const Todo = dynamic(() => import('../src/components/Todos/Todo'), {
		ssr: false,
	});
	const [didits, setDidits] = useState(loadFromLocal('localDidits') ?? initialDidits);

	useEffect(() => {
		saveToLocal('localDidits', didits);
	}, [didits]);

	const deleteTodo = useCallback(
		id => {
			setDidits(didits.filter(didits => didits.id !== id));
		},
		[didits]
	);

	const moveCard = useCallback((dragIndex, hoverIndex) => {
		setDidits(prevCards =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex]],
				],
			})
		);
	}, []);

	const renderCard = useCallback(
		(didit, index) => {
			return (
				<Todo
					key={didit.id}
					index={index}
					id={didit.id}
					title={didit.title}
					moveCard={moveCard}
					deleteTodo={deleteTodo}
				/>
			);
		},
		[moveCard, deleteTodo]
	);

	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">{didits.map((todo, index) => renderCard(todo, index))}</TodoList>
		</Container>
	);
}
