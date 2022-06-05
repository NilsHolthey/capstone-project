import useStore from '../../lib/useStore';
import DidItIllustration from '../SVGs/illustrations/DidItIllustration';
import DropzoneBack from '../Dropzones/DropzoneBack';
import DidIt from './DidIt';
import GenericGrid from './GenericGrid';

export default function DidItGrid() {
	const didIts = useStore(state => state.didIts);
	const SendBackToDoingIt = useStore(state => state.SendBackToDoingIt);

	return (
		<GenericGrid
			todoList={didIts}
			TodoComponent={DidIt}
			headline="DidIT"
			dropzoneBack={<DropzoneBack onMove={SendBackToDoingIt} />}
			svgRight={<DidItIllustration />}
		/>
	);
}
