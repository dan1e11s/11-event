import CartBar from '../../components/CartBar/CartBar';
import ProductsDetails from '../../components/products/ProductsDetails/ProductsDetails';

import styles from './index.module.scss';

const ProductsDetailsPage = () => {
  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <ProductsDetails />
      </div>
      <CartBar />
    </div>
  );
};

export default ProductsDetailsPage;
