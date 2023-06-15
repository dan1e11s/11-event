import { FC, useEffect, useRef, useState } from 'react';

import { BsPlus } from 'react-icons/bs';

import styles from './index.module.scss';
import ProductModal from './ProductModal/ProductModal';
import { useAppDispatch } from '../../../store';
import { addToCart } from '../../../features/cart/carts-slice';
import { Product } from '../../../features/products/products-slice';

const ProductItem: FC<{ item: any }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | Event) => {
      if (myRef.current && !myRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('scroll', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('scroll', handler);
    };
  }, [open]);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.image} alt="" />
        <div
          className={styles.plus}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <BsPlus className={styles.plusIcon} />
        </div>
      </div>
      <div className={styles.cardText}>
        <p style={{ fontSize: '10px' }}>{item.title}</p>
        <p style={{ fontSize: '10px' }}>{item.price}$</p>
      </div>
      <ProductModal cartItem={item} open={open} myRef={myRef} />
    </div>
  );
};

export default ProductItem;
