import { FC } from 'react';
import { useAppDispatch } from '../../../store';
import { removeToFavourites } from '../../../features/favourites/favourites-slice';
import { CartProduct, addToCart } from '../../../features/cart/carts-slice';

import { BsFillBookmarkFill } from 'react-icons/bs';

import styles from './index.module.scss';

const FavouritesItem: FC<{ item: CartProduct }> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <img src={item.item.image} alt="" />
      </div>
      <div className={styles.itemDescr}>
        <div className={styles.itemName}>
          <p>{item.item.title}</p>
          <span>
            <BsFillBookmarkFill
              onClick={() => dispatch(removeToFavourites(item.item.id))}
            />
          </span>
        </div>
        <div className={styles.itemPrice}>
          <p>{Math.round(item.item.price)}$</p>
          <p>{item.size}</p>
        </div>
        <div className={styles.itemBtn}>
          <button
            onClick={() =>
              dispatch(addToCart({ item: item.item, size: item.size }))
            }
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
