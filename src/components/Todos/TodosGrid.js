import Dropzone from '../Dropzones/Dropzone';
import useStore from '../../lib/useStore';

import GenericGrid from './GenericGrid';
import Todo from './Todo';
import DoItIllustration from '../SVGs/illustrations/DoItIllustration';
import ListButtonRight from './NavListButton/ListButtonRight';
import { useRouter } from 'next/router';

export default function TodoGrid() {
	const todos = useStore(state => state.todos);
	const moveToDoingIt = useStore(state => state.moveToDoingIt);

	const router = useRouter();

	const handleClick = () => {
		router.push('/doingit');
	};

	return (
		<GenericGrid
			todoList={todos}
			dropzone={<Dropzone onMove={moveToDoingIt} />}
			TodoComponent={Todo}
			svgLeft={<DoItIllustration />}
			listButtonRight={<ListButtonRight handleClick={handleClick} />}
		/>
	);
}
