import DoingIt from './DoingIt';
import useStore from '../../lib/useStore';
import GenericGrid from './GenericGrid';
import Dropzone from '../Dropzones/Dropzone';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);
	const moveTwoUp = useStore(state => state.moveTwoUp);

	return (
		<GenericGrid
			todoList={doingIts}
			dropzone={<Dropzone onMove={moveTwoUp} />}
			TodoComponent={DoingIt}
		/>
	);
}
