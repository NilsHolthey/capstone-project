import Link from 'next/link';
import { useRouter } from 'next/router';
import SvgIcon from '../SVGs/icons';
import { AddButton } from '../UI/Button/AddButton.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<footer>
			<Link passHref href="/CreateTodo">
				<AddButton type="button" pathName={router.pathname}>
					<SvgIcon variant="add" size="40px" color="#6667ab" />
				</AddButton>
			</Link>
		</footer>
	);
}
