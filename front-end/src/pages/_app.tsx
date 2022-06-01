import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../global/theme';
import Layout from '../components/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { Context, useEffect, useState } from 'react';
import { IProduct } from '../core/product';
import { ICategory } from '../core/category';

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

// Commented lines were created for testing loading a Component while route changing, like showing a spinner while waiting for route to load
// Just uncomment to setup again

// import Router from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
   const [products, setProducts] = useState<IProduct[]>();
   const [categories, setCategories] = useState<ICategory[]>([]);
   //    const [loadingRoute, setLoadingRoute] = useState(false);

   //    useEffect(() => {
   //       const start = () => {
   //          setLoadingRoute(true);
   //          console.log('carregando');
   //       };
   //       const end = () => {
   //          setLoadingRoute(false);
   //          console.log('carregado');
   //       };

   //       Router.events.on('routeChangeStart', start);
   //       Router.events.on('routeChangeComplete', end);
   //       Router.events.on('routeChangeError', end);
   //       return () => {
   //          Router.events.on('routeChangeStart', start);
   //          Router.events.on('routeChangeComplete', end);
   //          Router.events.on('routeChangeError', end);
   //       };
   //    }, []);

   return (
      <ThemeContext.Provider
         value={{ products, setProducts, categories, setCategories }}
      >
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <Layout>
               {/* {loadingRoute ? (
                  <h1>Carregando</h1>
               ) : ( */}
               <Component {...pageProps} />
               {/* )} */}
            </Layout>
         </ThemeProvider>
      </ThemeContext.Provider>
   );
}

export default MyApp;
