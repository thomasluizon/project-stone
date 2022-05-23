import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { ICategory } from '../core/category';
import { IProduct } from '../core/product';
import { ThemeContext } from '../pages/_app';
import Product from './Product';

const StyledProducts = styled.div`
   ${props => props.theme.flex('center', 'flex-start')};
   flex-wrap: wrap;
   gap: 2rem;
   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`;

interface ProductsProps {
   products: IProduct[];
}

const ProductsComp = (props: ProductsProps) => {
   const theme = useTheme();
   const { categories }: any = useContext(ThemeContext);
   const isCheckedNone =
      categories.filter((category: ICategory) => category.isChecked).length ===
      0;

   return (
      <StyledProducts theme={theme}>
         {props.products.length !== 0 ? (
            props.products.map(product => {
               let returnValue = undefined;
               if (!isCheckedNone) {
                  categories.forEach((category: ICategory) => {
                     if (
                        category.name === product.category &&
                        category.isChecked
                     ) {
                        returnValue = (
                           <Product
                              key={product.id}
                              img={product.image}
                              price={product.price}
                              desc={product.description}
                              name={product.name}
                              id={product.id}
                              category={product.category}
                           />
                        );
                     }
                  });
               } else {
                  returnValue = (
                     <Product
                        key={product.id}
                        img={product.image}
                        price={product.price}
                        desc={product.description}
                        name={product.name}
                        id={product.id}
                        category={product.category}
                     />
                  );
               }
               if (typeof returnValue != 'undefined') {
                  return returnValue;
               }
            })
         ) : (
            <p>Sorry, product not found.</p>
         )}
      </StyledProducts>
   );
};

export default ProductsComp;
