import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();
	return (
		<footer>
			<Link passHref href="/CreateTodo">
				<button type="button" pathName={router.pathname}>
					add
				</button>
			</Link>
		</footer>
	);
}
