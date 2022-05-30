import useStore from '../../lib/useStore';
import GenericTodo from './GenericTodo';

export default function DoingIt(props) {
	const moveCardDo = useStore(state => state.moveCardDo);
	const deleteDo = useStore(state => state.deleteDo);

	return <GenericTodo {...props} moveCard={moveCardDo} deleteTodo={deleteDo} />;
}
