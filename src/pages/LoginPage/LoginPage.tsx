import { useEffect } from 'react';
import { useAppDispatch } from '../../store';

// components
import LoginForm from '../../components/LoginForm/LoginForm';
import TableFooter from '../../components/TableFooter/TableFooter';

import { setIsLogin } from '../../features/configs/configs-slice';

import styles from './index.module.scss';
import { setProductsCategory } from '../../features/controls/controls-slice';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLogin(true));
    dispatch(setProductsCategory("women's clothing"));

    return () => {
      dispatch(setIsLogin(false));
    };
  }, [dispatch]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.container}>
        <LoginForm />
        <TableFooter />
      </div>
    </div>
  );
};

export default LoginPage;
