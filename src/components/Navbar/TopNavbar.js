import Link from 'next/link';
import { StyledNavbar } from '../UI/Navbar/Navbar.styled';
import { NavLink } from '../UI/Navbar/NavLink.styled';
import { useRouter } from 'next/router';

export default function TopNavbar() {
	const router = useRouter();

	return (
		<StyledNavbar pathName={router.pathname}>
			<Link passHref href="/todo">
				<NavLink pathName={router.pathname}>DoIT</NavLink>
			</Link>
			<Link passHref href="/doingit">
				<NavLink pathName={router.pathname}>DoingIT</NavLink>
			</Link>
			<Link passHref href="/didit">
				<NavLink pathName={router.pathname}>DidIT</NavLink>
			</Link>
		</StyledNavbar>
	);
}
