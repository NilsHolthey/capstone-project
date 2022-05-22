import SvgIcon from '../SVGs/icons';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';

export default function Todo({ id, title, onDeleteTodo }) {
	const handleDelete = () => {
		onDeleteTodo(id);
	};

	return (
		<>
			{title}
			<DeleteButton onClick={handleDelete}>
				<SvgIcon variant="delete" size="20px" color="#D9D9D9" />
			</DeleteButton>
		</>
	);
}
