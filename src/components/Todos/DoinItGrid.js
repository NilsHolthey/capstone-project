import DoingIt from './DoingIt';
import useStore from '../../lib/useStore';
import GenericGrid from './GenericGrid';
import Dropzone from '../Dropzones/Dropzone';
import DropzoneBack from '../Dropzones/DropzoneBack';
import DoingItIllustration from '../SVGs/illustrations/DoingItIllustration';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);
	const moveToDidIt = useStore(state => state.moveToDidIt);
	const SendBackToDoIt = useStore(state => state.SendBackToDoIt);

	return (
		<GenericGrid
			todoList={doingIts}
			dropzone={<Dropzone onMove={moveToDidIt} />}
			dropzoneBack={<DropzoneBack onMove={SendBackToDoIt} />}
			svgCenter={<DoingItIllustration />}
			TodoComponent={DoingIt}
			headline="DoingIT"
		/>
	);
}
