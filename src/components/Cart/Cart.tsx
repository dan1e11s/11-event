import { useSelector } from 'react-redux';
import { selectAllCart } from '../../features/cart/cart-selectors';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import TableFooter from '../TableFooter/TableFooter';

import { BiBookmark } from 'react-icons/bi';

import styles from './index.module.scss';

const Cart = () => {
  const { cart } = useSelector(selectAllCart);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <div className={styles.cartListTitles}>
          <p
            onClick={() => navigate('/cart')}
            className={pathname === '/cart' ? styles.active : ''}
          >
            Cart({cart.length})
          </p>
          <div className={styles.favourites}>
            <p
              onClick={() => navigate('/cart/favourites')}
              className={pathname === '/cart/favourites' ? styles.active : ''}
            >
              Favourites
            </p>
            <span>
              <BiBookmark />
            </span>
          </div>
        </div>
        <div
          className={styles.cartRelatedTitle}
          style={
            pathname === '/cart/favourites'
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          <p>Related</p>
        </div>
      </div>
      <Outlet />
      <TableFooter />
    </div>
  );
};

export default Cart;
