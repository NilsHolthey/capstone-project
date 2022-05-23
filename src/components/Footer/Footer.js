import Link from 'next/link';
import { useRouter } from 'next/router';
import SvgIcon from '../SVGs/icons';
import { AddButton } from '../UI/Button/AddButton.styled';
import { StyledFooter } from '../UI/Footer/StyledFooter.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<StyledFooter>
			<Link passHref href="/CreateTodo">
				<AddButton type="button" pathName={router.pathname}>
					<SvgIcon variant="add" size="55px" color="#6667ab" />
				</AddButton>
			</Link>
		</StyledFooter>
	);
}
