import DoingIt from './DoingIt';
import useStore from '../../lib/useStore';
import GenericGrid from './GenericGrid';
import Dropzone from '../Dropzones/Dropzone';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);
	const moveToDidIt = useStore(state => state.moveToDidIt);

	return (
		<GenericGrid
			todoList={doingIts}
			dropzone={<Dropzone onMove={moveToDidIt} />}
			TodoComponent={DoingIt}
		/>
	);
}
