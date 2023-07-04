import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setIsCartPage } from '../../features/configs/configs-slice';

import Cart from '../../components/Cart/Cart';

import styles from './index.module.scss';

const CartPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsCartPage(true));

    return () => {
      dispatch(setIsCartPage(false));
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Cart />
    </div>
  );
};

export default CartPage;
