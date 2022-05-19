import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from '../components/Title';
import Products from '../components/Products';
import { useEffect, useState } from 'react';
import { IProduct } from '../core/product';

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

const HomeSection = styled.section`
	.wrapper {
		${props => props.theme.flex()};
		flex-direction: column;
		gap: 2rem;
	}
`;

const Home: NextPage = (props: any) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const productsArr = props.stones.stones;
		setProducts(productsArr);
	}, [props.stones.stones]);

	const theme = useTheme();
	return (
		<>
			<Head>
				<title>Project Stone - Home</title>
			</Head>
			<>
				<HomeSection theme={theme}>
					<Container>
						<div className="wrapper">
							<header>
								<Title>Products</Title>
							</header>
							<Products products={products} />
						</div>
					</Container>
				</HomeSection>
			</>
		</>
	);
};

export default Home;
