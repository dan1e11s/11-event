import { FC, useEffect, useRef, useState } from 'react';

import { BsPlus } from 'react-icons/bs';

import styles from './index.module.scss';
import ProductModal from './ProductModal/ProductModal';
import { Product } from '../../../features/products/products-slice';
import { useNavigate } from 'react-router-dom';

const ProductItem: FC<{ item: Product }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const myRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/products/${item.id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <div className={styles.img}>
        <img src={item.image} alt="" />
        <div
          className={styles.plus}
          onClick={(e) => {
            e.stopPropagation();
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
      <ProductModal item={item} open={open} myRef={myRef} />
    </div>
  );
};

export default ProductItem;
