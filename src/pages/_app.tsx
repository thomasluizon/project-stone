import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../global/theme';
import Layout from '../components/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { Context, useState } from 'react';
import { IProduct } from '../core/product';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		border: none;
		outline: none;
		appearance: none;
		background-color: ${theme.colors.bg};
		color: ${theme.colors.white};
		text-decoration: none;
		list-style: none;
		font-weight: 300;
	}

	body.mobile {
			overflow-y: hidden;
		}
`;

export const ThemeContext: Context<{}> = React.createContext({});

function MyApp({ Component, pageProps }: AppProps) {
	const [products, setProducts] = useState<IProduct[]>();
	const [categories, setCategories] = useState([]);

	return (
		<ThemeContext.Provider
			value={{ products, setProducts, categories, setCategories }}
		>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default MyApp;
