import useStore from '../../lib/useStore';
import DidItIllustration from '../SVGs/illustrations/DidItIllustration';
import DropzoneBack from '../Dropzones/DropzoneBack';
import DidIt from './DidIt';
import GenericGrid from './GenericGrid';
import { useRouter } from 'next/router';
import ListButtonLeft from './NavListButton/ListButtonLeft';

export default function DidItGrid() {
	const didIts = useStore(state => state.didIts);
	const SendBackToDoingIt = useStore(state => state.SendBackToDoingIt);
	const router = useRouter();

	const handleClick = () => {
		router.push('/doingit');
	};
	return (
		<GenericGrid
			todoList={didIts}
			TodoComponent={DidIt}
			headline="DidIT"
			dropzoneBack={<DropzoneBack onMove={SendBackToDoingIt} />}
			svgRight={<DidItIllustration />}
			listButtonLeft={<ListButtonLeft handleClick={handleClick} />}
		/>
	);
}
