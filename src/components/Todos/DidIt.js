import useStore from '../../lib/useStore';
import GenericTodo from './GenericTodo';

export default function DidIt(props) {
	const moveCardDid = useStore(state => state.moveCardDid);
	const deleteDid = useStore(state => state.deleteDid);

	return <GenericTodo {...props} moveCard={moveCardDid} deleteTodo={deleteDid} />;
}
