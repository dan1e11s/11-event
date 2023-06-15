import { useEffect } from 'react';
import { useAppDispatch } from '../../store';

// components
import TableFooter from '../../components/TableFooter/TableFooter';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import styles from './index.module.scss';
import { setProductsCategory } from '../../features/controls/controls-slice';

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProductsCategory("women's clothing"));
  }, [dispatch]);

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <RegisterForm />
        <TableFooter />
      </div>
    </div>
  );
};

export default RegisterPage;
