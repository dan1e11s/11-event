import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store';
import { selectFilteredProducts } from '../../../features/products/products-selectors';
import { getProducts } from '../../../features/products/products-actions';

import ProductItem from '../ProductItem/ProductItem';
import { Product } from '../../../features/products/products-slice';

import styles from './index.module.scss';

const FilteredProducts = () => {
  const { type, category } = useParams();

  const products = useSelector((state: RootState) => {
    return selectFilteredProducts(state, { type, category });
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h4>{type}</h4>
      <div className={styles.content}>
        {products.map((item: Product) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
