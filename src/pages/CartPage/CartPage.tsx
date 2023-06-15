import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import {
  setIsCartPage,
  setUserName,
} from '../../features/configs/configs-slice';
import { getSession } from '../../firebase/storage/local';

import Cart from '../../components/Cart/Cart';

import styles from './index.module.scss';

const CartPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsCartPage(true));
    dispatch(setUserName(getSession().userName));

    return () => {
      dispatch(setIsCartPage(false));
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Cart />
    </div>
  );
};

export default CartPage;
