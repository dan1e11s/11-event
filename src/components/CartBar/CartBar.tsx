import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import {
  selectAllConfigs,
  setCartBar,
} from '../../features/configs/configs-slice';
import { selectAllCart } from '../../features/cart/cart-selectors';
import { useNavigate } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

import styles from './index.module.scss';

const CartBar = () => {
  const { cartBar } = useSelector(selectAllConfigs);

  const { cart } = useSelector(selectAllCart);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <div
      className={styles.cart}
      style={
        cartBar
          ? { opacity: '1', visibility: 'visible' }
          : { opacity: '0', visibility: 'hidden' }
      }
    >
      <div className={styles.wrapper}>
        <div
          className={styles.iconClose}
          onClick={() => dispatch(setCartBar(false))}
        >
          <IoMdClose />
        </div>
        <p className={styles.title}>
          Size {cart.at(-1)?.size} added to your shopping bag
        </p>
        <div className={styles.content}>
          <div className={styles.cartImage}>
            <img src={cart.at(-1)?.item.image} alt="" />
          </div>
          <div className={styles.cartText}>
            <p>{cart.at(-1)?.item.title}</p>
            <p>Price: {cart.at(-1)?.item.price}$</p>
          </div>
        </div>
        <button className={styles.basketBtn} onClick={() => navigate('/cart')}>
          See shopping basket
        </button>
      </div>
    </div>
  );
};

export default CartBar;
