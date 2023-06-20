import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectAllConfigs,
  setUserName,
} from '../../features/configs/configs-slice';
import { selectAllCart } from '../../features/cart/cart-selectors';

// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './index.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { getSession } from '../../firebase/storage/local';

const NavBar = () => {
  const { isHome, userName, footer, isLogin, isSearchPage, isCartPage } =
    useSelector(selectAllConfigs);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { cart } = useSelector(selectAllCart);

  useEffect(() => {
    dispatch(setUserName(getSession().userName));
  }, [dispatch]);

  return (
    <nav
      className={styles.nav}
      style={
        footer
          ? {
              color: '#000',
            }
          : {
              color: isHome ? '#fff' : '#000',
              backgroundColor: isHome ? 'transparent' : '#fff',
            }
      }
    >
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h1 className={styles.title} onClick={() => navigate('/')}>
            Event
          </h1>
          <ul className={styles.list}>
            <li
              style={
                footer
                  ? { borderBottom: '1px solid #000' }
                  : {
                      borderBottom: isHome
                        ? '1px solid #fff'
                        : '1px solid #000',
                      visibility: isCartPage
                        ? 'hidden'
                        : isSearchPage
                        ? 'hidden'
                        : 'visible',
                    }
              }
              onClick={() => navigate('/search')}
            >
              SEARCH
            </li>
            <li
              style={
                isLogin ? { visibility: 'hidden' } : { visibility: 'visible' }
              }
              onClick={() =>
                userName ? navigate('/user') : navigate('/login')
              }
            >
              {userName ? userName : 'Log in'}
            </li>
            <li>HELP</li>
            <li
              onClick={() => navigate('/cart')}
              style={{ display: isCartPage ? 'none' : 'block' }}
            >
              <span
                className={cart.length <= 10 ? styles.number : styles.twoNumber}
              >
                {cart.length}
              </span>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
