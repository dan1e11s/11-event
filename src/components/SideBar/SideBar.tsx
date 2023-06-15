import { useSelector } from 'react-redux';
import { selectAllConfigs } from '../../features/configs/configs-slice';

import styles from './index.module.scss';
import { selectAllProducts } from '../../features/products/products-selectors';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { getProducts } from '../../features/products/products-actions';

const SideBar = () => {
  const { sideBar } = useSelector(selectAllConfigs);
  const { products } = useSelector(selectAllProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div
      className={styles.sidebar}
      style={
        sideBar
          ? { opacity: 1, visibility: 'visible' }
          : { opacity: 0, visibility: 'hidden' }
      }
    >
      <div className={styles.container}>
        <div>
          <div className={styles.wrapper}>
            <div className={styles.content_titles}>
              <p>Mens</p>
              <p>Womens</p>
              <p>Kids</p>
            </div>
          </div>
          <ul className={styles.list}>
            {products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
