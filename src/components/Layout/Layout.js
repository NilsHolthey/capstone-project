import BottomNavbar from '../Navbar/BottomNavbar';
import TopNavbar from '../Navbar/TopNavbar';

export default function Layout({ children }) {
	return (
		<>
			<TopNavbar />
			{children}
			<BottomNavbar />
		</>
	);
}
