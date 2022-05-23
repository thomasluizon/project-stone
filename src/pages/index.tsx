import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../global/Container';
import { IProduct } from '../core/product';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';
import Carrousel from '../components/Carrousel';

const HomeSection = styled.section`
   .wrapper {
      ${props => props.theme.flex()}
   }
`;

export const getStaticProps = async () => {
   const stones = await fetch('https://project-stone.vercel.app/api/products')
      .then(res => res.json())
      .then(json => json);

   return {
      revalidate: 86400,
      props: {
         stones: stones.stones,
      },
   };
};

const Home: NextPage = (props: any) => {
   const theme = useTheme();
   const filtered = props.stones.sort((a: IProduct, b: IProduct) => {
      return b.sales - a.sales;
   });

   const trending = [filtered[0], filtered[1], filtered[2], filtered[3]];

   return (
      <>
         <Head>
            <title>Project Stone - Home</title>
         </Head>
         <HomeSection theme={theme}>
            <Container>
               <div className="wrapper">
                  <Title>Most Selled</Title>
               </div>
               <Carrousel trending={trending} />
            </Container>
         </HomeSection>
      </>
   );
};

export default Home;
