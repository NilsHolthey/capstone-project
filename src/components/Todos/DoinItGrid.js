import DoingIt from './DoingIt';
import useStore from '../../lib/useStore';
import GenericGrid from './GenericGrid';
import Dropzone from '../Dropzones/Dropzone';
import DropzoneBack from '../Dropzones/DropzoneBack';
import DoingItIllustration from '../SVGs/illustrations/DoingItIllustration';
import ListButtonRight from './NavListButton/ListButtonRight';
import { useRouter } from 'next/router';
import ListButtonLeft from './NavListButton/ListButtonLeft';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);
	const moveToDidIt = useStore(state => state.moveToDidIt);
	const SendBackToDoIt = useStore(state => state.SendBackToDoIt);

	const router = useRouter();

	const handleClick = () => {
		router.push('/didit');
	};
	const handleClickPrevious = () => {
		router.push('/todo');
	};

	return (
		<GenericGrid
			todoList={doingIts}
			dropzone={<Dropzone onMove={moveToDidIt} />}
			dropzoneBack={<DropzoneBack onMove={SendBackToDoIt} />}
			svgCenter={<DoingItIllustration />}
			TodoComponent={DoingIt}
			listButtonRight={<ListButtonRight handleClick={handleClick} />}
			listButtonLeft={<ListButtonLeft handleClick={handleClickPrevious} />}
		/>
	);
}
