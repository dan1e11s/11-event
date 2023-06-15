import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import TableFooter from '../TableFooter/TableFooter';

const Personal = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.personal}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li
            className={pathname === '/user' ? styles.active : ''}
            onClick={() => navigate('/user')}
          >
            Purchases
          </li>
          <li
            className={pathname === '/user/account' ? styles.active : ''}
            onClick={() => navigate('/user/account')}
          >
            Account
          </li>
          <li
            className={pathname === '/user/settings' ? styles.active : ''}
            onClick={() => navigate('/user/settings')}
          >
            Settings
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <TableFooter />
    </div>
  );
};

export default Personal;
