import { useDrop } from 'react-dnd';

import SvgIcon from '../SVGs/icons';

import { DropzoneBack } from '../UI/Dropzone/DropzoneBack.styled';
import { ItemTypes } from '../UI/items';

export default function DropzoneB({ children, onMove }) {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: item => onMove(item.index),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<DropzoneBack ref={drop} background={isOver ? '#d5c3dd' : '#f6f6f6'}>
			{children}
			<SvgIcon variant="dropzone" size="50px" color="#6667ab" />
		</DropzoneBack>
	);
}
