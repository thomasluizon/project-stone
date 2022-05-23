import { useContext, useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ICategory } from '../core/category';
import { ThemeContext } from '../pages/_app';
import FilterMenu from './FilterMenu';

const FilterButton = styled.button`
   cursor: pointer;
   border: 1px solid ${props => props.theme.colors.white};
   padding: 0.5rem 1rem;
   border-radius: 0.4rem;
   &:hover {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
   }
`;

const Filter = () => {
   const [filter, setFilter] = useState(false);
   const { setCategories, categories }: any = useContext(ThemeContext);
   const theme = useTheme();
   const button = useRef(null);

   const handleCheck = (name: string, value: boolean, index: number) => {
      const arr: ICategory[] = [...categories].filter(
         category => category.name !== name
      );

      arr.splice(index, 0, { name, isChecked: value });
      setCategories(arr);
   };

   return (
      <>
         {filter && (
            <FilterMenu
               button={button}
               setFilter={setFilter}
               handleCheck={handleCheck}
               filter={filter}
            />
         )}
         <FilterButton
            ref={button}
            onClick={() => setFilter(!filter)}
            theme={theme}
            id="filter-button"
         >
            Filter
         </FilterButton>
      </>
   );
};

export default Filter;
