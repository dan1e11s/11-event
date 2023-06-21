import CartBar from '../../components/CartBar/CartBar';
import TableFooter from '../../components/TableFooter/TableFooter';
import ProductRelatedList from '../../components/products/ProductRelatedList/ProductRelatedList';
import ProductsDetails from '../../components/products/ProductsDetails/ProductsDetails';

import styles from './index.module.scss';

const ProductsDetailsPage = () => {
  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <ProductsDetails />
      </div>
      <CartBar />
      <ProductRelatedList />
      <div style={{ width: '90%', margin: '0 auto' }}>
        <TableFooter />
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
