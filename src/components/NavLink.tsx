import Link from 'next/link';

interface NavLinkProps {
	setMobileDrawer: (boolean: boolean) => void;
	href: string;
	children: any;
}

const NavLink = (props: NavLinkProps) => {
	return (
		<li onClick={() => props.setMobileDrawer(false)}>
			<Link href={props.href}>
				<a>{props.children}</a>
			</Link>
		</li>
	);
};

export default NavLink;
