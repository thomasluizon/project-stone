import type { NextPage } from 'next';
import Container from '../global/Container';
import { IProduct } from '../core/product';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';
import Link from 'next/link';
import { MutableRefObject, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const HomeSection = styled.section`
   .wrapper {
      ${props => props.theme.flex()}
      &-col {
         ${props => props.theme.flexcol()}
      }
   }

   .trending-carrousel {
      position: relative;
      margin-top: 2rem;
      width: 100%;
      height: 600px;
      overflow: hidden;
      &:hover {
         box-shadow: 0px 0px 10px 1px white;
      }

      .trending-item {
         width: 100%;
         height: 100%;

         &-image {
            width: 100%;
            height: 100%;

            img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
         }

         display: none;

         &--active {
            position: relative;
            display: block;
            animation: 0.75s test;
         }

         @keyframes test {
            0% {
               right: 1000px;
            }

            100% {
               right: 0px;
            }
         }
      }
   }
`;

const moveSelected = (
   ref: MutableRefObject<any>,
   setDisabledButton: Dispatch<SetStateAction<boolean>>,
   direction: string
) => {
   const refItems = ref.current.querySelectorAll('.trending-item');
   const refLength = refItems.length;
   let activeIndex = 0;

   refItems.forEach((e: HTMLElement, index: number) => {
      e.className.includes('--active') ? (activeIndex = index) : '';
   });

   setDisabledButton(true);

   setTimeout(() => {
      setDisabledButton(false);
   }, 500);

   switch (direction) {
      case 'right':
         const nextRefItem =
            activeIndex + 1 > refLength - 1
               ? refItems[0]
               : refItems[activeIndex + 1];
         nextRefItem.classList.add('trending-item--active');
         break;
      case 'left':
         const prevRefItem =
            activeIndex - 1 < 0
               ? refItems[refLength - 1]
               : refItems[activeIndex - 1];
         prevRefItem.classList.add('trending-item--active');
         break;
      default:
         throw new Error('Invalid direction!');
   }

   refItems[activeIndex].classList.remove('trending-item--active');
};

interface IButton {
   right: boolean;
}

const Button = styled.button`
   position: absolute;
   cursor: pointer;
   top: 50%;
   ${(props: IButton) => (props.right ? 'right: 1rem;' : 'left: 1rem;')};
   transform: translateY(-50%);
   background: black;
   border-radius: 100%;
   padding: 0.5rem;
   z-index: 1;

   .bi {
      background: transparent;
   }

   .bi-chevron-double-left::before,
   .bi-chevron-double-right::before {
      font-size: 2rem;
      background: transparent;
      transition: 0.2s all;
   }

   &:hover {
      .bi-chevron-double-left::before,
      .bi-chevron-double-right::before {
         color: ${props => props.theme.colors.primary};
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

   const [disabledButton, setDisabledButton] = useState(false);

   const trending = [filtered[0], filtered[1], filtered[2]];

   const carrouselRef = useRef(null);

   return (
      <HomeSection theme={theme}>
         <Container>
            <div className="wrapper wrapper-col">
               <Title>Most Selled</Title>
               <div className="wrapper trending-carrousel" ref={carrouselRef}>
                  <Button
                     id="prevButton"
                     onClick={() => {
                        moveSelected(carrouselRef, setDisabledButton, 'left');
                     }}
                     disabled={disabledButton}
                     right={false}
                     theme={theme}
                  >
                     <i className="bi bi-chevron-double-left"></i>
                  </Button>
                  {trending.map((stone, index) => (
                     <Link href={`/product/${stone.id}`} key={index}>
                        <div
                           className={`trending-item ${
                              index == 0 ? 'trending-item--active' : ''
                           }`}
                        >
                           <div className="trending-item-image">
                              <img src={stone.image} />
                           </div>
                        </div>
                     </Link>
                  ))}
                  <Button
                     onClick={() => {
                        moveSelected(carrouselRef, setDisabledButton, 'right');
                     }}
                     right={true}
                     theme={theme}
                     id="nextButton"
                     disabled={disabledButton}
                  >
                     <i className="bi bi-chevron-double-right"></i>
                  </Button>
               </div>
            </div>
         </Container>
      </HomeSection>
   );
};

export default Home;
