import Dropzone from '../Dropzones/Dropzone';
import useStore from '../../lib/useStore';

import GenericGrid from './GenericGrid';
import Todo from './Todo';

export default function TodoGrid() {
	const todos = useStore(state => state.todos);
	const moveOneUp = useStore(state => state.moveOneUp);

	return (
		<GenericGrid
			todoList={todos}
			dropzone={<Dropzone onMove={moveOneUp} />}
			TodoComponent={Todo}
		/>
	);
}
