import Link from 'next/link';
import { useRouter } from 'next/router';
import SvgIcon from '../SVGs/icons';
import { AddIcon } from '../UI/Button/AddButton.styled';
import { StyledBottomNav } from '../UI/Navbar/BottomNavbar/StyledBottomNav.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<StyledBottomNav>
			<Link passHref href="/CreateTodo">
				<AddIcon pathName={router.pathname}>
					<SvgIcon variant="add" size="58px" color="#6667ab" />
				</AddIcon>
			</Link>
		</StyledBottomNav>
	);
}
