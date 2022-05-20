import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from '../components/Title';
import ProductsComp from '../components/ProductsComp';
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

const ProductsSection = styled.section`
   .wrapper {
      ${props => props.theme.flex()};
      flex-direction: column;
      gap: 2rem;
   }
`;

const Products: NextPage = (props: any) => {
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
            <ProductsSection theme={theme}>
               <Container>
                  <div className="wrapper">
                     <header>
                        <Title>Products</Title>
                     </header>
                     <ProductsComp products={products} />
                  </div>
               </Container>
            </ProductsSection>
         </>
      </>
   );
};

export default Products;
