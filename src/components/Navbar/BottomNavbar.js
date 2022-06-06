import Link from 'next/link';
import { useRouter } from 'next/router';
import SvgIcon from '../SVGs/icons';
import { AddIcon } from '../UI/Button/AddButton.styled';
import { HomeIcon } from '../UI/Button/HomeButton.styled';
import { OverviewIcon } from '../UI/Button/OverviewButton.styled';
import { StyledBottomNav } from '../UI/Navbar/BottomNavbar/StyledBottomNav.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<StyledBottomNav pathName={router.pathname}>
			<Link passHref href="/CreateTodo">
				<AddIcon pathName={router.pathname}>
					<SvgIcon variant="add" size="58px" color="#6667ab" />
				</AddIcon>
			</Link>
			<Link passHref href="/todo">
				<HomeIcon pathName={router.pathname}>
					<SvgIcon variant="home" size="35px" color="white" />
				</HomeIcon>
			</Link>
			<Link passHref href="/overview">
				<OverviewIcon pathName={router.pathname}>
					<SvgIcon variant="analytics" size="35px" color="white" />
				</OverviewIcon>
			</Link>
		</StyledBottomNav>
	);
}
