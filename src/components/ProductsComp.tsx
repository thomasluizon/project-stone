import styled, { useTheme } from 'styled-components';
import { IProduct } from '../core/product';
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
	products?: IProduct[];
}

const ProductsComp = (props: ProductsProps) => {
	const theme = useTheme();

	return (
		<StyledProducts theme={theme}>
			{props.products?.map(product => {
				return (
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
			})}
		</StyledProducts>
	);
};

export default ProductsComp;
