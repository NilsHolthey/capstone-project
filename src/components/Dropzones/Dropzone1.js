import { useDrop } from 'react-dnd';
import useStore from '../../lib/useStore';

import SvgIcon from '../SVGs/icons';
import { Dropzone } from '../UI/Dropzone/Dropzone.styled';
import { ItemTypes } from '../UI/items';

export default function Dropzone1(props) {
	const moveOneUp = useStore(state => state.moveOneUp);

	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: item => moveOneUp(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Dropzone ref={drop} background={isOver ? '#d5c3dd' : '#f6f6f6'}>
			{props.children}
			<SvgIcon variant="dropzone" size="50px" color="#6667ab" />
		</Dropzone>
	);
}
