import styled, { useTheme } from 'styled-components';
import { IProduct } from '../core/product';

const StyledProducts = styled.div`
	${props => props.theme.flex()};
	flex-wrap: wrap;
	gap: 2rem;
`;

interface ProductsProps {
	products?: IProduct[];
}

const Products = (props: ProductsProps) => {
	// console.log(props.products);
	const theme = useTheme();
	return <StyledProducts theme={theme}></StyledProducts>;
};

export default Products;
