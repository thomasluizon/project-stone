import type { NextPage } from 'next';
import Container from '../global/Container';
import { IProduct } from '../core/product';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';

const HomeSection = styled.section`
   .wrapper {
      ${props => props.theme.flex()}
      &-col {
         ${props => props.theme.flexcol()}
      }
   }

   .trending-container {
      .trending-card {
         width: 50%;
      }
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

   const trending = [filtered[0], filtered[1], filtered[2]];
   console.log(trending);

   return (
      <HomeSection theme={theme}>
         <Container>
            <div className="wrapper wrapper-col">
               <Title>Most Selled</Title>
               <div className="wrapper trending-container">
                  {trending.map(stone => (
                     <div className="trending-card">
                        <img src={stone.image} />
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </HomeSection>
   );
};

export default Home;
