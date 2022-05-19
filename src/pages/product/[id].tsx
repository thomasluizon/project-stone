import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from '../../global/Container';

const Product = (props: any) => {
	const router = useRouter();
	const element = props.stones.stones.filter((stone: any) => {
		return stone.id == router.query.id;
	})[0];

	const ProductStyled = styled.div`
		.wrapper {
			h1 {
				font-size: 1.5rem;
			}
		}
	`;

	return (
		<ProductStyled>
			<Container>
				<div className="wrapper">
					<h1>Id: {element.id}</h1>
				</div>
			</Container>
		</ProductStyled>
	);
};

export const getStaticProps = async () => {
	const stones = await fetch('https://project-stone.vercel.app/api/products')
		.then(res => res.json())
		.then(json => json);

	return {
		revalidate: 86400,
		props: {
			stones,
		},
	};
};

export async function getStaticPaths() {
	const res = await fetch('https://project-stone.vercel.app/api/products');
	const products = await res.json();
	const paths = products.stones.map((post: any) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: false };
}

export default Product;
