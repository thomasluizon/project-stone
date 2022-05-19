import styled, { useTheme } from 'styled-components';
import { IProduct } from '../core/product';
import Product from './Product';

const StyledProducts = styled.div`
	${props => props.theme.flex('center', 'flex-start')};
	flex-wrap: wrap;
	gap: 2rem;
`;

interface ProductsProps {
	products?: IProduct[];
}

const Products = (props: ProductsProps) => {
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
					/>
				);
			})}
		</StyledProducts>
	);
};

export default Products;
