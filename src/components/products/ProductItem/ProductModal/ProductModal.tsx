import { FC } from 'react';
import styles from './index.module.scss';
import { useAppDispatch } from '../../../../store';
import { setCartBar } from '../../../../features/configs/configs-slice';
import { Product } from '../../../../features/products/products-slice';
import { addToCart } from '../../../../features/cart/carts-slice';

const ProductModal: FC<{
  item: Product;
  open: boolean;
  myRef: any;
}> = ({ item, open, myRef }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      ref={myRef}
      className={styles.sizes}
      style={open ? { display: 'block' } : { display: 'none' }}
    >
      <ul>
        {[
          'XS (extra small)',
          'S (small)',
          'M (middle)',
          'L (large)',
          'XL (extra large)',
          'XXL (extra extra large)',
        ].map((elem) => (
          <li
            key={elem}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart({ item, size: elem }));
              dispatch(setCartBar(true));
            }}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductModal;
