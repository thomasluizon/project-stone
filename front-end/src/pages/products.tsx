import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from '../components/Title';
import ProductsComp from '../components/ProductsComp';
import { IProduct } from '../core/product';
import Search from '../components/Search';
import { ThemeContext } from './_app';
import Filter from '../components/Filter';
import { ICategory } from '../core/category';

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

const ProductsSection = styled.section`
	.wrapper {
		${props => props.theme.flex()};
		flex-direction: column;
		gap: 2rem;

		.wrapper-filter {
			${props => props.theme.flex()};
			gap: 0.5rem;
			position: relative;
		}
	}
`;

const Products: NextPage = (props: any) => {
	const { products, setProducts, setCategories }: any =
		useContext(ThemeContext);
	const [inputValue, setInputValue] = useState('');
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const productsArr = props.stones.stones;
		setProducts(productsArr);
		setFilteredProducts(productsArr);

		const categories: ICategory[] = [];

		props.stones.categories.forEach((category: string) => {
			categories.push({
				name: category,
				isChecked: false,
			});
		});
		setCategories(categories);
	}, [
		props.stones.stones,
		props.stones.categories,
		setProducts,
		products,
		setCategories,
	]);

	const theme = useTheme();

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
				<title>Project Stone - Products</title>
			</Head>
			<ProductsSection theme={theme}>
				<Container>
					<div className="wrapper">
						<header>
							<Title>Products</Title>
						</header>
						<div className="wrapper-filter">
							<Search inputValue={inputValue} handleSearch={handleSearch} />
							<Filter />
						</div>
						<ProductsComp products={filteredProducts} />
					</div>
				</Container>
			</ProductsSection>
		</>
	);
};

export default Products;
