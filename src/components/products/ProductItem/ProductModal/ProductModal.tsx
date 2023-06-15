import { FC } from 'react';
import styles from './index.module.scss';
import { useAppDispatch } from '../../../../store';
import { setCartBar } from '../../../../features/configs/configs-slice';
import { Product } from '../../../../features/products/products-slice';
import { addToCart } from '../../../../features/cart/carts-slice';

const ProductModal: FC<{
  cartItem: Product;
  open: boolean;
  myRef: any;
}> = ({ cartItem, open, myRef }) => {
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
        ].map((item) => (
          <li
            key={item}
            onClick={() => {
              dispatch(addToCart({ cartItem, size: item }));
              dispatch(setCartBar(true));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductModal;
