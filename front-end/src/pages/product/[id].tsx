import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from '../../global/Container';

const Product = (props: any) => {
	const router = useRouter();
	const element = props.stones.stones.filter((stone: any) => {
		return stone.id == router.query.id;
	})[0];

	console.log(element);

	const ProductStyled = styled.div`
		.wrapper {
			h1 {
				font-size: 1.5rem;
			}
		}
	`;

	return (
		<>
			<Head>
				<title>Project Stone - {element.name}</title>
			</Head>
			<ProductStyled>
				<Container>
					<div className="wrapper">
						<h1>Id: {element.id}</h1>
						<img src={element.image} alt="" />
					</div>
				</Container>
			</ProductStyled>
		</>
	);
};

export const getStaticProps = async () => {
	const stones = await fetch('https://project-stone.herokuapp.com/stones')
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
	const res = await fetch('https://project-stone.herokuapp.com/stones');
	const products = await res.json();
	const paths = products.stones.map((post: any) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: false };
}

export default Product;
