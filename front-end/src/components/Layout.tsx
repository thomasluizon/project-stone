import Header from './Header';
import Footer from './Footer';

const Layout = (props: any) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
