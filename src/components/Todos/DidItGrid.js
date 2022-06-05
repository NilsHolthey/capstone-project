import useStore from '../../lib/useStore';
import DidIt from './DidIt';
import GenericGrid from './GenericGrid';

export default function DidItGrid() {
	const didIts = useStore(state => state.didIts);

	return <GenericGrid todoList={didIts} TodoComponent={DidIt} headline="DidIT" />;
}
