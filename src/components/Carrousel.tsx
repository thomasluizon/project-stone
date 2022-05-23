import styled, { useTheme } from 'styled-components';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { IProduct } from '../core/product';

interface IButton {
   right: boolean;
}

const moveSelected = (
   ref: MutableRefObject<any>,
   setDisabledButton: Dispatch<SetStateAction<boolean>>,
   direction: string,
   duration: number
) => {
   const refItems = ref.current.querySelectorAll('.trending-item');
   const refLength = refItems.length;
   let activeIndex = 0;

   refItems.forEach((e: HTMLElement, index: number) => {
      e.className.includes('--active') ? (activeIndex = index) : '';
   });

   setDisabledButton(true);

   setTimeout(
      () => {
         setDisabledButton(false);
      },
      duration > 100 ? duration - 100 : duration
   );

   refItems[activeIndex].classList.remove('trending-item--active-rtl');
   refItems[activeIndex].classList.remove('trending-item--active-ltr');
   refItems[activeIndex].classList.remove('trending-item--active');

   const nextRefItem =
      activeIndex + 1 > refLength - 1 ? refItems[0] : refItems[activeIndex + 1];
   const prevRefItem =
      activeIndex - 1 < 0 ? refItems[refLength - 1] : refItems[activeIndex - 1];

   switch (direction) {
      case 'right':
         nextRefItem.classList.add('trending-item--active');
         nextRefItem.classList.add('trending-item--active-ltr');
         refItems[activeIndex].classList.add('trending-item--active');
         refItems[activeIndex].classList.add(
            'trending-item--active-sliding--right'
         );
         setTimeout(() => {
            refItems[activeIndex].classList.remove('trending-item--active');
            refItems[activeIndex].classList.remove(
               'trending-item--active-sliding--right'
            );
         }, duration);
         break;
      case 'left':
         prevRefItem.classList.add('trending-item--active');
         prevRefItem.classList.add('trending-item--active-rtl');
         refItems[activeIndex].classList.add('trending-item--active');
         refItems[activeIndex].classList.add(
            'trending-item--active-sliding--left'
         );
         setTimeout(() => {
            refItems[activeIndex].classList.remove('trending-item--active');
            refItems[activeIndex].classList.remove(
               'trending-item--active-sliding--left'
            );
         }, duration);
         break;
      default:
         throw new Error('Invalid direction!');
   }
};

const Button = styled.button`
   position: absolute;
   cursor: pointer;
   top: 50%;
   ${(props: IButton) => (props.right ? 'right: 1rem;' : 'left: 1rem;')};
   transform: translateY(-50%);
   background: black;
   border-radius: 100%;
   padding: 0.5rem;
   z-index: 2;

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

const CarrouselContainer: any = styled.div`
   position: relative;
   .trending-carrousel {
      position: relative;
      margin-top: 2rem;
      width: 100%;
      height: 600px;
      overflow: hidden;
      cursor: pointer;

      &:hover {
         box-shadow: 0px 0px 10px 1px white;
      }

      .trending-item {
         width: 100%;
         height: 100%;
         display: none;

         &-image {
            width: 100%;
            height: 100%;
            position: relative;

            img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }

            &-description {
               display: block;
               position: absolute;
               padding: 0.5rem 0.5rem 0 1rem;
               bottom: 0;
               transition: height 0.5s;
               height: 0;
            }
         }

         &-image:hover {
            .trending-item-image-description {
               display: block;
               height: 100%;
            }
         }

         &--active {
            position: absolute;
            display: block;
            z-index: 1;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            &-ltr {
               animation: ${(props: any) => `${props.transitionTime}ms`}
                  active-rtl;
            }
            &-sliding--right {
               animation: ${(props: any) => `${props.transitionTime}ms`}
                  slide-rtl;
            }
            &-rtl {
               animation: ${(props: any) => `${props.transitionTime}ms`}
                  active-ltr;
            }
            &-sliding--left {
               animation: ${(props: any) => `${props.transitionTime}ms`}
                  slide-ltr;
            }
         }

         @keyframes active-ltr {
            0% {
               ${(props: any) => {
                  return props.reference.current != null
                     ? `left: -${props.reference.current.offsetWidth}px;`
                     : '';
               }};
            }

            100% {
               left: 0px;
            }
         }

         @keyframes slide-ltr {
            0% {
               left: 0px;
            }

            100% {
               ${(props: any) => {
                  return props.reference.current != null
                     ? `left: ${props.reference.current.offsetWidth}px;`
                     : '';
               }};
            }
         }

         @keyframes active-rtl {
            0% {
               ${(props: any) => {
                  return props.reference.current != null
                     ? `left: ${props.reference.current.offsetWidth}px;`
                     : '';
               }};
            }

            100% {
               left: 0px;
            }
         }

         @keyframes slide-rtl {
            0% {
               left: 0px;
            }

            100% {
               ${(props: any) => {
                  return props.reference.current != null
                     ? `left: -${props.reference.current.offsetWidth}px;`
                     : '';
               }};
            }
         }
      }
   }
`;

const Carrousel = (props: any) => {
   const [disabledButton, setDisabledButton] = useState(false);
   const theme = useTheme();
   const carrouselRef = useRef(null);
   const transitionTime = 500;

   return (
      <CarrouselContainer
         transitionTime={transitionTime}
         reference={carrouselRef}
      >
         <Button
            id="prevButton"
            onClick={() => {
               moveSelected(
                  carrouselRef,
                  setDisabledButton,
                  'left',
                  transitionTime
               );
            }}
            disabled={disabledButton}
            right={false}
            theme={theme}
         >
            <i className="bi bi-chevron-double-left"></i>
         </Button>
         <div className="trending-carrousel" ref={carrouselRef}>
            {props.trending.map((stone: IProduct, index: number) => (
               <Link href={`/product/${stone.id}`} key={index}>
                  <div
                     className={`trending-item ${
                        index == 0 ? 'trending-item--active' : ''
                     }`}
                  >
                     <div className="trending-item-image">
                        <img src={stone.image} alt="Stone" />
                        <div className="trending-item-image-description">
                           <p>{stone.description}</p>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
         <Button
            onClick={() => {
               moveSelected(
                  carrouselRef,
                  setDisabledButton,
                  'right',
                  transitionTime
               );
            }}
            right={true}
            theme={theme}
            id="nextButton"
            disabled={disabledButton}
         >
            <i className="bi bi-chevron-double-right"></i>
         </Button>
      </CarrouselContainer>
   );
};

export default Carrousel;
