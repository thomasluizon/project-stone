import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from '../components/Title';
import Products from '../components/Products';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
	const stones = await fetch('http://localhost:3000/api/products')
		.then(res => res.json())
		.then(json => json);

	return {
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

const Home: NextPage = props => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log(props.stones);
	}, []);

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
							<Products />
						</div>
					</Container>
				</HomeSection>
			</>
		</>
	);
};

export default Home;
