import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from '../components/Title';
import ProductsComp from '../components/ProductsComp';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { IProduct } from '../core/product';
import Search from '../components/Search';
import { ThemeContext } from './_app';

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

const ProductsSection = styled.section`
	.wrapper {
		${props => props.theme.flex()};
		flex-direction: column;
		gap: 2rem;
	}
`;

const Products: NextPage = (props: any) => {
	const { products, setProducts }: any = useContext(ThemeContext);
	useEffect(() => {
		const productsArr = props.stones.stones;
		setProducts(productsArr);
		setFilteredProducts(productsArr);
	}, [props.stones.stones, setProducts, products]);

	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

	const theme = useTheme();

	const [inputValue, setInputValue] = useState('');
	const handleSearch = (value: string) => {
		const regex = new RegExp(value, 'gi');
		setInputValue(value);

		if (value.length > 0) {
			const filtered = products.filter((prod: any) => prod.name.match(regex));
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	};

	return (
		<>
			<Head>
				<title>Project Stone - Home</title>
			</Head>
			<>
				<ProductsSection theme={theme}>
					<Container>
						<div className="wrapper">
							<header>
								<Title>Products</Title>
							</header>
							<Search inputValue={inputValue} handleSearch={handleSearch} />
							<ProductsComp products={filteredProducts} />
						</div>
					</Container>
				</ProductsSection>
			</>
		</>
	);
};

export default Products;
