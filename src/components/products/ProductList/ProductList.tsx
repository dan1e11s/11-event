import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { selectVisibleProducts } from '../../../features/products/products-selectors';

import styles from './index.module.scss';
import {
  selectCategory,
  selectSearch,
} from '../../../features/controls/controls-selectors';
import { RootState, useAppDispatch } from '../../../store';
import { useEffect } from 'react';
import { getProducts } from '../../../features/products/products-actions';

const ProductList = () => {
  const category = useSelector(selectCategory);
  const search = useSelector(selectSearch);
  const products = useSelector((state: RootState) =>
    selectVisibleProducts(state, { category, search })
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, category]);

  return (
    <div className={styles.container}>
      <p>YOU MIGHT BE INTERESTED IN</p>
      <div className={styles.content}>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
