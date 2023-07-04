import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllConfigs } from '../../features/configs/configs-slice';
import { selectAllCart } from '../../features/cart/cart-selectors';

// icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { getSession } from '../../firebase/storage/local';

import styles from './index.module.scss';

const NavBar = () => {
  const { isHome, footer, isLogin, isSearchPage, isCartPage } =
    useSelector(selectAllConfigs);

  const navigate = useNavigate();

  const { cart } = useSelector(selectAllCart);

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
                  ? { borderBottom: '1px 2solid #000' }
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
                getSession().userName ? navigate('/user') : navigate('/login')
              }
            >
              {getSession().userName ? getSession().userName : 'Log in'}
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
