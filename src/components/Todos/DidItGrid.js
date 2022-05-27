import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import useStore from '../../lib/useStore';
import DidIt from './DidIt';

export default function DidItGrid() {
	const didIts = useStore(state => state.didIts);

	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">
				{didIts.map((didIt, index) => {
					return <DidIt key={didIt.id} id={didIt.id} title={didIt.title} index={index} />;
				})}
			</TodoList>
		</Container>
	);
}
