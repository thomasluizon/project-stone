import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from '../../global/Container';

const Product = (props: any) => {
   const stone = props.stone;
   const router = useRouter();

   useEffect(() => {
      if (!stone) {
         router.push('/');
      }
   }, []);

   const ProductStyled = styled.div`
      .wrapper {
         h1 {
            font-size: 1.5rem;
         }
      }
   `;

   return stone ? (
      <>
         <Head>
            <title>Project Stone - {stone.name}</title>
         </Head>
         <ProductStyled>
            <Container>
               <div className="wrapper">
                  <h1>Id: {stone.id}</h1>
                  <img src={stone.image} alt="" />
               </div>
            </Container>
         </ProductStyled>
      </>
   ) : (
      <h1>Nenhuma pedra encontrada aqui</h1>
   );
};

export const getServerSideProps = async (context: any) => {
   const stone = await fetch(
      'https://project-stone.herokuapp.com/stone/' + context.query.id
   )
      .then(res => res.json())
      .then(json => json);

   return {
      props: {
         stone: stone.stone,
      },
   };
};

export default Product;
