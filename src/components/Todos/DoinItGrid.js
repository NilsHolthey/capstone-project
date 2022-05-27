import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import DoingIt from './DoingIt';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import Dropzone2 from '../Dropzones/Dropzone2';
import useStore from '../../lib/useStore';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);

	return (
		<Container>
			<Dropzone2 />
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">
				{doingIts.map((doingIt, index) => {
					return (
						<DoingIt
							key={doingIt.id}
							id={doingIt.id}
							title={doingIt.title}
							index={index}
						/>
					);
				})}
			</TodoList>
		</Container>
	);
}
