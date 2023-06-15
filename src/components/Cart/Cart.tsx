import { useSelector } from 'react-redux';
import { selectAllCart } from '../../features/cart/cart-selectors';

import CartItem from './CartItem/CartItem';

import { BiBookmark } from 'react-icons/bi';

import styles from './index.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setTotalPrice } from '../../features/cart/carts-slice';

const Cart = () => {
  const { cart, totalPrice } = useSelector(selectAllCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTotalPrice());
  }, [cart, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <p>Cart({cart.length})</p>
        <div className={styles.favourites}>
          <p>Favourites</p>
          <span>
            <BiBookmark />
          </span>
        </div>
      </div>
      <div className={styles.cartList}>
        {cart &&
          cart.map((item) => <CartItem key={item.item.id} cartItem={item} />)}
      </div>
      <div className={styles.cartTotal}>
        <p>Total: {Math.round(totalPrice)}$</p>
        <button>continue</button>
      </div>
    </div>
  );
};

export default Cart;
