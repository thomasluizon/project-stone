import Head from 'next/head';
import styled from 'styled-components';
import Container from '../../global/Container';

const Product = (props: any) => {
   const stone = props.stone.stone;

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
   );
};

export const getStaticProps = async (_props: any) => {
   const stone = await fetch(
      'https://project-stone.herokuapp.com/stone/' + _props.params.id
   )
      .then(res => res.json())
      .then(json => json);

   return {
      props: {
         stone,
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
