import { FC } from 'react';
import { useAppDispatch } from '../../../store';

import {
  CartProduct,
  decrementCount,
  incrementCount,
  removeItem,
} from '../../../features/cart/carts-slice';
import {
  addToFavourites,
  removeToFavourites,
  selectAllFavourites,
} from '../../../features/favourites/favourites-slice';

import { BiBookmark } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useSelector } from 'react-redux';

import styles from './index.module.scss';

const CartItem: FC<{ cartItem: CartProduct }> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const { favourites } = useSelector(selectAllFavourites);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartContent}>
        <img src={cartItem.item.image} alt="" />
      </div>
      <div className={styles.cartDescr}>
        <div className={styles.cartName}>
          <p>{cartItem.item.title}</p>
          <span>
            {favourites.length !== 0 ? (
              <>
                {favourites.some(
                  (item) => item.item.id === cartItem.item.id
                ) ? (
                  <BsFillBookmarkFill
                    onClick={() => {
                      dispatch(removeToFavourites(cartItem.item.id));
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <BiBookmark
                    onClick={() => {
                      dispatch(addToFavourites(cartItem));
                      dispatch(removeItem(cartItem.item.id));
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </>
            ) : (
              <BiBookmark
                onClick={() => {
                  dispatch(addToFavourites(cartItem));
                  dispatch(removeItem(cartItem.item.id));
                }}
                style={{ cursor: 'pointer' }}
              />
            )}
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
