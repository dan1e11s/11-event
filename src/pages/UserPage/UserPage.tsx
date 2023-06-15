import { useEffect } from 'react';
import Personal from '../../components/Personal/Personal';
import { useAppDispatch } from '../../store';

import styles from './index.module.scss';
import { setUserName } from '../../features/configs/configs-slice';
import { getSession } from '../../firebase/storage/local';

const UserPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserName(getSession().userName));
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Personal />
      </div>
    </div>
  );
};

export default UserPage;
