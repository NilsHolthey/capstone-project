import Dropzone from '../Dropzones/Dropzone';
import useStore from '../../lib/useStore';

import GenericGrid from './GenericGrid';
import Todo from './Todo';
import DoItIllustration from '../SVGs/illustrations/DoItIllustration';

export default function TodoGrid() {
	const todos = useStore(state => state.todos);
	const moveToDoingIt = useStore(state => state.moveToDoingIt);

	return (
		<GenericGrid
			todoList={todos}
			dropzone={<Dropzone onMove={moveToDoingIt} />}
			TodoComponent={Todo}
			svgLeft={<DoItIllustration />}
			headline="DoIT"
		/>
	);
}
