import useStore from '../../lib/useStore';

import GenericTodo from './GenericTodo';

export default function Todo(props) {
	const moveCard = useStore(state => state.moveCard);
	const deleteTodo = useStore(state => state.deleteTodo);

	return <GenericTodo {...props} moveCard={moveCard} deleteTodo={deleteTodo} />;
}
