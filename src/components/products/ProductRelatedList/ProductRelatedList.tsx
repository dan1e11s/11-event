import { useSelector } from 'react-redux';
import {
  getOneProduct,
  getProducts,
} from '../../../features/products/products-actions';
import { RootState, useAppDispatch } from '../../../store';
import styles from './index.module.scss';
import {
  selectOneProduct,
  selectVisibleProducts,
} from '../../../features/products/products-selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';

const ProductRelatedList = () => {
  const oneProduct = useSelector(selectOneProduct);
  const products = useSelector((state: RootState) =>
    selectVisibleProducts(state, { category: oneProduct?.category })
  );

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProducts());
    if (id) {
      dispatch(getOneProduct(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <p className={styles.title}>You may also like</p>
      <div className={styles.content}>
        {products.map((item) => {
          if (item.id !== oneProduct?.id) {
            return <ProductItem key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ProductRelatedList;
