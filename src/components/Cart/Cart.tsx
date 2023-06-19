import { useSelector } from 'react-redux';
import { selectAllCart } from '../../features/cart/cart-selectors';

import CartItem from './CartItem/CartItem';

import { BiBookmark } from 'react-icons/bi';

import styles from './index.module.scss';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { setTotalPrice } from '../../features/cart/carts-slice';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../features/products/products-actions';
import { selectRelatedProducts } from '../../features/products/products-selectors';
import TableFooter from '../TableFooter/TableFooter';

const Cart = () => {
  const { cart, totalPrice } = useSelector(selectAllCart);

  const products = useSelector((state: RootState) =>
    selectRelatedProducts(state, cart)
  );

  console.log(products);

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setTotalPrice());
    dispatch(getProducts());
  }, [cart, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <div className={styles.cartListTitles}>
          <p className={pathname === '/cart' ? styles.active : ''}>
            Cart({cart.length})
          </p>
          <div className={styles.favourites}>
            <p className={pathname === '/favourites' ? styles.active : ''}>
              Favourites
            </p>
            <span>
              <BiBookmark />
            </span>
          </div>
        </div>
        <div className={styles.cartRelatedTitle}>
          <p>Related</p>
        </div>
      </div>
      <div className={styles.cartContent}>
        <div className={styles.cartList}>
          {cart &&
            cart.map((item) => <CartItem key={item.item.id} cartItem={item} />)}
        </div>
        <div className={styles.cartRelated}>
          {products.map((item) => (
            <div
              style={{
                width: '45%',
                height: '185px',
                marginBottom: '20px',
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cartTotal}>
        <p>Total: {Math.round(totalPrice)}$</p>
        <button>continue</button>
      </div>
      <TableFooter />
    </div>
  );
};

export default Cart;
