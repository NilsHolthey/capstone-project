import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<Link passHref href="/todo">
				DoIT
			</Link>
			<Link passHref href="/doingit">
				DoingIT
			</Link>
			<Link passHref href="/didit">
				DidIT
			</Link>
		</>
	);
}
