import { BiBookmark } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import styles from './index.module.scss';
import {
  CartProduct,
  decrementCount,
  incrementCount,
  removeItem,
} from '../../../features/cart/carts-slice';
import { FC } from 'react';
import { useAppDispatch } from '../../../store';

const CartItem: FC<{ cartItem: CartProduct }> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartContent}>
        <img src={cartItem.item.image} alt="" />
      </div>
      <div className={styles.cartDescr}>
        <div className={styles.cartName}>
          <p>{cartItem.item.title}</p>
          <span>
            <BiBookmark />
          </span>
        </div>
        <div className={styles.cartPrice}>
          <p>{Math.round(cartItem.subPrice)}$</p>
          <p>{cartItem.size}</p>
        </div>
        <div className={styles.cartBtns}>
          <div className={styles.cartCount}>
            <AiOutlineMinus
              onClick={() => dispatch(decrementCount(cartItem.item.id))}
              style={{ cursor: 'pointer' }}
            />
            <span>{cartItem.count}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementCount(cartItem.item.id))}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <p onClick={() => dispatch(removeItem(cartItem.item.id))}>delete</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
