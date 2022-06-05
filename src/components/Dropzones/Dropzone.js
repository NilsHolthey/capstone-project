import { useDrop } from 'react-dnd';

import SvgIcon from '../SVGs/icons';
import { Dropzone } from '../UI/Dropzone/Dropzone.styled';
import { ItemTypes } from '../UI/items';

export default function Dropzone1({ children, onMove }) {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: item => onMove(item.index),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Dropzone ref={drop} background={isOver ? '#d5c3dd' : '#f6f6f6'}>
			{children}
			<SvgIcon variant="dropzone" size="50px" color="#6667ab" />
			<p>DnD Item to next list</p>
		</Dropzone>
	);
}
