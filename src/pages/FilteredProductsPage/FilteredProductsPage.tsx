import TableFooter from '../../components/TableFooter/TableFooter';
import FilteredProducts from '../../components/products/FilteredProducts/FilteredProducts';

import styles from './index.module.scss';

const FilteredProductsPage = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.container}>
        <FilteredProducts />
        <TableFooter />
      </div>
    </div>
  );
};

export default FilteredProductsPage;
