import React from 'react';

import { getTodos } from '../src/services/get-todos';

import dynamic from 'next/dynamic';

export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

// export const CardContext = createContext({
// 	moveOneUp: null,
// });

export default function Home() {
	const TodoGrid = dynamic(() => import('../src/components/Todos/TodosGrid'), {
		ssr: false,
	});
	// const [todos_, setTodos] = useState(loadFromLocal('localTodos') ?? initialTodos);

	// useEffect(() => {
	// 	saveToLocal('localTodos', todos);
	// }, [todos]);

	// const moveOneUp = useCallback(
	// 	id => {
	// 		setTodos(todos.filter(todo => todo.id !== id));
	// 	},
	// 	[todos]
	// );

	// const moveCard = useCallback((dragIndex, hoverIndex) => {
	// 	setTodos(prevCards =>
	// 		update(prevCards, {
	// 			$splice: [
	// 				[dragIndex, 1],
	// 				[hoverIndex, 0, prevCards[dragIndex]],
	// 			],
	// 		})
	// 	);
	// }, []);

	return <TodoGrid />;
}
