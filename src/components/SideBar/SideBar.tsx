import { useSelector } from 'react-redux';
import { selectAllConfigs } from '../../features/configs/configs-slice';

import styles from './index.module.scss';
import { selectVisibleProducts } from '../../features/products/products-selectors';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { getProducts } from '../../features/products/products-actions';
import { selectCategory } from '../../features/controls/controls-selectors';
import { setProductsCategory } from '../../features/controls/controls-slice';

const SideBar = () => {
  const category = useSelector(selectCategory);

  const { sideBar } = useSelector(selectAllConfigs);
  const products = useSelector((state: RootState) => {
    return selectVisibleProducts(state, { category });
  });

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
              <p
                style={
                  category === "men's clothing"
                    ? { borderBottom: '1px solid #000' }
                    : { borderBottom: 'none' }
                }
                onClick={() => dispatch(setProductsCategory("men's clothing"))}
              >
                Mens
              </p>
              <p
                style={
                  category === "women's clothing"
                    ? { borderBottom: '1px solid #000' }
                    : { borderBottom: 'none' }
                }
                onClick={() =>
                  dispatch(setProductsCategory("women's clothing"))
                }
              >
                Womens
              </p>
              <p
                style={
                  category === "kid's clothing"
                    ? { borderBottom: '1px solid #000' }
                    : { borderBottom: 'none' }
                }
                onClick={() => dispatch(setProductsCategory("kid's clothing"))}
              >
                Kids
              </p>
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
