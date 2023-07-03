import { useSelector } from 'react-redux';
import {
  selectAllConfigs,
  setSideBar,
} from '../../features/configs/configs-slice';

import styles from './index.module.scss';
import { selectProductsCategories } from '../../features/products/products-selectors';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { getProducts } from '../../features/products/products-actions';
import { selectCategory } from '../../features/controls/controls-selectors';
import { setProductsCategory } from '../../features/controls/controls-slice';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const category = useSelector(selectCategory);

  const { sideBar } = useSelector(selectAllConfigs);
  const categories = useSelector((state: RootState) => {
    return Array.from(new Set(selectProductsCategories(state, { category })));
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
            {categories.map((item, index) => (
              <li
                onClick={() => {
                  navigate(`/filter/${item}/${category}`);
                  dispatch(setSideBar());
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
